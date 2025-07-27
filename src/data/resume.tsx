import { Icons } from "@/components/icons";
import { HomeIcon, Play } from "lucide-react";
import { FaJava, } from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiMongodb
} from "react-icons/si";

export const DATA = {
  name: "Ashutosh Kumar Singh",
  email: "ashu9936.aks@gmail.com",
  initials: "",
  url: "htts://www.ashutosh1.vercel.app",
  location: "",
  locationLink: "",
  description:
    "A developer building cool website and mobile application by using various technologies.",
  summary:
    "I am **Ashutosh Kumar Singh**, a fourth-year **Bachelor of Engineering** student from India, currently studying **Computer Science Engineering**. Although I am primarily a **Website Developer**, specializing in building scalable and robust websites, I also enjoy working on **mobile application development**. Additionally, I have a passion for content writing, and I take pride in creating clean, efficient, and well-structured code that aligns with industry best practices and modern development standards.",
  avatarUrl: "/images4.jpg",
  skills: [
    {
      name: "React.js",
      icon: <SiReact className="size-3" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="size-3" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="size-3" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="size-3" />,
    },
    {
      name: "React Native",
      icon: <SiReact className="size-3" />, // Using React icon for React Native
    },
    {
      name: "Python",
      icon: <SiPython className="size-3" />,
    },
    {
      name: "C++ (CPP)",
      icon: <SiCplusplus className="size-3" />,
    },
    {
      name: "Java",
      icon: <FaJava className="size-3" />,
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="size-3" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="size-3" />,
    },
    {
      name: "Git",
      icon: <SiGit className="size-3" />,
    },
    {
      name: "GitHub",
      icon: <SiGithub className="size-3" />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql className="size-3" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="size-3" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="size-3" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="size-3" />,
    },


  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "ashu9936.ask@gmail.com",
    tel: "+91 9667685415",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ashuutosh1",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ashuutosh1/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/ashutos_h1",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ashu9936.aks@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "MetaCrafter",
      href: "https://metacrafters.io/", // updated to the correct MetaCrafter URL
      badges: [],
      location: "Remote",
      title: "Blockchain Developer Trainee",
      logoUrl: "/work-experience/metacrafter1.jpg", // make sure this logo exists in your project
      start: "June 2023",
      end: "August 2023",
      description: [
        "- Completed an intensive **blockchain development** training program.",
        "- Actively contributed to **smart contract** development and deployment.",
        "- Learned and applied **Solidity** and Ethereum development tools.",
        "- Mentored by senior developers on **code optimization** and **best practices**.",
        "- Gained hands-on experience in writing secure and efficient blockchain applications."
      ],
      links: [
        {
          type: "Website",
          href: "https://metacrafters.io/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

    {
      company: "Cisco Networking Academy",
      href: "https://www.netacad.com/",
      badges: [],
      location: "Remote (Under the guidance of Chandigarh University)",
      title: "Industrial Trainee – Networking & Cybersecurity",
      logoUrl: "/work-experience/cisco1.png", // Ensure this file exists in your assets
      start: "June 2024",
      end: "July 2024",
      description: [
        "- Completed industrial training under the guidance of **Chandigarh University**.",
        "- Learned **network configuration** and **troubleshooting** using Cisco Packet Tracer.",
        "- Configured routers and switches to ensure efficient network connectivity and security.",
        "- Gained hands-on experience in identifying and resolving network issues.",
        "- Explored fundamental concepts in **cybersecurity**, including firewalls, protocols, and threat mitigation strategies."
      ],
      links: [
        {
          type: "Website",
          href: "https://www.netacad.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },

  ],
  education: [
    {
      school: "Chandigarh University",
      href: "https://bennett.edu.in/",
      degree:
        "Bachelor of Engineering - Computer Science and Engineering | 8.33 CGPA",
      logoUrl: "/college1.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Academic Global School",
      href: "https://www.bps.edu.in/",
      degree: "High School - X | Senior Secondary -XII (CBSE)",
      logoUrl: "/school1.jpeg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Bemaxo",
      href: "https://bemaxo.com",
      dates: "Jan 2025 - Present",
      active: true,
      description:
        "A modern social media application focused on enhancing user engagement and connectivity through intuitive design, real-time interaction features, and community-driven content sharing.",
      technologies: ["Next.js", "Typescript", "Firebase", "React Native"],
      links: [
        {
          type: "Live Demo",
          href: "https://bemaxo.com",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source Code",
          href: "https://github.com/bemaxo",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "App Link",
          href: "https://github.com/bemaxo",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/bemaxo.png",
    },
    {
      title: "EcoRide",
      href: "https://github.com/ashuutosh1/ecoride-app",
      dates: "September 2024 - December 2024",
      active: true,
      description:
        "Designed and developed the user interface for EcoRide, a bike-pooling mobile application aimed at promoting sustainable transportation through an intuitive and user-friendly design.",
      technologies: ["React Native", "Typescript", "Google Map API",],
      links: [
        {
          type: "Source",
          href: "https://github.com/ashuutosh1/ecoride-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/ecoride1.jpg",
    },
    {
      title: "Mintifi – NFT Marketplace",
      href: "https://mintifi.vercel.app/",
      dates: "April 2025 - May 2025",
      active: true,
      description:
        "A news sharing platform targeting university students in particular, aiming to reduce spread of misinformation.",
      technologies: ["Java", "XML", "Firebase", "Android Studio"],
      links: [
        {
          type: "Live Demo",
          href: "https://mintifi.vercel.app/",
          icon: <Play className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ashuutosh1/mintifi",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/mintifi.jpg",
    },
    {
      title: "Anonymous File Sharing Platform",
      href: "https://fileshare-ashu.vercel.app/",
      dates: "Dec 2022 - Jan 2023",
      active: true,
      description:
        "An anonymous file-sharing platform allows users to securely share files without revealing their identity. It ensures privacy through end-to-end encryption and does not require user registration or personal information",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Live",
          href: "https://fileshare-ashu.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ashuutosh1/fileshare",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/project1jpg.jpg",
    },
  ],
  positions: [
    {
      title: "Web Development Bootcamp",
      dates: "July 2023 - January 2025",
      location: "Udemy",
      description:
        "Successfully completed a comprehensive Web Development Bootcamp on Udemy, gaining in-depth knowledge of full-stack development and staying current with the latest industry technologies and best practices.",
      image: "/udemy1.png",
      links: [
        {
          title: "Certificate Link",
          href: "https://www.udemy.com/certificate/UC-fdc0abc9-db66-46a5-a478-f3a3f88e26e1/",
        },
      ],
    },
    {
      title: "Meta React Native Specialization",
      dates: "Feburary 2025 - July 2025",
      location: "Meta - Coursera",
      description:
        "Completed Meta's React Native Specialization on Coursera, gaining hands-on experience in mobile app development, component-based architecture, and UI/UX best practices for cross-platform applications.",
      image: "/coursera1.png",
      links: [
        {
          title: "Certificate Link",
          href: "https://www.coursera.org/account/accomplishments/specialization/DURJLS2GEFYD",
        },

      ],
    },
    {
      title: "Deloitte - Technology Job Simulation",
      dates: "June 2025 - July 2025",
      location: "Forage",
      description:
        "Completed a job simulation involving development and coding and wrote a proposal for creating a dashboard.",
      image: "/forage1.png",
      links: [

        {
          title: "Verification Code: SuFftJvDBC3jtgaHh ",
          href: "#",
        },
        { title: "Website", href: "https://www.theforage.com/" },
      ],
    },
    {
      title: "Blockchain Revolution",
      dates: "September 2024",
      location: "Coursera",
      description:
        "Completed the 'Blockchain Revolution' course on Coursera, which explored the foundational concepts of blockchain technology, smart contracts, and decentralized applications. Gained a strong understanding of how blockchain is transforming finance, supply chain, and digital identity systems",
      image: "/coursera1.png",
      links: [
        {
          title: "Certificate Link",
          href: "https://www.coursera.org/account/accomplishments/specialization/0H2K8I2T4N8N",
        },
      ],
    },
  ],

  achievements: [
    {
      title: "Deloitte - Technology Job Simulation",
      dates: "July 2025",
      location: "Forage",
      image: "/achievements/job-sim1.png",
    },
    {
      title: "Blockchain Revolution",
      dates: "September 2024",
      location: "Coursera",
      image: "/achievements/blockchain1.png",
    },
    {
      title: "Udemy Web Development Bootcamp",
      dates: "January 2025",
      location: "Udemy",
      image: "/achievements/certi2.jpg",
    },
    {
      title: "DevOps",
      dates: "March 2025",
      location: "Coursera",
      image: "/achievements/devops1.png",
    },
    {
      title: "Cisco Cybersecurity Essentials",
      dates: "June 2024",
      location: "Cisco Networking Academy",
      image: "/achievements/cisco1.png",
    },

    {
      title: "Entrepreneurship",
      dates: "Ferbury 2025",
      location: "Coursera",
      image: "/achievements/idea-exit.png",
    },
  ],
} as const;
