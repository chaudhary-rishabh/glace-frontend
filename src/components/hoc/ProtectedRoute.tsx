"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";

interface ProtectedRouteProps {
    children: ReactNode;
    role?: "Admin" | "Buyer"; // Optional role restriction
}

export default function ProtectedRoute({ children, role }: ProtectedRouteProps) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/auth/login");
        } else if (role && user.role !== role) {
            router.push("/"); // Redirect to generic dashboard if role doesn't match
        }
    }, [user, role, router]);

    if (!user || (role && user.role !== role)) {
        return null; // Or a loading spinner
    }

    return <>{children}</>;
}