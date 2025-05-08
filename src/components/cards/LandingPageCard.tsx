'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const LandingPageCard = () => {
    const [id, setId] = useState(1);
    const products = [
        {
            id: 1,
            name: 'Glace Lemon Juice',
            price: 12.99,
            image: '/glace lemon.png',
            description: 'A refreshing and sweet lemon-flavored Glace juice',
        },
        {
            id: 2,
            name: 'Glace Ash Gourd Juice',
            price: 12.99,
            image: '/glace ash gourd.png',
            description: 'A refreshing and sweet ashgourd-flavored Glace juice',
        },
        {
            id: 3,
            name: 'Glace Kale Juice',
            price: 12.99,
            image: '/glace kale.png',
            description: 'A refreshing and sweet kale-flavored Glace juice',
        },
        {
            id: 4,
            name: 'Glace Apple Juice',
            price: 12.99,
            image: '/glace apple.png',
            description: 'A refreshing and sweet Apple-flavored Glace juice',
        },
    ];

    const currentIndex = Math.min(Math.max(id - 1, 0), products.length - 1);
    const currentProduct = products[currentIndex];

    const handlePrevious = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (id > 1) setId(id - 1);
    };

    const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (id < products.length) setId(id + 1);
    };

    return (
        <div className="w-full mt-24 lg:mt-12 md:w-10/12 lg:w-8/12 xl:w-6/12 bgCream roundedLg flex flex-col items-center justify-center shadow-lg p-4 sm:p-6 md:p-10 lg:p-14 mx-auto">
            <div className="w-full h-48 sm:h-56 md:h-64 lg:h-80 relative rounded-lg flex items-center justify-center mb-4">
                <Image
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    fill
                    className="object-contain roundedLg"
                />
            </div>
            <div className="flex items-center justify-center w-full mb-2">
                <button
                    onClick={handlePrevious}
                    disabled={id === 1}
                    className={`text-2xl md:text-3xl lg:text-4xl text-white font-bold py-1 px-4 rounded-l-2xl ${id === 1 ? 'bg-green-700/50' : 'bg-green-900 hover:bg-green-700'
                        } transition-all duration-300`}
                    aria-label="Previous product"
                >
                    ←
                </button>
                <div className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-medium bg-green-900 py-1 px-2 md:px-4">
                    {id} / {products.length}
                </div>
                <button
                    onClick={handleNext}
                    disabled={id === products.length}
                    className={`text-2xl md:text-3xl lg:text-4xl text-white font-bold py-1 px-4 rounded-r-2xl ${id === products.length ? 'bg-green-700/50' : 'bg-green-900 hover:bg-green-700'
                        } transition-all duration-300`}
                    aria-label="Next product"
                >
                    →
                </button>
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl text-green-900 font-semibold text-center mt-2">
                {currentProduct.name}
            </h2>
        </div>
    );
};

export default LandingPageCard;