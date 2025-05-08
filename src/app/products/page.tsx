"use client";

import { useEffect, useState } from "react";
import { api } from "@/lib/api";
import Link from "next/link";

interface Product {
    _id: string;
    name: string;
    price: number;
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        api.get("/products").then((res) => setProducts(res.data.products));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <div key={product._id} className="p-4 bg-gray-100 rounded">
                        <Link href={`/products/${product._id}`}>
                            <h2 className="text-lg font-semibold">{product.name}</h2>
                            <p>₹{product.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}