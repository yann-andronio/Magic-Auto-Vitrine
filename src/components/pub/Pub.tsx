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
      icon: <FaCar className="mr-2 text-blue-600 dark:text-blue-300" />,
    },
    {
      label: "Produits premium",
      icon: <FaSoap className="mr-2 text-yellow-600 dark:text-yellow-400" />,
    },
    {
      label: "Parking sécurisé",
      icon: <FaParking className="mr-2 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      label: "Satisfaction client",
      icon: <FaSmile className="mr-2 text-green-600 dark:text-green-400" />,
    },
    {
      label: "Sécurité",
      icon: <FaShieldAlt className="mr-2 text-red-600 dark:text-red-400" />,
    },
    {
      label: "Rapidité",
      icon: <FaClock className="mr-2 text-cyan-600 dark:text-cyan-400" />,
    },
    {
      label: "Service client",
      icon: (
        <FaHandsHelping className="mr-2 text-purple-600 dark:text-purple-400" />
      ),
    },
  ];

  return (
    <div className="w-full overflow-hidden shadow-xl py-4 z-50 bg-gradient-to-b from-[#FFEE58] via-[#FFEB3B] to-[#FBC02D]  dark:bg-gradient-to-b dark:from-[#0D47A1] dark:via-[#0D47A1] dark:to-[#0D47A1]">
      <Marquee gradient={false} speed={80} pauseOnHover={true}>
        {items.map((item, index) => (
          <a
            key={index}
            href={`#${item.label}`}
            className="flex items-center mx-6 whitespace-nowrap text-base font-semibold  text-gray-900 dark:text-white px-4 py-2 rounded-lg hover:bg-white/20 dark:hover:bg-black/20 transition-colors duration-300"
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
