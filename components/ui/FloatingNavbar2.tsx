"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  // Show/hide nav based on scroll direction
  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        // Near top => remain visible
        setVisible(true);
      } else {
        // Scrolling up => visible, down => hidden
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed top-0 left-0 w-full z-[5000] flex items-center justify-center py-4 px-6",
            "bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900",
            "border-b border-gray-700 shadow-lg text-white space-x-6",
            className
          )}
        >
          {navItems.map((navItem, idx) => (
            <Link
              key={idx}
              href={navItem.link}
              className="hover:text-purple-200 transition"
            >
              {navItem.name}
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
