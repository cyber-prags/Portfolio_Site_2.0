"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { motion } from "framer-motion";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import Image from "next/image";

interface CarouselProps {
  items: JSX.Element[];
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  link: string;
  iconLists?: string[]; // ✅ Add this line
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    checkScroll();
    const interval = setInterval(() => {
      if (!isHovered) autoScroll();
    }, 3000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
      checkScroll();
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
      checkScroll();
    }
  };

  const autoScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      if (scrollLeft >= scrollWidth - clientWidth) {
        // Reset to start if it reaches the end
        carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
      checkScroll();
    }
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: () => {}, currentIndex: 0 }}
    >
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow */}
        <button
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 dark:bg-black/60 p-3 rounded-full shadow-md transition ${
            canScrollLeft ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <IconArrowNarrowLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>

        {/* Carousel Content */}
        <div
          ref={carouselRef}
          style={{
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
          className="flex w-full py-8 md:py-16 scroll-smooth"
          onScroll={checkScroll}
        >
          <div className="flex flex-row gap-5 px-8">{items}</div>
        </div>

        {/* Right Arrow */}
        <button
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-white/90 dark:bg-black/60 p-3 rounded-full shadow-md transition ${
            canScrollRight ? "opacity-100" : "opacity-50 cursor-not-allowed"
          }`}
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <IconArrowNarrowRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
        </button>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({ card, index }: { card: Card; index: number }) => {
  return (
    <motion.a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:scale-105 transition-transform duration-300"
    >
      <div className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-[50vh] w-[16vw] md:h-[55vh] md:w-[18vw] overflow-hidden flex flex-col items-start justify-start relative">
        {/* "View" Button */}
        <button className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 text-sm font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
          View
        </button>

        {/* Project Image */}
        <Image
          src={card.src}
          alt={card.title}
          fill
          className="object-cover absolute inset-0"
        />

        {/* Text Content */}
        <div className="relative z-40 p-6">
          <p className="text-white text-sm md:text-base font-medium">
            {card.category}
          </p>
          <p className="text-white text-lg md:text-2xl font-semibold mt-2">
            {card.title}
          </p>
        </div>

        {/* Icon List - Bottom Right */}
        {card.iconLists && card.iconLists.length > 0 && (
          <div className="absolute bottom-4 right-4 flex space-x-2">
            {card.iconLists.map((icon, idx) => (
              <div
                key={idx}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center bg-white dark:bg-gray-800 shadow-md"
              >
                <Image src={icon} alt="icon" width={20} height={20} />
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.a>
  );
};
