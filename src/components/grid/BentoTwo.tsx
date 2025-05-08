import React from 'react';
import Image from 'next/image';
import { FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const BentoTwo: React.FC = () => {
    return (
        <div className="w-full max-w-7xl mx-auto p-4 my-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-white rounded-3xl overflow-hidden shadow-md">
                    <div className="w-full h-full relative min-h-[320px]">
                        <Image
                            src="/glaceGlow4.png"
                            alt="Chef in kitchen"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>


                <div className="bg-[#3c3630] rounded-3xl p-6 shadow-md flex flex-col justify-center">
                    <div className="w-full h-full relative min-h-[320px]">
                        <Image
                            src="/glacePeace1.png"
                            alt="Chef in kitchen"
                            fill
                            className='rounded-3xl'
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>


                <div className="bg-yellow-400 rounded-3xl p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">New Users</h2>
                    
                </div>


                <div className="bg-red-950 text-white rounded-3xl p-6 shadow-md">
                    <h2 className="text-xl font-semibold mb-4">Typography & Main Colors</h2>
                    <div className="flex items-center mb-4">
                        <div className="text-7xl font-bold mr-4">Aa</div>
                        <div className="text-xs">
                            <p>ABCDEFGHIJKLMNOP</p>
                            <p>QRSTUVWXYZ</p>
                            <p>1234567890#$%!</p>
                        </div>
                    </div>
                    <div className="w-2/3 h-3/5 mx-auto relative min-h-[320px]">
                        <Image
                            src="/glaceAd1.png"
                            alt="Chef in kitchen"
                            fill
                            className='object-cover rounded-3xl'
                        />
                    </div>
                </div>


                <div className="md:col-span-2 bg-[#0d6f0d] rounded-3xl p-6 shadow-md relative">
                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="bg-white rounded-3xl overflow-hidden shadow-lg md:w-1/3">
                            <div className="p-3">
                                <div className="w-full h-full relative min-h-[420px]">
                                    <Image
                                        src="/glacePeace1.png"
                                        alt="Chef in kitchen"
                                        fill
                                        className='rounded-3xl'
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 flex flex-col">
                            <div className="mb-4">
                                <div className="bg-white p-4 rounded-2xl flex items-center">
                                    <div className="w-12 h-12 rounded-lg overflow-hidden relative mr-4">
                                        <Image src="/glaceImmunity1.png" alt="Restaurant" fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-medium">Osteria Francescana</h3>
                                            <div className="flex items-center">
                                                <FaStar className="text-yellow-400 mr-1" size={16} />
                                                <span className="text-sm">4.9</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <FaMapMarkerAlt className="mr-1" size={12} />
                                            <span>Vittorio Emanuele, 133, 80121 Napoli</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-grow w-full h-64 relative rounded-3xl overflow-hidden">
                                <Image
                                    src="/glaceAd3.png"
                                    alt="Food dish"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BentoTwo;