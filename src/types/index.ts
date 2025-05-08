export interface User {
    id: string;
    email: string;
    role: "Admin" | "Buyer";
    subscriptionStatus: boolean;
    subscriptionExpiry?: string;
}