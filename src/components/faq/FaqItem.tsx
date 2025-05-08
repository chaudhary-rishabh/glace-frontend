'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
    return (
        <div className="border-b border-gray-700/30">
            <button
                onClick={toggleOpen}
                className="flex w-full items-center justify-between py-6 text-left font-medium focus:outline-none"
                aria-expanded={isOpen}
            >
                <h3 className="text-lg text-black">{question}</h3>
                <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                        <Minus className="h-6 w-6 text-black" />
                    ) : (
                        <Plus className="h-6 w-6 text-black" />
                    )}
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-600">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


interface FAQProps {
    items: Array<{
        id: string;
        question: string;
        answer: string;
    }>;
}

export const FAQ: React.FC<FAQProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<string | null>(
        items.length > 0 ? items[0].id : null
    );

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <div className="w-full bg-white px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
                <div className="divide-y divide-gray-900/60">
                    {items.map((item) => (
                        <FAQItem
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === item.id}
                            toggleOpen={() => toggleFAQ(item.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};