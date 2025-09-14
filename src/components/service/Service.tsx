import React from "react";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { MdWaterDrop, MdLocalParking } from "react-icons/md";

const services = [
  {
    icon: (
      <MdWaterDrop className="text-indigo-600 dark:text-indigo-400 w-8 h-8" />
    ),
    title: "Lavage",
    description:
      "Extérieur, intérieur, châssis et traitement anti-graffitis : redonnez de l’éclat à votre véhicule.",
    image: "lavage",
  },
  {
    icon: (
      <MdLocalParking className="text-pink-500 dark:text-[#f8c53b] w-8 h-8" />
    ),
    title: "Parking",
    description:
      "Un parking sécurisé, pratique et surveillé pour votre tranquillité à chaque visite.",
    image: "parking",
  },
];

const Service: React.FC = () => {
  return (
    <section id="Services" className="relative py-20 px-6 mt-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Nos Services
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Découvrez nos services de lavage complet et de parking sécurisé,
          pensés pour votre confort.
        </p>
      </div>

      <motion.div
        className="absolute hidden md:block md:top-[5%] md:left-[30%] lg:block lg:top-[7.5%] lg:left-[38%]"
        animate={{ rotate: [0, 360], scale: [0.8, 1.3, 0.8] }}
        transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
      >
        <BsStars size={40} className="text-black dark:text-white" />
      </motion.div>

      <div className="max-w-6xl items-center justify-center mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 z-10 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-[#f5f5f5] dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default ${
              service.title === "Lavage"
                ? "dark:bg-gradient-to-r from-[#739ae9] to-[#a6bff1]"
                : "dark:bg-gradient-to-r from-[#f8c53b] to-[#fbda82]"
            }`}
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="600"
          >
            <div className="flex justify-between">
              <div className="icontitle flex flex-col items-start justify-start">
                <div className="mb-4 rounded-full bg-white flex items-center justify-center w-12 h-12 p-3 dark:bg-white dark:rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {service.title}
                </h3>
              </div>
              <div className="image">
                <img src={`image/${service.image}.png`} alt={service.title} />
              </div>
              <p className="text-gray-600 bottom-5 absolute dark:text-white w-[50%] text-sm">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
