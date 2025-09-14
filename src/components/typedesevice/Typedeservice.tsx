import React from "react";
import { motion } from "framer-motion";
import { MdCarRepair, MdLocalCarWash, MdLocalParking } from "react-icons/md";
import {
  FaCarSide,
  FaBroom,
  FaRegCheckCircle,
  FaShieldAlt,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const lavageServices = [
  {
    icon: <FaCarSide className="text-indigo-600 text-xl" />,
    title: "Lavage extérieur",
    description:
      "Un nettoyage complet de la carrosserie pour un rendu éclatant.",
  },
  {
    icon: <FaBroom className="text-green-600 text-xl" />,
    title: "Lavage intérieur",
    description: "Aspiration et nettoyage en profondeur de l’habitacle.",
  },
  {
    icon: <MdLocalCarWash className="text-blue-600 text-xl" />,
    title: "Lavage complet",
    description: "Un soin global intérieur + extérieur pour votre véhicule.",
  },
  {
    icon: <MdCarRepair className="text-red-600 text-xl" />,
    title: "Châssis & graffitage",
    description:
      "Un lavage spécialisé pour protéger et préserver la base du véhicule.",
  },
];

const parkingServices = [
  {
    icon: <FaShieldAlt className="text-yellow-600 text-xl" />,
    title: "Sécurité 24h/24",
    description: "Un parking surveillé pour garantir la tranquillité d’esprit.",
  },
  {
    icon: <FaRegCheckCircle className="text-indigo-600 text-xl" />,
    title: "Accès facile",
    description:
      "Une localisation pratique et un accès rapide à votre véhicule.",
  },
  {
    icon: <MdLocalParking className="text-green-600 text-xl" />,
    title: "Espaces couverts",
    description: "Des zones de stationnement protégées contre les intempéries.",
  },
  {
    icon: <BsStars className="text-pink-600 text-xl" />,
    title: "Réservation en ligne",
    description: "Gérez facilement vos places grâce à notre système digital.",
  },
];

const Typedeservice: React.FC = () => {
  return (
    <section id="Services" className="relative py-20 px-6 mt-6">
      <img
        className="absolute hidden  sm:w-32 sm:bottom-[10%] sm:right-[4%] lg:block   lg:w-80 lg:top-[15%]  lg:left-[3%]"
        src="./image/V1.png"
      />
      {/* Titre global */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 dark:text-white mb-4">
          Ce que nous proposons
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Découvrez nos prestations de lavage professionnel et nos solutions de
          parking sécurisé.
        </p>
      </div>

      {/* Section Lavage */}
      <div className="mb-16 mt-32">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
          Lavage
        </h3>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {lavageServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow bg-white/90 dark:bg-gradient-to-r dark:from-[#0D47A1] dark:to-[#0D47A1]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 p-3 rounded-full shadow-md">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-white/90">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Section Parking */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-8 text-center">
          Parking
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {parkingServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow bg-white/90 dark:bg-gradient-to-r dark:from-[#0D47A1] dark:to-[#0D47A1]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gray-100 p-3 rounded-full shadow-md">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h4>
              </div>
              <p className="text-gray-700 dark:text-white/90">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Typedeservice;
