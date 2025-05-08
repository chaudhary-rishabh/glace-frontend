import React from 'react';
import { User, Coffee, CircleCheck, ShoppingCart } from 'lucide-react';

export default function FlowDesign() {
    return (
        <div className="w-full max-w-4xl mx-auto relative py-12 px-4">

            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl opacity-70 z-0 p-32"></div>


            <div className="flex justify-between items-center mb-16 relative z-10">

                <div className="bg-white rounded-xl shadow-md p-4 w-64 relative">
                    <div className="flex items-center">
                        <User className="w-6 h-6 text-green-700 mr-3" />
                        <div>
                            <h3 className="font-medium text-gray-800">Login</h3>
                            <p className="text-xs text-gray-500">Sign in to account</p>
                        </div>
                    </div>

                    <div className="w-3 h-3 bg-green-500 rounded-full absolute top-1/2 -right-1.5 z-20"></div>
                </div>


                <div className="flex-1 relative mx-4">
                    <svg className="w-full h-16" viewBox="0 0 200 40" preserveAspectRatio="none">
                        <path
                            d="M0,20 C50,40 150,0 200,20"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>


                <div className="bg-white rounded-xl shadow-md p-4 w-64 relative">

                    <div className="w-3 h-3 bg-green-500 rounded-full absolute top-1/2 -left-1.5 z-20"></div>
                    <div className="flex items-center">
                        <Coffee className="w-6 h-6 text-green-700 mr-3" />
                        <div>
                            <h3 className="font-medium text-gray-800">Select Category</h3>
                            <p className="text-xs text-gray-500">Browse juice types</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-between items-center relative z-10">

                <div className="bg-white rounded-xl shadow-md p-4 w-64 relative">
                    <div className="flex items-center">
                        <CircleCheck className="w-6 h-6 text-green-700 mr-3" />
                        <div>
                            <h3 className="font-medium text-gray-800">Select Juice</h3>
                            <p className="text-xs text-gray-500">Choose your favorite</p>
                        </div>
                    </div>

                    <div className="w-3 h-3 bg-green-500 rounded-full absolute top-1/2 -right-1.5 z-20"></div>
                </div>


                <div className="flex-1 relative mx-4">
                    <svg className="w-full h-16" viewBox="0 0 200 40" preserveAspectRatio="none">
                        <path
                            d="M0,20 C50,0 150,40 200,20"
                            stroke="#22c55e"
                            strokeWidth="2"
                            fill="none"
                        />
                    </svg>
                </div>


                <div className="bg-white rounded-xl shadow-md p-4 w-64 relative">

                    <div className="w-3 h-3 bg-green-500 rounded-full absolute top-1/2 -left-1.5 z-20"></div>
                    <div className="flex items-center">
                        <ShoppingCart className="w-6 h-6 text-green-700 mr-3" />
                        <div>
                            <h3 className="font-medium text-gray-800">Order</h3>
                            <p className="text-xs text-gray-500">Complete purchase</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}