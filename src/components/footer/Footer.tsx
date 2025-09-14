import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center } from "@react-three/drei";
import Robo3D from "../../threeDModel/Robo3D";
import { useTranslation } from "react-i18next";

const navigationLinks = [
  { name: "Accueil", id: "Accueil" },
  { name: "A propos", id: "A propos" },
  { name: "Services", id: "Services" },
  { name: "Projets", id: "Projet" },
  { name: "Contact", id: "Contact" },
  { name: "FAQ", id: "FAQ" },
];

const sociallinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com" },
  { icon: <FaInstagram />, url: "https://instagram.com" },
  { icon: <FaTwitter />, url: "https://twitter.com" },
  { icon: <FaLinkedinIn />, url: "https://linkedin.com" },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="text-gray-800 mt-28 dark:text-gray-200 px-6 py-12">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="w-full min-h-[300px] relative bg-white/10 dark:bg-white/5 rounded-lg flex items-center justify-center text-gray-400 text-sm border border-gray-300 dark:border-gray-600">
            <Canvas camera={{ position: [0, 200, 500], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Center>
                <Robo3D />
              </Center>
              <OrbitControls
                enableZoom={true}
                minDistance={4}
                maxDistance={200}
              />
            </Canvas>
            <a
              href="/"
              className="text-2xl absolute top-0 left-4 font-extrabold text-gray-900 dark:text-white select-none"
            >
              HKB<span className="text-yellow-500"> Tech</span>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            {t(
              "Nous vous accompagnons à chaque étape pour une expérience optimale."
            )}
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold dark:text-yellow-500 mb-4 text-white">
            {t("Navigation")}
          </h2>
          <ul className="space-y-2 text-sm">
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <ScrollLink
                  to={link.id}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  className="cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-400 transition"
                >
                  {t(link.name)}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white dark:text-yellow-500 mb-4">
            {t("Réseaux sociaux")}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            {t("Suivez-nous pour ne rien rater de nos offres.")}
          </p>
          <div className="flex space-x-4">
            {sociallinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-400 text-xl transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 dark:border-gray-600 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} HKB tech. {t("Tous droits réservés.")}
      </div>
    </footer>
  );
};

export default Footer;
