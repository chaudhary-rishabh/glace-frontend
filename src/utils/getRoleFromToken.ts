import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    id: string;
    role: 'buyer' | 'seller' | 'admin';
    exp: number;
}

export const getUserFromToken = (): DecodedToken | null => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) return null;

    try {
        return jwtDecode<DecodedToken>(token);
    } catch {
        return null;
    }
};