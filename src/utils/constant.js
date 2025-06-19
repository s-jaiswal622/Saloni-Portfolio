import { FaEnvelope, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
export const personalProjects = [
    {
      id: 1,
      title: "NetflixGPT",
      description: "A smart Netflix clone using TMDB API, Firebase Auth, and OpenAI GPT for recommendations.",
      tech: ["React", "Firebase", "Tailwind", "GPT-4"],
      link: "https://netflixgpt.vercel.app",
      github: "https://github.com/salonijaiswal/netflixgpt",
      image: "/projects/netflixgpt.png",
    },
    {
      id: 2,
      title: "YouTube Clone",
      description: "A responsive YouTube clone built with YouTube API and modern React patterns.",
      tech: ["React", "Context API", "Tailwind", "RapidAPI"],
      link: "https://youtubedev.vercel.app",
      github: "https://github.com/salonijaiswal/youtube-clone",
      image: "/projects/youtube.png",
    },
  ];

 export const contactInfo = [
    {
      Icon: FaEnvelope,
      title: "Email",
      value: "salonijaiswal622@gmail.com",
      href: "mailto:salonijaiswal622@gmail.com",
    },
    {
      Icon: FaLinkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/saloni-jaiswal",
      href: "https://www.linkedin.com/in/saloni-jaiswal-bb8300150/",
    },
    {
      Icon: FaGithub,
      title: "GitHub",
      value: "github.com/saloni-jaiswal",
      href: "https://github.com/s-jaiswal622",
    },
    {
      Icon: FaCode,
      title: "LeetCode",
      value: "leetcode.com/in/saloni-jaiswal",
      href: "https://leetcode.com/u/salonijaiswal622/",
    },
  ];


  export const educationData = [
    {
      company: 'National Institute of Technology',
      position: 'B.Tech Information Technology',
      duration: '2016 - 2020',
      description: 'Graduated from NIT Kurukshetra with strong foundation in Information Technology.'
    },
  ];
  

  export const experienceData = [
    {
      company: "Papaya Global",
      position: "Software Developer",
      duration: "Mar 2024 – May 2025",
      bulletPoints: [
        "Developed a micro‑frontend employee invoice system using React, TypeScript, Redux, and React Query, reducing user touchpoints by 40% and significantly improving the invoicing workflow.",
        "Automated end‑to‑end testing with Playwright, cutting manual QA time from 7 days to just 2 days (–70%) and increasing release speed and reliability.",
        "Designed and integrated a cross‑service RabbitMQ messaging system to streamline onboarding status tracking—boosting efficiency by 50% while enhancing service decoupling and inter‑team communication."
      ]
    },
    {
      company: "LetsTransport",
      position: "UI Engineer",
      duration: "Sep 2020 – Dec 2023",
      bulletPoints: [
        "Spearheaded development of an internal dashboard using React JS and Redux Toolkit to provide real‑time business metrics—reducing decision turnaround time by over 50%.",
        "Optimized field‑operations booking UI using React, Redux, and WebSocket—cut user clicks by 50% and improved live update responsiveness.",
        "Seamlessly migrated the truck driver core app to React Native Paper, TypeScript, and Mobily Stack—ensured zero downtime and implemented consistent themed components.",
        "Architected a streamlined vehicle registration process, increasing vehicle utilization from 45% to 85% and improving fleet management.",
        "Engineered a robust vehicle ownership transfer system—reduced on‑call efforts by 85% and cut processing time from 2 days to under 30 minutes."
      ]
    }
  ];
  

export const projects = [
  {
    title: "Employee Invoice Management System",
    description:
      "Built with React, TypeScript, Redux, and Microfrontend Architecture. Reduced user touchpoints by 40% and automated tests with Playwright.",
    tech: ["React", "TypeScript", "Redux"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800",
  },
  {
    title: "Real-time Business Dashboard",
    description:
      "Developed with React and Redux Toolkit to visualize live metrics. Reduced decision-making time by 50%.",
    tech: ["React", "Redux", "WebSocket"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    title: "Field Operations PWA",
    description:
      "Optimized booking UI and reduced user clicks by 50% using PWA patterns.",
    tech: ["React", "Redux", "WebSocket"],
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800",
  },
  {
    title: "Vehicle Ownership Transfer System",
    description:
      "Reduced transfer time from 2 days to 30 mins with a custom dashboard. Eliminated 85% manual work.",
    tech: ["React", "Redux"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800",
  },
  {
    title: "Eagle Dashboard",
    description:
      "Built a business performance dashboard using React and Redux Toolkit.",
    tech: ["React", "Redux"],
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800",
  },
];