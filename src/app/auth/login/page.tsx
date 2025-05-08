"use client";

import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(email, password);
            toast.success("Logged in successfully!");
            window.location.href = "/";
        } catch (error) {
            console.error(error);
            toast.error("Login failed!");
        }
    };

    return (
        <div className="container mx-auto pt-32 max-w-5xl w-screen h-screen">
            <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
            <form onSubmit={handleSubmit} className="space-y-4 p-14 w-2/5 mx-auto bg-white shadow-md rounded-3xl">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-2 outline-none bg-stone-100 rounded-xl"
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    className="w-full p-2 outline-none bg-stone-100 rounded-xl"
                />

                <button type="submit" className="my-2 w-full bg-green-900 hover:bg-green-700 text-white p-2 rounded-2xl">
                    Login
                </button>
                <button
                    type="button"
                    className="w-full flex items-center justify-center gap-2 border-2 border-gray-500 text-black p-2 rounded-2xl"
                >
                    <FcGoogle size={20} />
                    Google
                </button>

                <p className="text-sm text-center text-gray-600">
                    New user?{" "}
                    <Link href="/auth/register" className="text-green-900 font-semibold hover:underline">
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    );
}
