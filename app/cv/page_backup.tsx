"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaDownload } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import FlipWords from "@/components/ui/flip-words";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const CVPage = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.warn("Autoplay blocked: ", error);
      });
    }
  }, []);

  return (
    <LampContainer>
      <div className="relative flex flex-col items-center justify-center px-10 pt-32 min-h-screen overflow-hidden space-y-8">
        {/* Animated Page Title */}
        <TextGenerateEffect
          words="My CV & Portfolio"
          className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
        />

        {/* Animated About Me Section */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-xs md:text-xl font-normal text-center text-neutral-400 max-w-lg mx-auto"
        ></motion.p>

        {/* Animated Heading */}
        <TextGenerateEffect
          words="A look into my journey"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />

        {/* Podcast Player */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="w-full max-w-3xl mt-4"
        >
          <audio ref={audioRef} controls autoPlay className="w-full z-10">
            <source src="/PJD_pod.wav" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </motion.div>

        {/* Animated NotebookLM Section */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-sm md:text-lg font-medium text-center text-neutral-300"
        >
          Created using{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-400 font-bold">
            NotebookLM
          </span>
        </motion.p>

        {/* CV Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="w-full max-w-6xl h-[110vh] border border-gray-600 shadow-lg rounded-lg overflow-hidden"
        >
          <iframe
            src="/_Pragyan_Jyoti_Dutta_CV_.pdf"
            className="w-full h-full z-10"
            title="CV Viewer"
          ></iframe>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="mt-8"
        >
          <a href="/_Pragyan_Jyoti_Dutta_CV_.pdf" download>
            <MagicButton
              title="Download CV"
              icon={<FaDownload />}
              position="left"
            />
          </a>
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="mt-6"
        >
          <Link href="/">
            <MagicButton
              title="Back to Home"
              icon={<FaArrowLeft />}
              position="left"
            />
          </Link>
        </motion.div>
      </div>
    </LampContainer>
  );
};

export default CVPage;
