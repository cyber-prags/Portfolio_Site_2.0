"use client";

import { useEffect, useState } from "react";
import { FaLocationArrow, FaFile } from "react-icons/fa6"; // ✅ Corrected import
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import FlipWords from "./ui/flip-words";
import { LampContainer } from "./ui/lamp"; // ✅ Import LampContainer

const Hero = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <LampContainer>
      {/* Hero Content */}
      <div className="flex justify-center relative my-10 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/* Animated Heading */}
          <TextGenerateEffect
            words="Transforming Data into Actionable Insights"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          {/* Animated Subtext with FlipWords */}
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I'm Pragyan and I am a{" "}
            {isClient ? (
              <FlipWords
                words={[
                  "Data Scientist.",
                  "Data Engineer.",
                  "AI Practitioner.",
                  "ML Engineer.",
                ]}
                duration={2000} // Flip every 2 seconds
                className="text-purple font-bold"
              />
            ) : (
              <span className="text-purple font-bold">Data Scientist.</span>
            )}
          </p>

          {/* Buttons Container */}
          <div className="flex gap-4 mt-6">
            {/* Show my Work Button */}
            <a href="#about">
              <MagicButton
                title="Show my work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>

            {/* View CV Button */}
            <a
              href="https://your-cv-link.com" // 🔗 Replace with your actual CV link
              target="_blank"
              rel="noopener noreferrer"
            >
              <MagicButton
                title="View My CV"
                icon={<FaFile />} // ✅ Corrected the icon
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </LampContainer>
  );
};

export default Hero;
