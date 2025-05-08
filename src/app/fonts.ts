import { Signika_Negative, Signika } from 'next/font/google';

export const signikanegative = Signika_Negative({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-signika-negative',
});

export const signika = Signika({
    subsets: ['latin'],
    display: 'swap',
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-signika',
});