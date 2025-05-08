'use client'
import { api } from '@/lib/api'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Page = () => {
    interface Product {
        id: string;
        name: string;
        price: number;
    }

    const [products, setProducts] = React.useState<Product[]>([]);
    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get('/products/getAllProducts');
                setProducts(response.data);

                console.log(response.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        getProducts();
    }, [])

    return (
        <div className='flex align-middle w-3/4 justify-around mt-20 p-4 mx-auto flex-wrap'>
            {products.map((product) => (
                <div key={product.id} className='mx-auto bg-green-100/40  roundedLg shadow-lg p-6 m-8'>
                    <div className='bg-white shadow-lg shadow-gray-900/20 py-4 roundedLg'>
                        <Image
                            src={"/glace apple.png"}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="w-6/12 h-6/12 object-cover mx-auto rounded-xl"
                        />
                        <div className='border-t-4 border-green-100'></div>
                        <div className='p-3 roundedLg'>
                            <h2 className='text-2xl text-gray-700 font-bold text-center mb-1'>{product.name}</h2>
                            <p className='text-gray-700 font-semibold text-center'>Starting at ₹{product.price}</p>
                            <div className='flex justify-center'>
                                <Link href={product.name} className='border-2 border-white hover:bg-white font-semibold text-green-800 p-2 rounded-2xl m-2 bg-white shadow-md hover:shadow-green-600/50 shadow-green-900/30  block text-center'>Order</Link>
                                <Link href={product.name} className='border-2 border-white hover:bg-white font-semibold text-green-800 p-2 rounded-2xl m-2 bg-white shadow-md hover:shadow-green-600/50 shadow-green-900/30 block text-center'>Research</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {/* <div className='mx-auto bg-white rounded-3xl shadow-lg p-8 m-8'>
                <Image
                    src={"/glace coconut water.png"}
                    alt={"glace jug pouring"}
                    width={400}
                    height={400}
                    className="w-3/12 h-3/12 object-cover mx-auto rounded-lg"
                />
                <h2 className='text-2xl font-bold text-center mb-4'>Collection</h2>
                <p className='text-gray-600 text-center'>Explore our collection of .</p>
            </div> */}
        </div>
    )
}

export default Page