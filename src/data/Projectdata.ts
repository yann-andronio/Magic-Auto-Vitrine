import { IconType } from "react-icons";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiPhp } from "react-icons/si";


export interface Typeprojet {
  id?: number;
  name: string;
  langageIcons: { icon: IconType; color: string }[];
  link: string;
  image: string;

}

export const  Projectdata: Typeprojet[] = [
  {
    id: 1,
    name: "SuperU E-commerce",
    langageIcons: [
      { icon: SiReact, color: "#61DAFB" },
      { icon: FaHtml5, color: "#E34F26" },
      { icon: FaCss3Alt, color: "#1572B6" },
      { icon: SiTailwindcss, color: "#06B6D4" },
    ],
    link: "https://superu-ecommerce.netlify.app",
    image: "1",
  },
  {
    id: 2,
    name: "Universitech",
    langageIcons: [
      { icon: SiReact, color: "#61DAFB" },
      { icon: FaHtml5, color: "#E34F26" },
      { icon: FaCss3Alt, color: "#1572B6" },
      { icon: SiTailwindcss, color: "#06B6D4" },
      { icon: SiPhp, color: "#563D7C" },
    ],
    link: "https://univesitech.com",
    image: "2",
  },

  {
    id: 3,
    name: "Art Logo",
    langageIcons: [
      { icon: FaHtml5, color: "#E34F26" },
      { icon: FaCss3Alt, color: "#1572B6" },
      { icon: SiJavascript, color: "#F7DF1E" },
      { icon: FaBootstrap, color: "#563D7C" },
    ],
    link: "https://art-logo.netlify.app",
    image: "3",
  },

];

