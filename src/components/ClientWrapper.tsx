'use client'

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "react-toastify/dist/ReactToastify.css";
import SkeletonLoader from "@/components/Skeleton";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
    const [isHydrated, setIsHydrated] = useState(false);
    // const [authChecked, setAuthChecked] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token && window.location.pathname !== '/auth/login') {
            window.location.href = '/auth/login';
            return;
        }

        setIsHydrated(true);
    }, []);

    if (!isHydrated) {
        return <SkeletonLoader />;
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}
