'use client';
import React, { useState, useRef } from 'react'

const Page = () => {
    // State to track selected category and juice
    // const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedJuice, setSelectedJuice] = useState({
        'Glow Skin': 'ABC Juice',
        'Weight Loss': 'Ash Gourd',
        'Gut Health': 'Methi Water',
        'Immunity': 'Amala Juice'
    });

    // References for scrolling to sections
    const glowSkinRef = useRef(null);
    const weightLossRef = useRef(null);
    const gutHealthRef = useRef(null);
    const immunityRef = useRef(null);

    // const getJuiceImage = (category, juice) => {
    //     return `/juices/${category}/${juice.replace(/\s+/g, '-').toLowerCase()}.png`;
    // };

    // Scroll to section function
    const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Function to handle juice selection
    const handleJuiceSelect = (category: string, juice: string) => {
        setSelectedJuice(prev => ({
            ...prev,
            [category]: juice
        }));
    };

    return (
        <div className="min-h-screen bg-[#fbf2e6] py-12 px-4">
            {/* Hero Section */}
            <div className="lg:h-5/6 ingredientsBg lg:w-7/12 w-11/12 h-full mx-auto bg-gray-50 flex items-center justify-center shadow-lg rounded-3xl mt-12 p-8 lg:p-14 relative overflow-hidden bg-gradient-to-br from-green-50 to-[#fbf2e6]">
                <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10 mix-blend-overlay"></div>

                <div className="w-1/4 h-96 flex items-center justify-center mb-4 z-10">
                    <ol className="space-y-4">
                        <li onClick={() => scrollToSection(glowSkinRef)} className="bg-white/40 text-dark-green text-center text-xs lg:text-lg rounded-3xl p-2 lg:p-3 md:p-2 m-3 backdrop-blur-lg cursor-pointer hover:bg-white/60 transition-all duration-300 shadow-sm border border-green-100/30">
                            Skin Glow
                        </li>
                        <li onClick={() => scrollToSection(weightLossRef)} className="bg-white/40 text-dark-green text-center text-xs lg:text-lg rounded-3xl p-2 lg:p-3 md:p-2 m-3 backdrop-blur-lg cursor-pointer hover:bg-white/60 transition-all duration-300 shadow-sm border border-green-100/30">
                            Weight Loss
                        </li>
                        <li onClick={() => scrollToSection(gutHealthRef)} className="bg-white/40 text-dark-green text-center text-xs lg:text-lg rounded-3xl p-2 lg:p-3 md:p-2 m-3 backdrop-blur-lg cursor-pointer hover:bg-white/60 transition-all duration-300 shadow-sm border border-green-100/30">
                            Gut Health
                        </li>
                        <li onClick={() => scrollToSection(immunityRef)} className="bg-white/40 text-dark-green text-center text-xs lg:text-lg rounded-3xl p-2 lg:p-3 md:p-2 m-3 backdrop-blur-lg cursor-pointer hover:bg-white/60 transition-all duration-300 shadow-sm border border-green-100/30">
                            Immunity
                        </li>
                    </ol>
                </div>

                <div className="w-3/4 h-full flex items-center justify-center mb-4 rounded-3xl overflow-hidden relative">
                    <div className="relative w-full h-96">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-green-800 text-xl lg:text-3xl font-light">
                                {/* Choose a category to explore */}
                            </div>
                        </div>
                        {/* <Image 
              src="/glace-ingredients-main.png"
              alt="Glace Ingredients"
              fill
              className="object-contain"
            /> */}
                    </div>
                </div>
            </div>

            {/* Glow Skin Section */}
            <div ref={glowSkinRef} className="lg:w-7/12 w-11/12 mx-auto mt-24 bg-white/70 shadow-lg rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl lg:text-3xl text-green-800 font-semibold mb-6 text-center">Glow Skin</h2>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex flex-row lg:flex-col justify-center lg:w-1/4 space-y-0 lg:space-y-4 space-x-2 lg:space-x-0">
                        <button
                            onClick={() => handleJuiceSelect('Glow Skin', 'ABC Juice')}
                            className={`px-4 py-2 rounded-3xl text-sm lg:text-base backdrop-blur-lg transition-all duration-300 ${selectedJuice['Glow Skin'] === 'ABC Juice' ? 'bg-green-600 text-white' : 'bg-white/50 text-green-800 hover:bg-white/80'}`}
                        >
                            ABC Juice
                        </button>
                        <button
                            onClick={() => handleJuiceSelect('Glow Skin', 'Coconut Water')}
                            className={`px-4 py-2 rounded-3xl text-sm lg:text-base backdrop-blur-lg transition-all duration-300 ${selectedJuice['Glow Skin'] === 'Coconut Water' ? 'bg-green-600 text-white' : 'bg-white/50 text-green-800 hover:bg-white/80'}`}
                        >
                            Coconut Water
                        </button>
                    </div>

                    <div className="lg:w-3/4 h-64 rounded-3xl bg-gradient-to-br from-green-50 to-[#fbf2e6] shadow-md overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10 mix-blend-overlay"></div>
                        <div className="flex items-center justify-center h-full">
                            <div className="text-green-800 text-lg">
                                {selectedJuice['Glow Skin']} Image
                            </div>
                            {/* <Image
                src={getJuiceImage('Glow Skin', selectedJuice['Glow Skin'])}
                alt={selectedJuice['Glow Skin']}
                fill
                className="object-contain p-4"
              /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Weight Loss Section */}
            <div ref={weightLossRef} className="lg:w-7/12 w-11/12 mx-auto mt-24 bg-white/70 shadow-lg rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl lg:text-3xl text-green-800 font-semibold mb-6 text-center">Weight Loss</h2>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex flex-row lg:flex-col justify-center lg:w-1/4 space-y-0 lg:space-y-4 space-x-2 lg:space-x-0">
                        <button
                            onClick={() => handleJuiceSelect('Weight Loss', 'Ash Gourd')}
                            className={`px-4 py-2 rounded-3xl text-sm lg:text-base backdrop-blur-lg transition-all duration-300 ${selectedJuice['Weight Loss'] === 'Ash Gourd' ? 'bg-green-600 text-white' : 'bg-white/50 text-green-800 hover:bg-white/80'}`}
                        >
                            Ash Gourd
                        </button>
                        <button
                            onClick={() => handleJuiceSelect('Weight Loss', 'Lemon Water')}
                            className={`px-4 py-2 rounded-3xl text-sm lg:text-base backdrop-blur-lg transition-all duration-300 ${selectedJuice['Weight Loss'] === 'Lemon Water' ? 'bg-green-600 text-white' : 'bg-white/50 text-green-800 hover:bg-white/80'}`}
                        >
                            Lemon Water
                        </button>
                    </div>

                    <div className="lg:w-3/4 h-64 rounded-3xl bg-gradient-to-br from-green-50 to-[#fbf2e6] shadow-md overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10 mix-blend-overlay"></div>
                        <div className="flex items-center justify-center h-full">
                            <div className="text-green-800 text-lg">
                                {selectedJuice['Weight Loss']} Image
                            </div>
                            {/* <Image
                src={getJuiceImage('Weight Loss', selectedJuice['Weight Loss'])}
                alt={selectedJuice['Weight Loss']}
                fill
                className="object-contain p-4"
              /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Gut Health Section */}
            <div ref={gutHealthRef} className="lg:w-7/12 w-11/12 mx-auto mt-24 bg-white/70 shadow-lg rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl lg:text-3xl text-green-800 font-semibold mb-6 text-center">Gut Health</h2>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex flex-row lg:flex-col justify-center lg:w-1/4 space-y-0 lg:space-y-4 space-x-2 lg:space-x-0">
                        <button
                            onClick={() => handleJuiceSelect('Gut Health', 'Methi Water')}
                            className={`px-4 py-2 rounded-3xl text-sm lg:text-base backdrop-blur-lg transition-all duration-300 ${selectedJuice['Gut Health'] === 'Methi Water' ? 'bg-green-600 text-white' : 'bg-white/50 text-green-800 hover:bg-white/80'}`}
                        >
                            Methi Water
                        </button>
                        <button
                            onClick={() => handleJuiceSelect('Gut Health', 'Jeera Water')}
                            className={`px-4 py-2 rounded-3xl text-sm lg:text-base backdrop-blur-lg transition-all duration-300 ${selectedJuice['Gut Health'] === 'Jeera Water' ? 'bg-green-600 text-white' : 'bg-white/50 text-green-800 hover:bg-white/80'}`}
                        >
                            Jeera Water
                        </button>
                    </div>

                    <div className="lg:w-3/4 h-64 rounded-3xl bg-gradient-to-br from-green-50 to-[#fbf2e6] shadow-md overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10 mix-blend-overlay"></div>
                        <div className="flex items-center justify-center h-full">
                            <div className="text-green-800 text-lg">
                                {selectedJuice['Gut Health']} Image
                            </div>
                            {/* <Image
                src={getJuiceImage('Gut Health', selectedJuice['Gut Health'])}
                alt={selectedJuice['Gut Health']}
                fill
                className="object-contain p-4"
              /> */}
                        </div>
                    </div>
                </div>
            </div>

            {/* Immunity Section */}
            <div ref={immunityRef} className="lg:w-7/12 w-11/12 mx-auto mt-24 mb-24 bg-white/70 shadow-lg rounded-3xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl lg:text-3xl text-green-800 font-semibold mb-6 text-center">Immunity</h2>

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex flex-row lg:flex-col justify-center lg:w-1/4 space-y-0 lg:space-y-4 space-x-2 lg:space-x-0">
                        <button
                            onClick={() => handleJuiceSelect('Immunity', 'Amala Juice')}
                            className={`px-4 py-2 rounded-3xl text-sm lg:text-base backdrop-blur-lg transition-all duration-300 ${selectedJuice['Immunity'] === 'Amala Juice' ? 'bg-green-600 text-white' : 'bg-white/50 text-green-800 hover:bg-white/80'}`}
                        >
                            Amala Juice
                        </button>
                        <button
                            onClick={() => handleJuiceSelect('Immunity', 'Green Juice')}
                            className={`px-4 py-2 rounded-3xl text-sm lg:text-base backdrop-blur-lg transition-all duration-300 ${selectedJuice['Immunity'] === 'Green Juice' ? 'bg-green-600 text-white' : 'bg-white/50 text-green-800 hover:bg-white/80'}`}
                        >
                            Green Juice
                        </button>
                    </div>

                    <div className="lg:w-3/4 h-64 rounded-3xl bg-gradient-to-br from-green-50 to-[#fbf2e6] shadow-md overflow-hidden relative">
                        <div className="absolute inset-0 bg-[url('/texture.png')] opacity-10 mix-blend-overlay"></div>
                        <div className="flex items-center justify-center h-full">
                            <div className="text-green-800 text-lg">
                                {selectedJuice['Immunity']} Image
                            </div>
                            {/* <Image
                src={getJuiceImage('Immunity', selectedJuice['Immunity'])}
                alt={selectedJuice['Immunity']}
                fill
                className="object-contain p-4"
              /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;