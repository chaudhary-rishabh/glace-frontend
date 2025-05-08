"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { User } from "@/types/user";

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         api
    //             .get("/register", { headers: { Authorization: `Bearer ${token}` } })
    //             .then((res) => setUser(res.data))
    //             .catch(() => {
    //                 localStorage.removeItem("token");
    //                 setUser(null);
    //             });
    //     }
    // }, []);

    const login = async (email: string, password: string) => {
        const res = await api.post("/auth/login", { email, password });
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        setUser(user);
        router.push("/");
    };

    const register = async (email: string, password: string, role?: "Admin" | "Buyer") => {
        const res = await api.post("/auth/register", { email, password, role });
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        setUser(user);
        router.push("/");
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        router.push("/");
    };

    return { user, login, register, logout };
};