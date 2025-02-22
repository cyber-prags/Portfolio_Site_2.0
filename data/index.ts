export const navItems = [
  { name: "About", link: "#about" },
  { name: "Blogs", link: "#blogs" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Agentic SaaS Company",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

// Need to add a blog section to direct to me blog
export const blogs = [
  // {
  //   id: 1,
  //   title: "Quantum Computing",
  //   description:
  //     "An introduction to Quantum Computing and the various architectures of quantum computers present today.",
  //   link: "https://medium.com/@yourHandle/my-journey-into-data-science",
  //   bgImg: "/grid.svg",
  // },
  // {
  //   id: 2,
  //   title: "Understanding AI Trends",
  //   description:
  //     "An exploration of current trends in artificial intelligence and their implications for the future.",
  //   link: "https://medium.com/@yourHandle/understanding-ai-trends",
  //   bgImg: "/grid.svg",
  // },
  {
    id: 3,
    title: "Get Comfortable with Exploring Unknown Horizons",
    description:
      "Embracing the unknown: a little dread, a lot of growth, and stories you'll laugh about later!",
    link: "https://medium.com/@pragyanjyotidutta/get-comfortable-with-exploring-unknown-horizons-7044365e5c6b",
    bgImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "My Portfolio Page",
    des: "Latest Portfolio Page.",
    img: "/grid.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/cyber-prags/Portfolio_Site_2.0",
  },
  {
    id: 2,
    title: "Fake News Detection using Graph Neural Networks",
    des: "This project explores the use of Graph Neural Networks (GNNs) for fake news detection. By leveraging the graph structure of news articles and their relationships, the model captures relational information for more accurate classification.",
    img: "/grid.svg",
    iconLists: ["/Python.svg", "/NN.svg"],
    link: "https://github.com/cyber-prags/Fake-News-Detection-using-Graph-Neural-NetworksGraph",
  },
  {
    id: 3,
    title: "Multi-Agent Customer Support with LangFlow",
    des: "This project aims at building a multi-agent customer Support Service using Langflow and AstraDB to support customers with their queries.",
    img: "/grid.svg",
    iconLists: ["/Python.svg", "/NN.svg", "/stream.svg"],
    link: "https://github.com/cyber-prags/Multi-Agent-Customer-Support-with-Langflow",
  },

  {
    id: 4,
    title: "Starbucks-Delivery Route Optimisation",
    des: "Optimising Delivery Routes for Stabucks in London using Graphs and making use of Dijkstra's algorithm to solve it",
    img: "/grid.svg",
    iconLists: ["/Python.svg", "/NN.svg"],
    link: "https://github.com/cyber-prags/Starbucks-Delivery-Route-Optimisation",
  },
  {
    id: 5,
    title: "Academic Research Paper Information Retrieval System",
    des: "Academic Research Tool made using LangChain, PaLm-2, FAISS and front-end made using Streamlit",
    img: "/grid.svg",
    iconLists: ["/Python.svg", "/NN.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/cyber-prags/Information-Retrieval-System",
  },
  {
    id: 6,
    title: "Uber Analytics ETL Project",
    des: "A Data Engineering Project built on Google Cloud Platform and Mage Data Tool to analyze data from Uber.",
    img: "/grid.svg",
    iconLists: ["/Python.svg", "/GCP.svg"],
    link: "https://github.com/cyber-prags/Uber-analytics-Data-Engineering-Project",
  },
  {
    id: 7,
    title: "Employee Churn Model Predictor",
    des: "A predictive tool designed towards predicting the churn rate and enabling companies to retain their employees for longer periods using insights of the project.",
    img: "/grid.svg",
    iconLists: ["/Python.svg", "/GCP.svg"],
    link: "https://github.com/cyber-prags/Churn_Model_Predictor",
  },
  {
    id: 8,
    title: "Old Portfolio Page",
    des: "Previous Portfolio Page.",
    img: "/grid.svg",
    iconLists: ["/HTML5.svg", "/CSS.svg", "/JS.svg"],
    link: "https://github.com/cyber-prags/Fake-News-Detection-using-Graph-Neural-NetworksGraph",
  },
  {
    id: 9,
    title: "Grocify",
    des: "Grocify is a your community-focused e-commerce grocery store webapp aimed at serving the community in the best possible way",
    img: "/grid.svg",
    iconLists: [
      "/Python.svg",
      "/HTML5.svg",
      "/CSS.svg",
      "/SQL.svg",
      "/gsap.svg",
    ],
    link: "https://github.com/cyber-prags/Grocery_App_Store",
  },
  {
    id: 10,
    title: "Movie Sentiment Reviews",
    des: "This project aims to predict the sentiment of movie reviews using state of the art machine learning models.",
    img: "/grid.svg",
    iconLists: ["/Python.svg", "/NN.svg", "/TF.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/cyber-prags/Movie_Review_Prediction",
  },
  {
    id: 11,
    title: "Pulsar Star classification",
    des: "Research project aimed at findint the optimal technique to use, Dimentionality reduction and then resampling or vice versa and then apply Machine Learning and Deep Learning models to classify pulsar stars for the HTRU dataset.",
    img: "/grid.svg",
    iconLists: ["/Python.svg", "/NN.svg", "/TF.svg", "/Keras.svg", "/gsap.svg"],
    link: "https://github.com/cyber-prags/Pulsar-Star-Classification-using-Machine-Learning",
  },

  {
    id: 12,
    title: "Netflix Analytics Dashboard",
    des: "A Dashboard made in Tableau showcasing the various Analytical stats of British Airways ranging from most travelled places to best performing service",
    img: "/grid.svg",
    iconLists: ["/Tableau.svg"],
    link: "https://public.tableau.com/app/profile/pragyan.jyoti.dutta/viz/NetflixAnalyticsDashboard_17074203055070/Dashboard1",
  },
  {
    id: 13,
    title: "British Airways Dashboard",
    des: "Customer Segmentation Oriented dashboard for Netflix",
    img: "/grid.svg",
    iconLists: ["/Tableau.svg"],
    link: "https://public.tableau.com/app/profile/pragyan.jyoti.dutta/viz/BritishAirwaysAnalytics/Dashboard1",
  },
  {
    id: 14,
    title: "King County,Washington House Sales Dashboard",
    des: "A Dashboard made in Tableau showcasing the various Analytical stats of King County, Washinton House Sales",
    img: "/grid.svg",
    iconLists: ["Tableau.svg"],
    link: "https://public.tableau.com/app/profile/pragyan.jyoti.dutta/viz/BritishAirwaysAnalytics/Dashboard1",
  },
  {
    id: 15,
    title: "Patients Analytics in PowerBI",
    des: "A Dashboard made in PowerBI showcasing the various Analytical stats of a hospital with key fields being number in-patients and out-patients.",
    img: "/grid.svg",
    iconLists: ["/PBI.svg"],
    link: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=871c010f-5e61-4fb1-83ac-98610a7e9110&scope=https%3A%2F%2Fanalysis.windows.net%2Fpowerbi%2Fapi%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp.powerbi.com%2Fsignin&client-request-id=dd6b52c1-69a0-44c7-9f60-55972c935a51&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.39.0&client_info=1&code_challenge=x7ItDiQAI60bKXY-E54QSUalwfbhIpnW__9ctUEozkw&code_challenge_method=S256&nonce=fd40257d-a99f-4869-bb74-23bfc96a5969&state=eyJpZCI6IjNjZjJjYzkxLWY4M2EtNDE1Yy04MjFjLThhZWFkODRlOGJjMiIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7C1738512803704.9%3B1738512803706.2%3B1738512802590&site_id=500453&nux=1&msafed=0",
  },
];

export const testimonials = [
  {
    quote:
      "During his time at DaaS he was exceptional with deliverables and new ideas. He was very active and open to new solutions. I highly recommend him for any organization. He has good Communication, technical knowledge as well as very good team coordination.I wish him very best for the future endeavours and he is always open to come work with us.",
    name: "Jyotish Prasad Lahe",
    title: "Head of Operations - DaaS",
    img: "JP.png", // Add image path
  },
  {
    quote:
      "During his time with Siemens Digital Industries Software, Pragyan has consistently displayed a high level of professionalism, adaptability, and a collaborative spirit. He excels in communication, both with team members and stakeholders, and is always willing to assist others when needed. His problem-solving skills and positive attitude have made him a valuable member of our team.  Pragyan is punctual, reliable, and demonstrates great responsibility in managing his tasks. He handles challenges with a calm, solution-oriented mindset, making him an asset to any environment that values teamwork and integrity.",
    name: "Angus Marshall",
    title:
      "Director of Global Sales & Customer Success - Siemens Digital Industries Software",
    img: "Angus_Marshall.png", // Add image path
  },
  {
    quote:
      "He demonstrated great skills in his position as a Data and Business Analyst during the internship period at The Sparks Foundation. He has excellent analytical skills and his verbal communication skills are extremely organized. He can work independently, and can effectively multi-task to ensure that all projects are completed promptly. He was always willing to offer his assistance and had an excellent rapport with the many of his fellow interns. I am confident that he will devote his self to a position with your organization with a high degree of diligence. He would be an asset to any employer, and I wholeheartedly recommend him for any endeavor he chooses to pursue.",
    name: "Prishita Das",
    title: "Associate Data Scientist - NeoStats",
    img: "Prish.png",
  },
  {
    quote:
      "As a fellow academic person, I have observed Prag's exceptional attention to detail in work reports, his open-mindedness to new ideas, and his profound curiosity to learn. These qualities make him an outstanding candidate and a valuable asset in any setting.",
    name: "Patalo Selobakin",
    title: "Consultant - Kearney",
    img: "Patalo.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "Siemens",
    img: "/Siemens.svg",
    nameImg: "/Siemens.svg",
  },
  {
    id: 2,
    name: "Compfox",
    img: "/compfox head.png",
    nameImg: "/Compfox-name.png",
  },
  // {
  //   id: 3,
  //   name: "HOSTINGER",
  //   img: "/host.svg",
  //   nameImg: "/hostName.svg",
  // },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Global Sales Planning Analytics Intern - Siemens DISW",
    desc: "Developed dynamic dashboards using Tableau, Power BI, and Salesforce to enhance strategic business planning and KPI monitoring. Contributed to the Global Integrated Country Planning program, improving sales planning effectiveness. Designed advanced analytics visuals, proposed new application features, and created detailed documentation for usability and scalability.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Data engineering intern - DaaS",
    desc: "Processed and analyzed 21,000+ textual image data using OCR, optimizing processing times. Engineered data from unstructured, pixelated legal documents using Regex and advanced methods. Collaborated in a cross-functional team to build a full-stack ecosystem for legal research. Led strategic initiatives that boosted legal document processing efficiency by 80%.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Machine Learning Research Intern - Spartificial",
    desc: "Gained expertise in RNNs, Neural Networks, TensorFlow, OpenCV, and Image Segmentation. Optimized pulsar detection in imbalanced datasets by applying classification algorithms and analyzing the impact of Dimensionality Reduction and Resampling order on model accuracy.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title:
      "Data Science and Business Analytics intern - The Sparks Foundation ",
    desc: "Managed and processed a pipeline of projects requiring EDA",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const educationTimeline = [
  {
    title: "2023 - Present",
    content:
      "MSc Data Science & Artificial Intelligence at University of Liverpool",
  },
  {
    title: "2022 - 2023",
    content:
      "Diploma in Data Science from Indian Institute of Technology Madras",
  },
  {
    title: "2020 - 2023",
    content: "BSc with Hons in Physics from Tezpur University",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/cyber-prags", // Your GitHub link
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/pragsxxx", // Your Twitter link
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/pragyan-jyoti-dutta/", // Your LinkedIn link
  },
  {
    id: 4,
    img: "/Medium.svg",
    link: "https://medium.com/@pragyanjyotidutta", // Your Medium Link
  },
];
