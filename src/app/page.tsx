'use client';
import LandingPageCard from "@/components/cards/LandingPageCard";
import { FAQ } from "@/components/faq/FaqItem";
import FlowDesign from "@/components/flow/FlowDesign";
import BentoGrid from "@/components/grid/BentoGrid";
import BentoTwo from "@/components/grid/BentoTwo";
import { api } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// Define the type for API response item
interface FAQApiItem {
  _id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export default function Home() {
  // Store the API response directly
  const [faqItems, setFaqItems] = useState<FAQApiItem[]>([]);

  useEffect(() => {
    const fetchFnq = async () => {
      try {
        const response = await api.get("/fnq/getFnq");
        setFaqItems(response.data);
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };

    fetchFnq();
  }, []);

  // Transform the API data to match the expected format for the FAQ component
  const mappedFaqItems = faqItems.map(item => ({
    id: item._id,
    question: item.question,
    answer: item.answer
  }));

  return (
    <>
      <div className="min-h-screen bg-[#fbf2e6] flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
        <div className="w-full md:w-1/2 flex items-center justify-center mb-8 md:mb-0">
          <LandingPageCard />
        </div>

        <div className="w-full md:w-1/2 lg:w-5/12 px-4 md:px-8 lg:px-10 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-green-900">Welcome to Glace</h1>
          <p className="text-base sm:text-lg lg:text-xl mb-6 md:mb-8 text-green-800">
            Discover the best drinks for your health and wellness.
          </p>
          <div className="flex flex-col mb-5 sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Link
              href="/subscribe"
              className="bg-white border-2 border-green-900 text-green-900 px-6 py-2 rounded-lg shadow-md hover:bg-green-50 transition-all duration-300 text-sm sm:text-base"
            >
              Subscribe <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/collection"
              className="bg-green-900 text-white px-6 py-2 rounded-lg shadow-md hover:bg-green-800 transition-all duration-300 text-sm sm:text-base"
            >
              Order Now
            </Link>
          </div>
          <FlowDesign />
        </div>
      </div>

      {/* bentogrid */}
      <BentoGrid />

      {/* second info container */}
      <div className="w-11/12 lg:w-10/12 mx-auto bg-white roundedLg flex flex-col items-center justify-center shadow-lg rounded-3xl p-14 mt-8 mb-8">
        <div className="bg-white h-auto rounded-3xl flex items-center justify-center">
          <div>
            <h1 className="text-3xl text-green-800 w-8/12 p-2 font-semibold text-center mb-4 rounded-2xl">
              Glace is served in glass bottles
            </h1>
            <ol className="text-md mb-8 p-2">
              <li className="p-2"><span className="font-bold">Preserves Nutrients & Quality</span> – Maintains the juice freshness and nutritional value over time.</li>
              <li className="p-2"><span className="font-bold">Better Taste & Freshness</span> – Glass does not alter the taste of juice, keeping it pure and fresh.</li>
              <li className="p-2"><span className="font-bold">No Chemical Leaching</span> – Unlike plastic, glass does not release harmful chemicals into the juice.</li>
              <li className="p-2"><span className="font-bold">Health-Conscious Choice</span> – A trusted material for those who prioritize wellness and purity.</li>
              <li className="p-2"><span className="font-bold">Eco-Friendly & Sustainable</span> – 100% recyclable and reusable, reducing environmental impact.</li>
              <li className="p-2"><span className="font-bold">Premium & Elegant Appeal</span> – Enhances brand image with a high-quality, premium look.</li>
            </ol>
          </div>
          <Image
            src={"/glace jug pouring.png"}
            alt={"glace jug pouring"}
            width={400}
            height={400}
            className="w-3/12 h-3/12 lg:block hidden object-cover shadow-lg roundedLg"
          />
        </div>
      </div>

      <BentoTwo />

      {/* faq - only render if there are items */}
      {mappedFaqItems.length > 0 && <FAQ items={mappedFaqItems} />}
    </>
  );
}