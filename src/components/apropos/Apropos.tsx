import React from "react";
import { useTranslation } from "react-i18next";
import { FaEye, FaLightbulb, FaBolt, FaHandsHelping } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";


import { FaCar, FaSoap, FaParking, FaSmile } from "react-icons/fa";

const values = [
  {
    icon: <FaCar className="text-blue-400 w-8 h-8" />,
    title: "Expertise",
    description:
      "Notre équipe maîtrise chaque détail du lavage auto pour offrir un service professionnel .",
  },
  {
    icon: <FaSoap className="text-blue-400 w-8 h-8" />,
    title: "Produits magic",
    description:
      "Nous utilisons des produits de nettoyage premium, sûrs pour vos véhicules et magique.",
  },
  {
    icon: <FaParking className="text-blue-400 w-8 h-8" />,
    title: "Parking sécurisé",
    description:
      "Notre parking est organisé et sécurisé, garantissant la tranquillité d’esprit de touts .",
  },
  {
    icon: <FaSmile className="text-blue-400 w-8 h-8" />,
    title: "Satisfaction ",
    description:
      "La satisfaction de nos clients est notre priorité : un service rapide, efficace et incroyable.",
  },
];



const Apropos: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section id="A propos" className="mt-8 lg:mt-9 lg:py-24 px-6">
      <div className="max-w-7xl mx-auto lg:flex lg:items-start lg:gap-20">
        <div className="lg:w-1/2 text-gray-900 dark:text-gray-100">
          <h1
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Qui est <span className="text-yellow-400">Magic Auto</span> ?
          </h1>

          <p
            className="mb-6 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            Magic Auto assure le lavage de tous vos véhicules et propose un
            parking sécurisé. Rapidité, qualité et satisfaction client sont nos
            priorités. y
          </p>

          <p
            className="mb-10 text-lg leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            Découvrez comment <em>Magic Auto</em> allie propreté, sécurité et
            satisfaction pour rendre chaque visite unique.
          </p>

          <ScrollLink
            to="Services"
            smooth={true}
            duration={500}
            offset={-60}
            href="#vision"
            data-aos="zoom-in"
            data-aos-delay="600"
            className="inline-block bg-yellow-400 dark:bg-yellow-400 text-gray-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 dark:hover:bg-yellow-400 transition-colors duration-300"
          >
            {t("Découvrez notre service")}
          </ScrollLink>
        </div>

        <div className="mt-20 lg:mt-0 lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map(({ icon, title, description }, index) => (
            <div
              key={title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 200}
              data-aos-duration="800"
              className="bg-[#f5f5f5] dark:bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-default"
            >
              <div className="titreicon flex gap-4 dark:text-black">
                <div className="mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold mb-2">{t(title)}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-800">
                {t(description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apropos;
