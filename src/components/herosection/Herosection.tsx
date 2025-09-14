import { FaEnvelopeOpenText } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link as ScrollLink } from "react-scroll";

const Herosection: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col justify-center items-center text-center mt-16 sm:mt-28 lg:mt-40 px-4">
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white drop-shadow-sm">
          {t("hero.title1")}
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-600 dark:text-blue-300 mt-3">
          {t("hero.title2")}
        </h2>
      </div>

      <div className="mb-10 text-lg sm:text-xl text-gray-700 dark:text-gray-300 space-y-1">
        {t("hero.subtitle")}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="relative hover:bg-yellow-400 hover:text-white inline-flex items-center justify-center gap-2 px-7 py-3 overflow-hidden font-semibold border border-gray-700 dark:border-white text-gray-700 dark:text-white rounded-lg transition duration-300 ease-in-out dark:hover:bg-white/10 hover:scale-105">
          <ScrollLink
            to={"Contact"}
            smooth={true}
            duration={500}
            offset={-60}
            className="relative z-10 flex items-center"
          >
            <FaEnvelopeOpenText className="mr-2" /> {t("hero.button")}
          </ScrollLink>
          <span className="absolute inset-0 opacity-5 bg-gray-700 dark:bg-white blur-sm"></span>
        </button>
      </div>
    </section>
  );
};

export default Herosection;
