import Image from "next/image";

export default function BentoGrid() {
    return (
        <div className="py-12 sm:py-4">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="mt-6 grid gap-4 sm:mt-6 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-2xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-xl lg:rounded-l-3xl">
                            <div className="px-6 pt-6 pb-3 sm:px-8 sm:pt-8">
                                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Gut Health
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                                    Improve digestion and support a healthy microbiome for overall wellness.
                                </p>
                            </div>
                            <div className="relative w-full h-64 sm:h-80 lg:h-96 grow max-lg:mx-auto max-lg:max-w-sm">
                                <div className="absolute inset-x-8 top-8 bottom-4 overflow-hidden rounded-3xl border-4 border-green-800 shadow-xl">
                                    <Image
                                        src="/glaceGlow5.png"
                                        alt="glace gut health"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-2xl"></div>
                    </div>

                    <div className="relative max-lg:row-start-1">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-2xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-xl max-lg:rounded-t-3xl">
                            <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Energy</p>
                                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                                    Boost your daily energy levels and combat fatigue naturally.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center p-4 max-lg:py-6">
                                <div className="relative w-full h-40 sm:h-48">
                                    <Image
                                        src="/candidGlace1.png"
                                        alt="glace energy"
                                        fill
                                        className="object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-2xl"></div>
                    </div>

                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-xl">
                            <div className="px-6 pt-6 sm:px-8 sm:pt-8">
                                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Skin Glow</p>
                                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                                    Skin starts to glow and brighten naturally with glace.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center p-4 max-lg:py-6">
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/glaceFitness1.png"
                                        alt="glace skin glow"
                                        fill
                                        className="object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                    </div>

                    <div className="relative lg:row-span-2">
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-2xl lg:rounded-r-2xl"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-xl max-lg:rounded-b-3xl lg:rounded-r-3xl">
                            <div className="px-6 pt-6 pb-3 sm:px-8 sm:pt-8">
                                <p className="text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    Immunity
                                </p>
                                <p className="mt-2 max-w-lg text-sm text-gray-600 max-lg:text-center">
                                    Strengthen your immune system for everyday wellness and protection.
                                </p>
                            </div>
                            <div className="relative h-64 sm:h-80 lg:h-96 w-full grow">
                                <div className="absolute top-8 right-0 bottom-0 left-8 overflow-hidden rounded-tl-xl bg-green-900 shadow-xl">
                                    <div className="relative w-full h-full">
                                        <Image
                                            src="/glowGlace3.png"
                                            alt="glace skin glow"
                                            fill
                                            className="object-contain border-4 border-green-800 rounded-tl-xl rounded-br-3xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-2xl lg:rounded-r-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}