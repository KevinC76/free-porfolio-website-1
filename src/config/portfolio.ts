import finTechImg from "@/assets/fin-tech.jpg";
import ecommerceImg from "@/assets/e-commerce.webp";
import archiImg from "@/assets/archi.webp";
import smartHomeImg from "@/assets/smart-home.webp";

export const portfolioConfig = {
  name: "John Doe",
  role: "UI/UX Designer",
  bio: "Crafting meaningful digital experiences that merge function with unconventional aesthetics.",
  email: "hello@johndoe.com",
  socials: {
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe",
    dribbble: "https://dribbble.com/johndoe",
  },
  location: "San Francisco, CA",
  resumeUrl: "#",
  experience: [
    {
      role: "Senior UI Designer",
      company: "TechFlow",
      period: "2021 - Present",
      description:
        "Leading the design system initiative and overseeing the UI direction for enterprise SaaS products. Collaborated with engineering teams to implement React-based component libraries.",
    },
    {
      role: "Frontend Developer",
      company: "CreativeWeb",
      period: "2019 - 2021",
      description:
        "Developed responsive websites using modern JavaScript frameworks. Optimized page load times by 40% and implemented accessibility best practices (WCAG 2.1).",
    },
    {
      role: "Junior Designer",
      company: "StartUp Inc",
      period: "2017 - 2019",
      description:
        "Created wireframes, prototypes, and high-fidelity mockups for mobile applications. Assisted in user research sessions and usability testing.",
    },
  ],
  projects: [
    {
      title: "FinTech Dashboard",
      description: "A comprehensive financial analytics platform.",
      image: finTechImg,
      tags: ["React", "Tableau"],
      link: "#",
    },
    {
      title: "E-Commerce App",
      description: "Mobile shopping experience for luxury fashion.",
      image: ecommerceImg,
      tags: ["Figma", "Mobile"],
      link: "#",
    },
    {
      title: "Architect Portfolio",
      description: "Clean showcase website for an architecture firm.",
      image: archiImg,
      tags: ["Webflow", "JS"],
      link: "#",
    },
    {
      title: "Smart Home UI",
      description: "IoT dashboard for home automation devices.",
      image: smartHomeImg,
      tags: ["Next.js", "IoT"],
      link: "#",
    },
  ],
  contact: {
    message:
      "I'm currently available for freelance projects and open to full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.",
  },
};

export type PortfolioConfig = typeof portfolioConfig;
