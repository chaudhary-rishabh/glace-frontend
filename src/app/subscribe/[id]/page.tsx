'use client'
import SkeletonLoader from '@/components/Skeleton';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import { api } from '@/lib/api';

interface ProductOption {
    _id: string;
    name: string;
    desc: string;
    price: number;
}

const ProductSelectionPage: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const router = useRouter()
    const [productOptions, setProductOptions] = useState<ProductOption[]>([]);
    const [quantities, setQuantities] = useState<Record<string, number>>({});
    useEffect(() => {
        const categoryOptions = async () => {
            try {
                const response = await api.get<ProductOption[]>('/products/getAllProducts');
                if (!response.data) {
                    setIsLoading(true);
                }
                setProductOptions(response.data);
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        categoryOptions();
    }, []);


    const handleSelect = (name: string) => {
        setSelectedOption(name);
    };

    const handleNext = () => {
        if (selectedOption) {
            // Using standard HTML navigation instead of Next.js Router
            window.location.href = `/subscribe/${selectedOption}`;
        }
    };

    useEffect(() => {
        // Replace this with your actual authentication check
        const checkAuthStatus = () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setIsLoggedIn(false);
                router.push('/auth/login');
                return;
            } else {
                setIsLoggedIn(true);
                return;
            }
        };

        checkAuthStatus();
        setIsLoading(false);
    }, [router]);


    const increase = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();                       // ⬅️  important line
        setQuantities(prev => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    };

    const decrease = (e: React.MouseEvent, id: string) => {
        e.stopPropagation();                       // ⬅️  important line
        setQuantities(prev => ({
            ...prev,
            [id]: Math.max((prev[id] ?? 0) - 1, 0),
        }));
    };


    const totalAmount = productOptions.reduce((sum, opt) => {
        return sum + (quantities[opt._id] || 0) * opt.price;
    }, 0);


    if (isLoading || !isLoggedIn) {
        return <SkeletonLoader />;
    }



    return (
        <div className="flex flex-col min-h-screen mt-20">
            <div className="flex flex-col md:flex-row flex-1 max-w-6xl mx-auto p-4 md:p-8">
                {/* Left side - Image */}
                <div className="lg:fixed lg:right-20 lg:top-52 sticky right-2 top-12 h-1/2 rounded-3xl w-screen bg-white p-10 md:w-2/5 mb-8 md:mb-0 flex items-center justify-center">
                    <div className="relative w-full max-w-md">
                        <Image
                            src={"/glace lemon.png"}
                            alt={"/glace lemon.png"}
                            width={200}
                            height={200}
                            className="w-3/12 h-3/12 object-cover rounded-lg"
                        />
                        <div className="mt-6 w-full">
                            <p className="text-xl font-semibold text-gray-700">Total: ₹{totalAmount}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={handleNext}
                            disabled={!selectedOption}
                            className={`w-full py-4 px-6 rounded-full text-white text-lg font-medium flex items-center justify-center transition-all ${selectedOption
                                ? 'bg-green-900 hover:bg-green-800'
                                : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            Checkout
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right side - Selection options */}
                <div className="w-full md:w-1/2 md:pl-8 p-2 flex flex-col">
                    <div className="mb-8">
                        <div className="mt-4">
                            <p className="text-2xl md:text-2xl font-bold text-green-900">CHOOSE YOUR Glace</p>
                            <div className="mt-2 bg-gray-200 h-2 rounded-full">
                                <div className="bg-green-500 h-full rounded-full w-2/2"></div>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">2 of 2</p>
                        </div>
                    </div>

                    <div className="space-y-2 flex-1">
                        {productOptions.map((option) => (
                            <div
                                key={option._id}
                                className={`bg-white border-2 rounded-3xl p-4 cursor-pointer transition-all ${selectedOption === option._id
                                    ? 'border-green-500'
                                    : 'border-gray-200 hover:border-gray-300'
                                    }`}
                                onClick={() => handleSelect(option._id)}
                            >
                                <div className="flex items-start">
                                    <div className="flex items-center justify-center h-10/12 w-3/12">
                                        <Image
                                            src={"/glace lemon.png"}
                                            alt={"/glace lemon.png"}
                                            width={500}
                                            height={500}
                                            className={`w-10/12 h-8/12 object-cover rounded-3xl shadow-lg ${selectedOption === option._id
                                                ? 'bg-green-800'
                                                : 'bg-gray-100 hover:bg-gray-100'
                                                }`}
                                        />
                                    </div>
                                    <div className="p-4 rounded-3xl flex-1">
                                        <div className="flex items-center mt-1">
                                            <p className="font-medium">Starting at ₹{option.price}</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900">{option.name}</h3>
                                        <p className="text-gray-600 mt-1">{option.desc}</p>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={e => decrease(e, option._id)}
                                                className="px-3 py-1 bg-gray-200 rounded-full"
                                            >
                                                –
                                            </button>

                                            <span>{quantities[option._id] ?? 0}</span>

                                            <button
                                                onClick={e => increase(e, option._id)}
                                                className="px-3 py-1 bg-gray-200 rounded-full"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductSelectionPage;