import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
export const projects = [
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
  ];


  export const educationData = [
    {
      company: 'National Institute of Technology',
      position: 'B.Tech Information Technology',
      duration: '2016 - 2020',
      description: 'Graduated from NIT Kurukshetra with strong foundation in computer science and software engineering principles.'
    },
  ];
  

  export const experienceData = [
    {
      company: "Papaya Global",
      position: "Software Developer",
      duration: "Mar 2024 – May 2025",
      description:
        "Built microfrontend-based invoice system. Used React, Redux, Playwright for automation and RabbitMQ for messaging.",
    },
    {
      company: "LetsTransport",
      position: "UI Engineer",
      duration: "Sep 2020 – Dec 2023",
      description:
        "Led dashboard & React Native app migration. Reduced booking clicks and improved real-time visibility.",
    },
    {
      company: 'National Institute of Technology',
      position: 'B.Tech Information Technology',
      duration: '2016 - 2020',
      description: 'Graduated from NIT Kurukshetra with strong foundation in Information Technology.'
    },
  ];
  