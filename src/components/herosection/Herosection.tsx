import { FaEnvelopeOpenText } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const Herosection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center text-center mt-16 sm:mt-28 lg:mt-40 px-4">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#3E2F00] dark:text-white drop-shadow-sm">
          Votre véhicule Partira
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#5A3E00] dark:text-yellow-400 mt-3">
          Comme neuf, éclatant de propreté
        </h2>
      </div>

      <div className="mb-10 text-lg sm:text-xl text-[#4B3A00] dark:text-gray-300 space-y-1">
        Magic Auto vous offre un moment inoubliable
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="relative inline-flex items-center justify-center gap-2 px-7 py-3 overflow-hidden font-semibold border border-[#5A3E00] dark:border-white text-[#5A3E00] dark:text-white rounded-lg transition duration-300 ease-in-out hover:bg-[#FFE066] dark:hover:bg-white/10 hover:scale-105">
          <ScrollLink
            to={"Contact"}
            smooth={true}
            duration={500}
            offset={-60}
            className="relative z-10 flex items-center"
          >
            <FaEnvelopeOpenText className="mr-2" /> Contacter-nous maintenant
          </ScrollLink>
          <span className="absolute inset-0 opacity-5 bg-[#5A3E00] dark:bg-white blur-sm"></span>
        </button>
      </div>
    </section>
  );
};

export default Herosection;
