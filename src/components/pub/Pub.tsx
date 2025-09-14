import React from "react";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import {
  FaCar,
  FaSoap,
  FaParking,
  FaSmile,
  FaShieldAlt,
  FaClock,
  FaHandsHelping,
} from "react-icons/fa";

const Pub: React.FC = () => {
  const { t } = useTranslation();

  const items = [
    {
      label: "Lavage auto",
      icon: <FaCar className="mr-2 text-blue-500 dark:text-blue-300" />,
    },
    {
      label: "Produits premium",
      icon: <FaSoap className="mr-2 text-teal-500 dark:text-teal-300" />,
    },
    {
      label: "Parking sécurisé",
      icon: <FaParking className="mr-2 text-indigo-500 dark:text-indigo-300" />,
    },
    {
      label: "Satisfaction client",
      icon: <FaSmile className="mr-2 text-green-500 dark:text-green-300" />,
    },
    {
      label: "Sécurité",
      icon: <FaShieldAlt className="mr-2 text-red-500 dark:text-red-300" />,
    },
    {
      label: "Rapidité",
      icon: <FaClock className="mr-2 text-cyan-500 dark:text-cyan-300" />,
    },
    {
      label: "Service client",
      icon: (
        <FaHandsHelping className="mr-2 text-purple-500 dark:text-purple-300" />
      ),
    },
  ];

  return (
    <div
      className="w-full mt-9 overflow-hidden shadow-xl py-4 z-50 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300
     dark:from-[#0D47A1] dark:via-[#0D47A1] dark:to-[#0D47A1]"
    >
      <Marquee gradient={false} speed={80} pauseOnHover={true}>
        {items.map((item, index) => (
          <a
            key={index}
            href={`#${item.label}`}
            className="flex items-center mx-6 whitespace-nowrap text-base font-semibold text-gray-900 dark:text-white px-4 py-2 rounded-lg 
              hover:bg-white/30 dark:hover:bg-black/20 transition-colors duration-300"
          >
            {item.icon}
            {t(item.label)}
          </a>
        ))}
      </Marquee>
    </div>
  );
};

export default Pub;
