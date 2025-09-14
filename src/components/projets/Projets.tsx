import { Fragment, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Projectdata, Typeprojet } from "../../data/Projectdata";
import s from "./projets.module.css";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";

const Projets: React.FC = () => {
  const [projets] = useState<Typeprojet[]>(Projectdata);

  return (
    <Fragment>
      <style>
        {`
          .swiper-button-prev, .swiper-button-next {
            background-color: white; 
            border-radius: 50%; 
            width: 40px; 
            height: 40px; 
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0; 
            position: absolute;
            top: 50%;
            transform: translateY(-50%); 
            z-index: 10; 
          }
          .swiper-button-prev {
            left: -50px; 
          }
          .swiper-button-next {
            right: -50px;
          }
          .swiper-button-prev::after, .swiper-button-next::after {
            font-size: 20px; 
            font-weight: bold;
            color: black;
          }
          .swiper-pagination-bullet {
            background-color: white;
            width: 12px;
            height: 12px; 
          }
          .swiper-pagination-bullet-active {
            background-color: white; 
          }
          .customPagination {
            display: flex;
            justify-content: center;
            margin-top: 20px;
          }
          @media (max-width: 768px) {
            .swiper-button-prev, .swiper-button-next {
              display: none;
            }
          }
          @media (max-width: 480px) {
            .swiper-button-prev, .swiper-button-next {
              display: none;
            }
          }
        `}
      </style>

      <div id="Projet" className={`w-ful py-12 relative lg:mt-10`}>
        <motion.div
          className="absolute hidden md:block md:top-[4%] md:right-[32%]  lg:block lg:top-[4%] lg:right-[39%]"
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
        <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 dark:text-white mb-4">
          Nos projets
        </h2>
        <div
          className={`${s.projetContainer} p-6`}
          style={{ position: "relative" }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              clickable: true,
              el: `.${s.customPagination}`,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {projets.map((projet, index) => (
              <SwiperSlide key={index}>
                <div className="text-center cursor-pointer" data-aos="fade-up">
                  <img
                    src={`./image/projet/${projet.image}.png`}
                    alt={projet.name}
                    className="mx-auto w-full lg:h-[410px] object-cover rounded-xl shadow-lg"
                  />
                  <h3 className="mt-4 text-xl text-black dark:text-white font-semibold">{projet.name}</h3>
                 
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className={s.customPagination}></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </Fragment>
  );
};

export default Projets;
