"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaDownload } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LampContainer } from "@/components/ui/lamp";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { Timeline } from "@/components/ui/timeline";

const transition = {
  duration: 0.5,
  ease: "easeInOut",
};

const timelineData = [
  {
    title: "2025",
    content: (
      <ul className="list-disc pl-5 text-neutral-300">
        <li>
          <strong>
            Certified as a <b>Amazon Web Services Certified AI Practitioner</b>{" "}
            by AWS
          </strong>
        </li>
      </ul>
    ),
  },
  {
    title: "2024",
    content: (
      <ul className="list-disc pl-5 text-neutral-300">
        <li>
          <strong>
            Joined <b>Siemens Digital Industries Software as a </b>Global Sales
            Planning Analytics Intern.
          </strong>{" "}
          in June
          <br />
        </li>
        <li>
          {" "}
          Completed the first year of my{" "}
          <b>Masters in Data Science and Artificial Intelligence</b> from
          University of Liverpool with a First Class.
        </li>
        <li>
          {" "}
          Competed in my first British Powerlifting sanctioned{" "}
          <b>PowerLifting</b> competition in March.
        </li>
      </ul>
    ),
  },
  {
    title: "2023",
    content: (
      <ul className="list-disc pl-5 text-neutral-300">
        <li>
          Started my Masters program in{" "}
          <b> MSc. in Data Science and Artificial Intelligence</b> at{" "}
          <strong>University of Liverpool, UK.</strong>{" "}
        </li>
        <li>
          Graduated from{" "}
          <b>
            <strong>Indian Institute of Technology, Madras, India</strong>
          </b>{" "}
          in September with an <b>Online Diploma in Data Science</b> with a GPA
          of 7.75.
        </li>
        <li>
          Graduated from{" "}
          <b>
            <strong>Tezpur University, Tezpur,India</strong>
          </b>{" "}
          in June with an <b>Bachelors in Physics with Hons</b> with a GPA of
          8.06.
        </li>
      </ul>
    ),
  },
  {
    title: "2022",
    content: (
      <ul className="list-disc pl-5 text-neutral-300">
        <li>
          Joined <b>Developer As a Service (DaaS)</b> as a{" "}
          <b>
            <strong>Data Engineering Intern</strong>
          </b>{" "}
          in August.{" "}
        </li>
        <li>
          Published my first research paper titled{" "}
          <b>
            {"Health risk detection through web app using machine learning"}{" "}
          </b>
          in <b>IEEE Xplore</b> in July.
        </li>
        <li>
          Joined <b>Spartificial</b> as a{" "}
          <b>
            <strong>Machine Learning Research Intern</strong>
          </b>{" "}
          in April.
        </li>
      </ul>
    ),
  },
  {
    title: "2021",
    content: (
      <ul className="list-disc pl-5 text-neutral-300">
        <li>
          Joined <b>The Sparks Foundation</b> as a{" "}
          <b>
            <strong>Data Science Intern</strong>
          </b>{" "}
          in September.
        </li>
      </ul>
    ),
  },
];

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
          words="My CV"
          className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
        />

        {/* Animated About Me Section
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-xs md:text-xl font-normal text-center text-neutral-400 max-w-lg mx-auto"
        >
          Data Scientist specializing in Machine Learning & AI-driven solutions,
          skilled in Python, AWS, GCP, and Azure.
        </motion.p> */}

        {/* Animated Heading */}
        <TextGenerateEffect
          words="A look into my journey"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        {/* Animated NotebookLM Section */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-sm md:text-lg font-medium text-center text-neutral-300"
        >
          My journey through a{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-cyan-400 font-bold">
            Podcast
          </span>
        </motion.p>
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 font-bold">
            NotebookLM
          </span>
        </motion.p>

        {/* Timeline Section */}
        <Timeline data={timelineData} />

        {/* Animated NotebookLM Section */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
          className="text-sm md:text-lg font-medium text-center text-neutral-300"
        >
          {" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-red-400 font-bold">
            Scroll to have a look at my Curriculum Vitae
          </span>
        </motion.p>

        {/* CV Viewer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          className="w-full max-w-4xl h-[110vh] border border-gray-600 shadow-lg rounded-lg overflow-hidden"
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
