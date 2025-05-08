"use client";
import { useState, MouseEvent } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { User, MapPin, ShoppingCart, Star, CreditCard, X } from "lucide-react";

interface ProfileData {
    username: string;
    name: string;
    mobile: string;
}
interface AddressData {
    current: string;
}
interface SectionState {
    profile: ProfileData;
    address: AddressData;
}

export default function Profile() {
    const sections = [
        { key: "profile", label: "Profile", Icon: User },
        { key: "address", label: "Address", Icon: MapPin },
        { key: "orders", label: "Orders", Icon: ShoppingCart },
        { key: "reviews", label: "Reviews", Icon: Star },
        { key: "subscription", label: "Subscription", Icon: CreditCard },
    ];

    const [openSection, setOpenSection] = useState<string | null>(null);
    const [data, setData] = useState<SectionState>({
        profile: { username: "", name: "", mobile: "" },
        address: { current: "" },
    });

    function openModal(key: string, e: MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        setOpenSection(key);
    }
    function closeModal() {
        setOpenSection(null);
    }

    function handleChange(
        section: keyof SectionState,
        field: string,
        value: string
    ) {
        setData((prev) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    }

    function handleSubmit(section: keyof SectionState) {
        console.log("Submitting", section, data[section]);
        closeModal();
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-green-900">Dashboard Overview</h1>
            <div className="grid grid-cols-1 gap-6 mb-8 max-w-xs mx-auto">
                {sections.map(({ key, label, Icon }) => (
                    <div
                        key={key}
                        onClick={(e) => (key === "profile" || key === "address") && openModal(key, e)}
                        className="cursor-pointer p-6 bg-white shadow-xl rounded-3xl text-green-900 flex items-center justify-center space-x-2"
                    >
                        <Icon className="w-6 h-6" />
                        <span className="font-semibold">{label}</span>
                    </div>
                ))}
            </div>

            {sections.map(({ key, label, Icon }) => (
                <Dialog
                    key={key}
                    open={openSection === key}
                    onClose={() => closeModal()}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                >
                    <div className="fixed inset-0 bg-black/30" onClick={closeModal} />

                    <DialogPanel
                        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-2">
                                <Icon className="w-5 h-5 text-green-900" />
                                <DialogTitle className="text-xl font-bold text-green-900">
                                    {label}
                                </DialogTitle>
                            </div>
                            <button onClick={closeModal}>
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {key === "profile" && (
                                <div className="space-y-2">
                                    {(["username", "name", "mobile"] as const).map((field) => (
                                        <div key={field} className="flex flex-col">
                                            <label className="font-semibold capitalize">{field}:</label>
                                            <input
                                                type="text"
                                                className="w-full mt-1 p-2 border rounded"
                                                value={data.profile[field]}
                                                onChange={(e) => handleChange("profile", field, e.target.value)}
                                            />
                                        </div>
                                    ))}
                                    <button
                                        onClick={() => handleSubmit("profile")}
                                        className="mt-4 flex items-center space-x-2 bg-green-900 text-white px-4 py-2 rounded-3xl"
                                    >
                                        <User className="w-4 h-4" />
                                        <span>Save Profile</span>
                                    </button>
                                </div>
                            )}

                            {key === "address" && (
                                <div className="space-y-2">
                                    <label className="font-semibold">Current Address:</label>
                                    <input
                                        type="text"
                                        className="w-full mt-1 p-2 border rounded"
                                        value={data.address.current}
                                        onChange={(e) => handleChange("address", "current", e.target.value)}
                                    />
                                    <button
                                        onClick={() => handleSubmit("address")}
                                        className="mt-2 flex items-center space-x-2 bg-green-900 text-white px-4 py-2 rounded-3xl"
                                    >
                                        <MapPin className="w-4 h-4" />
                                        <span>Save Address</span>
                                    </button>
                                </div>
                            )}

                            {(key === "orders" || key === "reviews" || key === "subscription") && (
                                <p className="text-gray-500 text-center">No {label.toLowerCase()} yet</p>
                            )}
                        </div>
                    </DialogPanel>
                </Dialog>
            ))}
        </div>
    );
}
