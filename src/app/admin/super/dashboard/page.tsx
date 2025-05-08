import ProtectedRoute from "@/components/hoc/ProtectedRoute";
import { api } from "@/lib/api";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
    const [metrics, setMetrics] = useState({ totalOrders: 0, totalUsers: 0, totalProducts: 0 });

    useEffect(() => {
        const token = localStorage.getItem("token");
        api
            .get("/admin/dashboard", { headers: { Authorization: `Bearer ${token}` } })
            .then((res) => setMetrics(res.data));
    }, []);

    return (
        <ProtectedRoute role="Admin">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="p-4 bg-gray-100 rounded">
                        <p>Total Orders: {metrics.totalOrders}</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded">
                        <p>Total Users: {metrics.totalUsers}</p>
                    </div>
                    <div className="p-4 bg-gray-100 rounded">
                        <p>Total Products: {metrics.totalProducts}</p>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}