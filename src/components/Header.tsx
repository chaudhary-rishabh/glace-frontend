'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image';
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
    Popover,
    PopoverButton,
    PopoverPanel
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
    UserCircleIcon,
    ShoppingBagIcon,
    ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Check if user is logged in when component mounts
    useEffect(() => {
        const checkAuthStatus = () => {
            const token = localStorage.getItem('token');
            setIsLoggedIn(!!token);
        };

        checkAuthStatus();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
        window.location.href = '/';
    };
    return (
        <header className="fixed bgMain inset-x-0 top-0 z-50">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Glace Juice</span>
                        <Image
                            alt="glace juices"
                            src="/glace juice logo.png"
                            className="h-auto w-auto"
                            width={100}
                            height={100}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open glace main menu</span>
                        <Bars3Icon aria-hidden="true" className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Link href="/subscribe" className="text-lg/6 outline-none font-semibold text-gray-900">
                        Subscribe
                    </Link>
                    <Link href="/ingredients" className="text-lg/6 outline-none font-semibold text-gray-900">
                        Ingredients
                    </Link>
                    <Link href="/collection" className="text-lg/6 outline-none font-semibold text-gray-900">
                        Glace Collection
                    </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {isLoggedIn ? (
                        <Popover className="relative">
                            <PopoverButton className="flex items-center text-lg font-semibold text-gray-900 focus:outline-none">
                                <UserCircleIcon className="h-8 w-8 text-gray-700" />
                            </PopoverButton>
                            <PopoverPanel className="absolute right-0 z-10 mt-3 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <UserCircleIcon className="mr-2 h-5 w-5" />
                                    Profile
                                </Link>
                                <Link href="/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                    <ShoppingBagIcon className="mr-2 h-5 w-5" />
                                    Orders
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                                >
                                    <ArrowRightOnRectangleIcon className="mr-2 h-5 w-5" />
                                    Logout
                                </button>
                            </PopoverPanel>
                        </Popover>
                    ) : (
                        <Link href="/auth/login" className="text-lg/6 hover:shadow-sm hover:shadow-green-400 btnBg font-semibold text-gray-900">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                    )}
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Glace Juice</span>
                            <Image
                                alt="glace juices"
                                src="/glace juice logo.png"
                                className="h-auto w-auto"
                                width={50}
                                height={50}
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close glace menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="/subscribe"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Subscribe
                                </Link>
                                <Link
                                    href="/ingredients"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Ingredients
                                </Link>
                                <Link
                                    href="/collection"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Glace Collection
                                </Link>
                            </div>
                            <div className="py-6">
                                {!isLoggedIn ? (
                                    <Link
                                        href="/auth/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href="/profile"
                                            className="-mx-3 flex items-center rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            <UserCircleIcon className="mr-2 h-5 w-5" />
                                            Profile
                                        </Link>
                                        <Link
                                            href="/orders"
                                            className="-mx-3 flex items-center rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            <ShoppingBagIcon className="mr-2 h-5 w-5" />
                                            Orders
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="-mx-3 flex w-full items-center rounded-lg px-3 py-2 text-left text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                        >
                                            <ArrowRightOnRectangleIcon className="mr-2 h-5 w-5" />
                                            Logout
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}