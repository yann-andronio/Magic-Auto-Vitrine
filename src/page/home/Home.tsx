import Herosection from "../../components/herosection/Herosection";
import Navbar from "../../components/navbar/Navbar";
import { BsStars } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoMdArrowRoundDown } from "react-icons/io";
import Apropos from "../../components/apropos/Apropos";
import Pub from "../../components/pub/Pub";
import Service from "../../components/service/Service";
import Contact from "../../components/contact/Contact";
import Faq from "../../components/faq/Faq";
import Footer from "../../components/footer/Footer";
import { useTranslation } from "react-i18next";
import Projets from "../../components/projets/Projets";
import Typedeservice from "../../components/typedesevice/Typedeservice";
const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <section>
        <header
          className=" relative bg-cover bg-center lg:min-h-screen pt-6 dark:bg-fond-degradedark bg-fond-degradelight "
          // style={{ backgroundImage: "url('../../../public/image/fondheader.png')" }}
        >
          <Navbar />
          <div className="deco1">
            <motion.img
              src="./image/eponge.png"
              className="absolute hidden sm:block sm:w-28 sm:top-[54%] lg:block lg:w-60 lg:top-[27%] lg:left-[8%]"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute hidden sm:block sm:top-[37%] sm:right-[5%] lg:block lg:top-[30%] lg:right-[25%]"
              animate={{
                rotate: [0, 360],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <BsStars size={40} className="text-black dark:text-white" />
            </motion.div>
            <motion.img
              src="./image/V2m.png"
              alt="Clé"
              className="absolute hidden sm:block sm:w-32 sm:bottom-[10%] sm:right-[4%] lg:block   lg:w-80 lg:bottom-[15%]  lg:right-[9%]"
              animate={{
                // rotate: [85, 95, 85],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <Herosection />
        </header>
        <main className="dark:bg-fondprincipal-degradedark min-h-screen bg-fondprincipal-degradelight">
          <motion.div
            className="flex justify-center items-center flex-col gap-1"
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p className="uppercase text-sm sm:text-base tracking-widest mt-[6rem] lg:mt-0 md:mt-12 text-bg-black/30 dark:text-white font-semibold   px-4 py-2  ">
              Découverte rapide
            </p>

            <IoMdArrowRoundDown
              size={25}
              className="font-bold text-yellow-500"
            />
          </motion.div>
          <Apropos />
          <Pub />
          <Service />
          <Typedeservice />
          {/* <Projets />
          <Contact /> */}
          <Faq />
          <Footer />
        </main>
      </section>
    </>
  );
};

export default Home;
