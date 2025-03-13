"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Icons
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaArrowLeft,
} from "react-icons/fa6";
import {
  SiPython,
  SiCplusplus,
  SiScala,
  SiTensorflow,
  SiPytorch,
  // Uncomment if available:
  // SiXgboost,
  SiNumpy,
  SiPandas,
  SiApachespark,
  SiPostgresql,
  SiMongodb,
  SiTableau,
  SiPowerbi,
  SiPlotly,
  SiAmazonaws,
  SiGooglecloud,
  SiKubernetes,
} from "react-icons/si";

// Components
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FloatingNav } from "@/components/ui/FloatingNavbar2";

/* ---------------------------
   Nav Items for Floating Navbar
--------------------------- */
const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Work", link: "#work" },
  { name: "Education", link: "#education" },
  { name: "Publications", link: "#publications" },
  { name: "Certifications", link: "#certifications" },
  { name: "Interests", link: "#interests" },
];

/* ---------------------------
   Skill Icons Mapping
--------------------------- */
const skillIcons: { [key: string]: JSX.Element } = {
  Python: <SiPython className="inline-block mr-1 text-xl" />,
  "C++": <SiCplusplus className="inline-block mr-1 text-xl" />,
  Scala: <SiScala className="inline-block mr-1 text-xl" />,
  TensorFlow: <SiTensorflow className="inline-block mr-1 text-xl" />,
  PyTorch: <SiPytorch className="inline-block mr-1 text-xl" />,
  // XGBoost: <SiXgboost className="inline-block mr-1 text-xl" />, // Uncomment if available
  NumPy: <SiNumpy className="inline-block mr-1 text-xl" />,
  Pandas: <SiPandas className="inline-block mr-1 text-xl" />,
  "Apache Spark": <SiApachespark className="inline-block mr-1 text-xl" />,
  PostgreSQL: <SiPostgresql className="inline-block mr-1 text-xl" />,
  "NoSQL (MongoDB)": <SiMongodb className="inline-block mr-1 text-xl" />,
  Tableau: <SiTableau className="inline-block mr-1 text-xl" />,
  "Power BI": <SiPowerbi className="inline-block mr-1 text-xl" />,
  Plotly: <SiPlotly className="inline-block mr-1 text-xl" />,
  AWS: <SiAmazonaws className="inline-block mr-1 text-xl" />,
  GCP: <SiGooglecloud className="inline-block mr-1 text-xl" />,
  Kubernetes: <SiKubernetes className="inline-block mr-1 text-xl" />,
};

/* ---------------------------
   Custom Hook: useOutsideClick
--------------------------- */
function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
}

/* ---------------------------
   CloseIcon for Modals
--------------------------- */
function CloseIcon() {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
}

/* ---------------------------
   PublicationsCardDemo
   Modern full-width card with expanded modal (white bg, black text)
--------------------------- */
function PublicationsCardDemo() {
  const publications = [
    {
      title: "Health Risk Detection via ML",
      description: "Published in IEEE Xplore.",
      src: "/publication.png",
      ctaText: "View Paper",
      ctaLink: "https://ieeexplore.ieee.org/document/9823582",
      content: () => (
        <p className="text-base">
          Explores the use of machine learning to predict potential health risks
          through a web application. Covers dataset preprocessing, model
          training, and performance analysis.
        </p>
      ),
    },
    // You can add more publication items here
  ];

  const [active, setActive] = useState<
    (typeof publications)[number] | null | boolean
  >(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(false);
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 shadow-md"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-3xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white text-black border border-gray-300 rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={400}
                  height={400}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-96 object-cover"
                />
              </motion.div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl font-bold text-black"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-base text-gray-800 mt-2"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="mt-4 md:mt-0 px-6 py-3 text-base rounded-full font-bold bg-green-500 text-white shadow-lg"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-gray-800 text-base overflow-auto"
                >
                  {typeof active.content === "function"
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className="w-full space-y-4">
        {publications.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="w-full p-6 border border-gray-300 rounded-2xl cursor-pointer hover:bg-gray-50 transition shadow-md"
          >
            <div className="flex flex-col md:flex-row items-center">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-20 w-20 object-cover rounded-full"
                />
              </motion.div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="text-xl font-semibold text-gray-800"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.title}-${id}`}
                  className="text-gray-600 mt-2"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="mt-4 w-full px-6 py-3 text-base rounded-full font-bold bg-gray-200 hover:bg-green-500 hover:text-white transition shadow"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </>
  );
}

/* ---------------------------
   ExpandableCertifications (Modern, border-only boxes, white modal)
--------------------------- */
function ExpandableCertifications() {
  const certificationsData = [
    {
      title: "AWS Certified AI Practitioner",
      description: "Issued by Amazon Web Services in 2025.",
      src: "/AWS AI Prac.png",
      ctaText: "View Credential",
      ctaLink: "https://aws.amazon.com/certification/",
      content: (
        <div className="text-black">
          <p>
            Demonstrated expertise in foundational AI/ML principles, cloud-based
            AI solutions, and AWS machine learning services. Gained hands-on
            experience in deploying, training, and managing ML models using AWS
            SageMaker.
          </p>
        </div>
      ),
    },
    {
      title: "Generative AI using Large Language Models",
      description: "Issued by AWS & DeepLearning.AI in 2023.",
      src: "/AI_LLM.png",
      ctaText: "View Credential",
      ctaLink:
        "https://www.coursera.org/account/accomplishments/certificate/NHFSQREJP6DC",
      content: (
        <div className="text-black">
          <p>
            Developed a deep understanding of transformer-based models, prompt
            engineering, and fine-tuning LLMs. Explored real-world applications
            of generative AI and built end-to-end AI solutions using AWS
            services.
          </p>
        </div>
      ),
    },
    {
      title: "Matillion Data Productivity Cloud, Foundations",
      description: "Issued by Matillion Academy in 2023.",
      src: "/Matillion DPC.png",
      ctaText: "View Credential",
      ctaLink: "https://academy.matillion.com/certificate/CmmIUu5REg",
      content: (
        <div className="text-black">
          <p>
            Mastered cloud-based ETL and data transformation pipelines using
            Matillion. Learned how to optimize workflows, automate data
            ingestion, and enhance cloud data productivity.
          </p>
        </div>
      ),
    },
    {
      title: "HackerRank SQL (Basic) Certification",
      description: "Issued by HackerRank in 2023.",
      src: "/SQL_Basic.png",
      ctaText: "View Credential",
      ctaLink: "https://www.hackerrank.com/certificates/216aed415b50",
      content: (
        <div className="text-black">
          <p>
            Validated SQL skills in writing basic queries, filtering and sorting
            data, joins, and aggregate functions. Demonstrated proficiency in
            handling structured data for analysis.
          </p>
        </div>
      ),
    },
    {
      title: "HackerRank SQL (Intermediate) Certification",
      description: "Issued by HackerRank in 2023.",
      src: "/SQL Intermediate.png",
      ctaText: "View Credential",
      ctaLink: "https://www.hackerrank.com/certificates/e9ea2d792539",
      content: (
        <div className="text-black">
          <p>
            Showcased expertise in complex SQL queries, advanced joins, window
            functions, CTEs, and optimizing query performance for large
            datasets.
          </p>
        </div>
      ),
    },
    {
      title: "Deep Learning with PyTorch: Object Localization",
      description: "Issued by Coursera in 2023.",
      src: "/Coursera_Pytorch.png",
      ctaText: "View Credential",
      ctaLink:
        "https://www.coursera.org/account/accomplishments/certificate/XFZCKJYPEJ49",
      content: (
        <div className="text-black">
          <p>
            Gained hands-on experience in building object detection models using
            PyTorch. Explored techniques like bounding box regression, CNNs, and
            transfer learning for localization tasks.
          </p>
        </div>
      ),
    },
    {
      title: "Python for Data Science, AI & Development",
      description: "Issued by Coursera in 2021.",
      src: "/IBM_Python_DS.png",
      ctaText: "View Credential",
      ctaLink:
        "https://www.coursera.org/account/accomplishments/verify/7NUVCG2BZXJ9?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      content: (
        <div className="text-black">
          <p>
            Developed proficiency in Python programming for data science and AI
            applications. Covered topics including data wrangling,
            visualization, NumPy, Pandas, and Scikit-learn for machine learning.
          </p>
        </div>
      ),
    },
    {
      title: "Mathematics for Machine Learning: Multivariate Calculus",
      description: "Issued by Coursera in 2021.",
      src: "/imperial_multivariate.png",
      ctaText: "View Credential",
      ctaLink:
        "https://www.coursera.org/account/accomplishments/certificate/DU2WRS586NEM",
      content: (
        <div className="text-black">
          <p>
            Studied the mathematical foundations of machine learning, focusing
            on partial derivatives, gradients, vector calculus, and optimization
            techniques essential for neural networks and deep learning.
          </p>
        </div>
      ),
    },
    {
      title: "Tools for Data Science",
      description: "Issued by Coursera in 2020.",
      src: "/tools.png",
      ctaText: "View Credential",
      ctaLink:
        "https://www.coursera.org/account/accomplishments/verify/PX3H7LNZG3KT?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course",
      content: (
        <div className="text-black">
          <p>
            Explored various tools used in the data science ecosystem, including
            Jupyter Notebook, RStudio, Git, SQL databases, and cloud platforms
            for data analysis and model deployment.
          </p>
        </div>
      ),
    },
  ];

  const certCards = certificationsData.map((cert) => ({
    title: cert.title,
    description: cert.description,
    src: cert.src,
    ctaText: cert.ctaText,
    ctaLink: cert.ctaLink,
    content: cert.content,
  }));

  const [active, setActive] = useState<null | (typeof certCards)[number]>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
    }
    if (active) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative">
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 backdrop-blur-md h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-4 right-4 lg:hidden items-center justify-center bg-white rounded-full h-8 w-8 shadow-md"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white text-black border border-gray-300 rounded-2xl overflow-hidden shadow-2xl"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={500}
                  height={300}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-56 object-contain p-4"
                />
              </motion.div>
              <div className="p-6">
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-2xl font-bold text-black"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-base text-gray-800 mt-2"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="mt-4 md:mt-0 px-6 py-3 text-base rounded-full font-bold bg-green-500 text-white shadow-lg"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-gray-800 text-base overflow-auto"
                >
                  {active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <ul className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {certCards.map((card) => (
          <motion.li
            key={card.title}
            layoutId={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-6 flex flex-col items-center justify-center border border-gray-300 cursor-pointer rounded-lg hover:bg-gray-50 transition shadow-sm"
          >
            <motion.div layoutId={`image-${card.title}-${id}`} className="mb-3">
              <Image
                src={card.src}
                alt={card.title}
                width={150}
                height={150}
                className="object-contain"
              />
            </motion.div>
            <motion.h3
              layoutId={`title-${card.title}-${id}`}
              className="mt-2 font-medium text-center text-gray-800 text-sm"
            >
              {card.title}
            </motion.h3>
            <motion.p
              layoutId={`description-${card.title}-${id}`}
              className="text-gray-600 text-xs text-center"
            >
              {card.description}
            </motion.p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------------------
   Main Resume Layout with Floating Nav and Floating Back Button
--------------------------- */
export default function CVPage() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.warn("Autoplay blocked:", error);
      });
    }
  }, []);

  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden min-h-screen">
      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />

      {/* Floating Back Button */}
      <motion.div className="fixed top-4 left-4 z-[6000]">
        <Link href="/">
          <div className="relative group">
            <FaArrowLeft className="text-white text-3xl" />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all bg-black text-white text-xs rounded px-2 py-1">
              Return to Home
            </span>
          </div>
        </Link>
      </motion.div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row pt-20">
        {/* Sidebar */}
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="md:w-1/3 bg-[url('/grid.svg')] bg-repeat bg-[length:150px_150px] bg-center text-white p-8 flex flex-col items-center text-center shadow-lg"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ filter: "blur(15px)", opacity: 0 }}
            animate={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative w-80 h-80 mb-4 rounded-full overflow-hidden shadow-2xl ring-4 ring-purple-400 ring-offset-4 ring-offset-gray-900"
          >
            <Image
              src="/Profile.jpeg"
              alt="Profile Picture"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Name */}
          <TextGenerateEffect
            words="Pragyan Jyoti Dutta"
            className="text-4xl font-bold text-purple-200"
          />

          <p className="mt-2 text-lg text-purple-100">
            MSc. Data Science & AI | Siemens Intern | Data Engineer
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mt-4">
            <Link href="https://pragyan-dutta.netlify.app/" target="_blank">
              <FaGlobe className="text-blue-400 hover:text-blue-500 text-2xl transition-transform duration-300 hover:scale-125" />
            </Link>
            <Link href="https://github.com/cyber-prags" target="_blank">
              <FaGithub className="text-gray-300 hover:text-white text-2xl transition-transform duration-300 hover:scale-125" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/pragyan-jyoti-dutta/"
              target="_blank"
            >
              <FaLinkedin className="text-blue-400 hover:text-blue-600 text-2xl transition-transform duration-300 hover:scale-125" />
            </Link>
          </div>

          {/* Podcast Box Container */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="mt-8 w-full max-w-md bg-gray-900 rounded-xl p-6 shadow-xl ring-4 ring-blue-500"
          >
            <p className="text-lg font-semibold text-center text-white">
              My resume through a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-cyan-500 font-extrabold">
                Podcast
              </span>
            </p>
            <div className="mt-6">
              <audio ref={audioRef} controls autoPlay className="w-full">
                <source src="/PJD_pod.wav" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <p className="mt-6 text-lg font-semibold text-center text-white">
              Created using{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-500 font-extrabold">
                NotebookLM
              </span>
            </p>
          </motion.div>

          {/* Download CV Button */}
          <div className="mt-6">
            <Link href="/_Pragyan_Jyoti_Dutta_CV_.pdf" download>
              <div className="group relative flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 transition duration-300 cursor-pointer shadow-lg hover:scale-105">
                <FaDownload className="mr-2 text-white group-hover:text-gray-100" />
                <span className="text-white font-semibold group-hover:text-gray-100">
                  Download CV
                </span>
                {/* Glowing border overlay */}
                <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-purple-300 pointer-events-none"></div>
              </div>
            </Link>
          </div>
        </motion.aside>

        {/* Main Content */}
        <main className="md:w-2/3 bg-gray-100 text-gray-900 p-8 space-y-10">
          {/* About Me */}
          <section
            id="about"
            className="p-8 bg-white rounded-2xl shadow-lg text-justify"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-4">
              About Me
            </h2>
            <p className="text-lg leading-relaxed">
              If Sherlock Holmes had a laptop, a caffeine addiction, and an
              unhealthy obsession with data, he&apos;d probably be me. By day,
              I&apos;m a Data Scientist wrangling numbers, training rogue AI
              models, and whispering sweet nothings to SQL databases. By night,
              I&apos;m either debugging code, debating whether R is superior to
              Python (it&apos;s not, fight me), or convincing myself that this
              will be the week I finally master Kubernetes. With experience
              spanning data science, machine learning, and data engineering,
              I&apos;ve built AI systems that optimize sales, predict churn,
              and—if given enough coffee—might just take over the world
              (ethically, of course). When I&apos;m not making dashboards look
              pretty in Tableau or telling a neural network to do better,
              you&apos;ll probably find me listening to music, watching
              football, or writing about why data science is basically
              modern-day wizardry.
            </p>
          </section>

          {/* Technical Skills */}
          <section
            id="skills"
            className="p-8 bg-white rounded-2xl shadow-lg text-justify"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-6">
              Technical Skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {[
                "Python",
                "R",
                "C++",
                "Java",
                "Scala",
                "TensorFlow",
                "PyTorch",
                "XGBoost",
                "NumPy",
                "Pandas",
                "SciPy",
                "Apache Spark",
                "SQL",
                "PostgreSQL",
                "NoSQL (MongoDB)",
                "Tableau",
                "Power BI",
                "Plotly",
                "AWS",
                "GCP",
                "Kubernetes",
                "MLflow",
              ].map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-purple-100 transition duration-300 text-base flex items-center"
                >
                  {skillIcons[skill] && <span>{skillIcons[skill]}</span>}
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section
            id="work"
            className="p-6 bg-white rounded shadow-lg text-justify"
          >
            <h2 className="text-3xl font-semibold text-purple-400 mb-4">
              Work Experience
            </h2>
            <div className="space-y-6">
              {/* Global Sales Planning Analytics Intern */}
              <div className="p-4 bg-gray-50 rounded shadow border">
                <h3 className="font-bold text-xl">
                  Global Sales Planning Analytics Intern
                </h3>
                <p className="mt-1 text-sm">Jun 2024 - Jul 2025</p>
                <p className="mt-1 text-sm">
                  <b>Siemens Digital Industries Software</b> - London, UK
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>
                    Spearheaded the design, development & deployment of critical
                    Tableau dashboards, including:
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>
                        <b>Consensus Dashboard:</b> Monitored product demo
                        performances across various industries and portfolios.
                      </li>
                      <li>
                        <b>ICP Country Performance Dashboard:</b> Provided
                        insights into planned sales vs actual performance for
                        enhanced sales planning.
                      </li>
                      <li>
                        <b>Account Development Team Dashboard:</b> Monitored
                        pipeline progress and conversion rates, facilitating
                        data-driven decision-making.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Led the end-to-end project lifecycle, collaborating with
                    Directors, VPs, and Portfolio Developers to gather
                    requirements and drive data-driven decision-making.
                  </li>
                  <li>
                    Designed and deployed optimized ETL pipelines integrating
                    data from Salesforce, Qlik, and SharePoint, ensuring
                    seamless production deployment and global accessibility.
                  </li>
                  <li>
                    Facilitated the Global Integrated Country Planning (ICP)
                    program, enhancing sales planning through strategic data
                    insights.
                  </li>
                  <li>
                    Designed a Time Series Outlier Detection and Forecasting
                    Model using SARIMA & Bi-LSTM to identify anomalies and
                    improve sales projections.
                  </li>
                </ul>
              </div>
              {/* Data Engineering Intern */}
              <div className="p-4 bg-gray-50 rounded shadow border">
                <h3 className="font-bold text-xl">Data Engineering Intern</h3>
                <p className="mt-1 text-sm">Aug 2022 - Feb 2023</p>
                <p className="mt-1 text-sm">
                  <b>Developer As a Service (DaaS)</b> - Atlanta, US (remote)
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>
                    Architected an end-to-end ETL pipeline for processing over
                    21,000 textual image datasets using OCR and NLP techniques,
                    reducing processing time by 80%.
                  </li>
                  <li>
                    Optimized SQL queries and indexing strategies in MongoDB,
                    improving database read/write efficiency by 45%.
                  </li>
                  <li>
                    Built an AI-powered case builder that helped California
                    lawyers draft legal cases efficiently by integrating NLP
                    models and automation workflows.
                  </li>
                </ul>
              </div>
              {/* Machine Learning Research Intern */}
              <div className="p-4 bg-gray-50 rounded shadow border">
                <h3 className="font-bold text-xl">
                  Machine Learning Research Intern
                </h3>
                <p className="mt-1 text-sm">Apr 2022 - Sept 2022</p>
                <p className="mt-1 text-sm">
                  <b>Spartificial</b> - Dehradun, India
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>
                    Worked on a high-noise Pulsar Star dataset to optimize
                    Pulsar Star Detection in imbalanced datasets by applying
                    classification algorithms, achieving a model accuracy of
                    93.5%.
                  </li>
                  <li>
                    Analyzed the impact of dimensionality reduction and
                    resampling application order on model accuracy.
                  </li>
                </ul>
              </div>
              {/* Data Science Intern */}
              <div className="p-4 bg-gray-50 rounded shadow border">
                <h3 className="font-bold text-xl">Data Science Intern</h3>
                <p className="mt-1 text-sm">Sept 2021 - Oct 2021</p>
                <p className="mt-1 text-sm">
                  <b>The Sparks Foundation</b> - India
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>
                    Conducted in-depth exploratory data analysis on diverse
                    datasets, uncovering key insights to drive data-driven
                    decision-making.
                  </li>
                  <li>
                    Mastered supervised and unsupervised learning techniques to
                    solve complex problems and enhance analytical capabilities.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section
            id="education"
            className="p-8 bg-white rounded-2xl shadow-lg text-justify"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-8">
              Education
            </h2>
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 rounded-2xl shadow border hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800">
                  University of Liverpool, UK
                </h3>
                <p className="mt-1 text-base text-gray-700">
                  MSc. Data Science &amp; AI (2023-2025)
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-base text-gray-700">
                  <li>
                    <strong className="text-purple-600">
                      Relevant Coursework:
                    </strong>{" "}
                    Machine Learning &amp; BioInspired Optimisation, Applied
                    Artificial Intelligence, Databases and Information Systems,
                    Computational Intelligence, Data Mining &amp; Visualisation,
                    Programming Fundamentals, Research Methods in Computer
                    Science, Mathematics &amp; Statistics for Data Science &amp;
                    AI.
                  </li>
                  <li>
                    <strong className="text-purple-600">Research Focus:</strong>{" "}
                    Developing AI-driven predictive models for Sales Planning.
                  </li>
                  <li>
                    <strong className="text-purple-600">Awards:</strong>{" "}
                    Commonwealth Postgraduate Bursary, PGT
                    Vice-Chancellor&apos;s International Attainment Scholarship
                    for Academic Excellence.
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl shadow border hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800">
                  Indian Institute of Technology, Madras
                </h3>
                <p className="mt-1 text-base text-gray-700">
                  Online Diploma in Data Science (2022-2023)
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-base text-gray-700">
                  <li>
                    <strong className="text-purple-600">Key Subjects:</strong>{" "}
                    Business Analytics, Business Data Management, Computational
                    Thinking, Database Management Systems, Machine Learning
                    Foundations, Machine Learning Techniques, Machine Learning
                    Practice, Mathematics for Data Science - I &amp; II,
                    Statistics for Data Science - I &amp; II, Programming in
                    Python, Tools in Data Science, Modern Application
                    Development I &amp; II, Data Structures and Algorithms in
                    Python, System Commands.
                  </li>
                  <li>
                    <strong className="text-purple-600">
                      Capstone Project:
                    </strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>
                        Designed and built an end-to-end data pipeline for
                        Sentiment Analysis on Movie Reviews.
                      </li>
                      <li>
                        Developed "Grocify," an online grocery shopping
                        application.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong className="text-purple-600">Achievement:</strong>{" "}
                    Completed with distinction.
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gray-50 rounded-2xl shadow border hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-800">
                  Tezpur University, India
                </h3>
                <p className="mt-1 text-base text-gray-700">
                  BSc. in Physics (2020-2023)
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-base text-gray-700">
                  <li>
                    <strong className="text-purple-600">Core Modules:</strong>{" "}
                    Quantum Mechanics, Electromagnetism, Thermodynamics,
                    Statistical Physics, Classical Mechanics, Electronics, Fuzzy
                    Logic and Neural Networks, General Biology, General
                    Chemistry, General Mathematics, Introduction to Scientific
                    Computing, Mathematical Physics, Modern Physics.
                  </li>
                  <li>
                    <strong className="text-purple-600">
                      Research Project:
                    </strong>{" "}
                    Investigated the dust properties of the Coalsack region and
                    ran simulations to calculate the dust temperature and
                    infrared intensity due to contributions from the three
                    brightest stars (Alpha Cru, Beta Cru, and Beta Cen).
                    Compared the model’s results with real-world observations.
                  </li>
                  <li>
                    <strong className="text-purple-600">Honors:</strong>{" "}
                    Graduated with Honors (GPA: 8.06/10).
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Publications */}
          <section
            id="publications"
            className="p-8 bg-white rounded-2xl shadow-lg text-justify"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-6">
              Publications
            </h2>
            <PublicationsCardDemo />
          </section>

          {/* Certifications */}
          <section
            id="certifications"
            className="p-8 bg-white rounded-2xl shadow-lg text-justify"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-6">
              Certifications
            </h2>
            <ExpandableCertifications />
          </section>
          {/* Interests */}
          <section
            id="interests"
            className="p-8 bg-white rounded-2xl shadow-lg text-justify"
          >
            <h2 className="text-4xl font-bold text-purple-600 mb-8">
              Interests
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                {
                  caption: "Traveling",
                  src: "/Paris.jpg",
                  type: "image",
                },
                {
                  caption: "Powerlifting",
                  src: "/PW.JPEG",
                  type: "image",
                },
                {
                  caption: "Music",
                  src: "/Music.jpeg",
                  type: "image",
                },
                {
                  caption: "Football",
                  src: "/Anfield.JPEG",
                  type: "image",
                },
              ].map((interest, index) => (
                <div key={index} className="flex flex-col items-center">
                  {interest.type === "image" ? (
                    <div className="w-60 h-80 rounded-lg overflow-hidden shadow-md">
                      <Image
                        src={interest.src}
                        alt={interest.caption}
                        width={160}
                        height={160}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : interest.type === "video" ? (
                    <video
                      className="w-40 h-40 rounded-lg overflow-hidden shadow-md"
                      controls
                    >
                      <source src={interest.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : null}
                  <p className="mt-2 text-lg font-medium text-gray-800">
                    {interest.caption}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </main>
  );
}
