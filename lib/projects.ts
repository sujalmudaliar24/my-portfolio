import type { StaticImageData } from "next/image";
import cookify1 from "@/src/Cookify1.jpeg";
import cookify2 from "@/src/Cookify2.jpeg";
import cookify3 from "@/src/Cookify 3.jpeg";
import drip1 from "@/src/drip1.jpeg";
import drip2 from "@/src/drip2.jpeg";
import drip3 from "@/src/drip3.jpeg";
import drip4 from "@/src/drip4.jpeg";
import calmi1 from "@/src/calmi1.jpeg";
import calmi2 from "@/src/calmi2.jpeg";
import calmi3 from "@/src/calmi3.jpeg";
import calmi4 from "@/src/calmi4.jpeg";
import calmi5 from "@/src/calmi5.jpeg";

export type Project = {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  category: string;
  github: string;
  live: string | null;
  image: string | StaticImageData;
  images?: Array<string | StaticImageData>;
  apkUrl?: string | null;
};


export const PROJECTS: Project[] = [
  {
    title: "Cookify — Recipe Recommendation App",
    slug: "cookify",
    apkUrl: "/apks/Cookify.apk",

    description:
      "A cross-platform React Native application with a Flask backend that recommends recipes using K-Means clustering and Spoonacular API data, featuring AsyncStorage persistence and Firebase auth.",
    tech: ["React Native", "Flask", "K-Means", "Spoonacular API", "AsyncStorage", "Firebase"],
    category: "Mobile App · ML",
    github: "https://github.com",
    live: null,
    image: cookify1,
    images: [cookify1, cookify2, cookify3],
  },
  {
    title: "DripHouse — E-Commerce App",
    slug: "driphouse",
    apkUrl: "/apks/DripHouse.apk",

    description:
      "A modular React Native e-commerce app with Appwrite authentication, session persistence, nested navigation, and Hermes optimization for smooth mobile performance.",
    tech: ["React Native CLI", "Appwrite", "AsyncStorage", "Hermes", "Stack Navigation"],
    category: "Mobile App · E-Commerce",
    github: "https://github.com",
    live: null,
    image: drip1,
    images: [drip1, drip2, drip3, drip4],
  },
  {
    title: "Calmi — Mental Wellness Companion",
    slug: "calmi",
    apkUrl: "/apks/calmi.apk",

    description:
      "A privacy-first mental wellness mobile app that supports mood tracking, empathetic AI journaling, and targeted micro-wellness activities.",
    tech: ["React Native", "TypeScript", "Google Gemini", "AsyncStorage", "React Native Voice", "Notifee"],
    category: "Mobile App · Wellness",
    github: "https://github.com",
    live: null,
    image: calmi4,
    images: [calmi4, calmi1, calmi2, calmi3, calmi5],
  },
];

export const getProjectBySlug = (slug: string) => PROJECTS.find((project) => project.slug === slug);
