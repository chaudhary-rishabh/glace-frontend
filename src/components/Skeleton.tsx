import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            
            <div className="w-full mb-8">
                
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        
                        <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div className="h-6 w-32 bg-gray-200 rounded-md ml-3 animate-pulse"></div>
                    </div>

                    
                    <div className="hidden md:flex space-x-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                    </div>

                    
                    <div className="md:hidden w-8 h-8 bg-gray-200 rounded animate-pulse"></div>
                </div>

                
                <div className="w-full">
                    <div className="h-96 w-3/4 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
                    <div className="h-6 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-6 w-5/6 bg-gray-200 rounded mb-6 animate-pulse"></div>

                    
                    <div className="h-10 w-36 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((card) => (
                    <div key={card} className="flex flex-col border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                        
                        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>

                        
                        <div className="p-4">
                            <div className="h-6 w-3/4 bg-gray-200 rounded mb-3 animate-pulse"></div>
                            <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                            <div className="h-4 w-full bg-gray-200 rounded mb-2 animate-pulse"></div>
                            <div className="h-4 w-2/3 bg-gray-200 rounded mb-4 animate-pulse"></div>

                            
                            <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>

            
            <div className="mt-12 pt-8 border-t border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[1, 2, 3, 4].map((section) => (
                        <div key={section} className="flex flex-col space-y-3">
                            <div className="h-5 w-24 bg-gray-200 rounded mb-2 animate-pulse"></div>
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
                    <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-4 md:mb-0"></div>
                    <div className="flex space-x-3">
                        {[1, 2, 3, 4].map((icon) => (
                            <div key={icon} className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkeletonLoader;