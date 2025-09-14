import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { BsStars } from "react-icons/bs";

interface LoaderProps {
  onComplete: () => void;
}

const starAnimation = {
  animate: {
    rotate: [0, 360],
    scale: [0.8, 1.3, 0.8],
  },
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "linear",
  },
};

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const controls = useAnimation();
  const titleControls = useAnimation();
  const sloganControls = useAnimation();
  const ceControl = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      controls.set({ x: "-150vw", opacity: 0, y: 0 });

      await controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 2, ease: "easeOut" },
      });

      await controls.start({
        y: [0, -10, 0],
        transition: { duration: 1, repeat: 1, repeatType: "reverse" },
      });

      await controls.start({
        x: "150vw",
        opacity: 0,
        transition: { duration: 2, ease: "easeInOut", delay: 1 },
      });

      onComplete();
    };

    titleControls.start({
      opacity: 1,
      scale: 1,
      transition: { delay: 1.5, duration: 1.4, ease: "easeOut" },
    });

    sloganControls.start({
      opacity: 1,
      y: 0,
      transition: { delay: 3.5, duration: 1.2, ease: "easeOut" },
    });
    ceControl.start({
      opacity: 1,
      y: 0,
      transition: { delay: 4.5, duration: 1.2, ease: "easeOut" },
    });

    sequence();
  }, [controls, titleControls, sloganControls, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center z-40 bg-fondprincipal-degradedark"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        {...starAnimation}
        className="absolute top-10 left-8 md:block md:top-[10%] md:left-[30%] lg:top-[5%] lg:left-[30%]"
      >
        <BsStars size={40} className="text-white" />
      </motion.div>

      <motion.div
        {...starAnimation}
        className="absolute top-10 right-8 md:block md:top-[10%] md:right-[30%] lg:top-[5%] lg:right-[30%]"
      >
        <BsStars size={40} className="text-white" />
      </motion.div>

      <motion.div
        className="relative w-full flex justify-center items-center"
        animate={controls}
        style={{ willChange: "transform, opacity" }}
      >
        {/* vam 1 */}
        <motion.img
          src="/image/vammipa3.png"
          alt="Voiture 1"
          className="w-48 md:w-64 select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] absolute"
        />
        {/* vam 2  */}
        <motion.img
          src="/image/tucmipa.png"
          alt="Voiture 2"
          className="w-48 md:w-64 select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] absolute"
          style={{ x: -200 }} 
        />
        {/* vam 3  */}
        <motion.img
          src="/image/Motomipa.png"
          alt="Voiture 2"
          className="w-48 md:w-64 select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] absolute"
          style={{ x: -400 }} 
        />

        {/* vam 4  */}
        <motion.img
          src="/image/Camionmipa.png"
          alt="Voiture 2"
          className="w-48 md:w-64 select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)] absolute"
          style={{ x: -600 }} 
        />
      </motion.div>

      <motion.h1
        className=" text-center mt-12 text-3xl lg:text-4xl md:text-6xl font-extrabold text-white tracking-wide font-mono select-none"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={titleControls}
      >
        Bienvenue chez Magic Auto
      </motion.h1>

      <motion.p
        className="mt-4 text-lg md:text-2xl text-white text-center font-light tracking-wide px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={sloganControls}
      >
        Propreté, sécurité et rapidité pour votre véhicule.
      </motion.p>

      <motion.img
        src="/image/cle.png"
        alt="clé"
        initial={{ opacity: 0, y: 20 }}
        className="w-48 md:w-64 select-none drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]"
        animate={ceControl}
      />
    </motion.div>
  );
};

export default Loader;
