import { motion } from "framer-motion";
import { Fragment, useState } from "react";
import { useTranslation } from "react-i18next";
import { BsStars } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { MoonLoader } from "react-spinners";

interface Inputs {
  fullname?: string;
  email?: string;
  textarea?: string;
}

const Contact: React.FC = () => {
  const [inputs, setinputs] = useState<Inputs>({});
  const [loadingMap, SetloadingMap] = useState<boolean>(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setinputs((values) => ({
      ...values,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs.fullname);
  };

  const handleImageLoad = () => {
    SetloadingMap(false);
  };

  const { t } = useTranslation();

  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1761.062637291801!2d47.556397578627234!3d-18.922108120840083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d007a174a47%3A0x62a155fa55d89cce!2sJao's%20Pub!5e0!3m2!1sfr!2smg!4v1726839371820!5m2!1sfr!2smg";

  return (
    <Fragment>
      <div id="Contact" className=" relative text-center mb-16 lg:mt-10">
        <motion.div
          className="absolute hidden md:block md:top-[-15%] md:right-[28%]  lg:block lg:top-[-15%] lg:right-[37%]"
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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contactez-Nous
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Nous somme à votre écoute pour vos projets
        </p>
      </div>

  <div className="h-[400px] w-full relative flex justify-center items-center flex-col">
    <div className="flex justify-center items-center w-[90%] lg:w-[60%] h-full">
      {loadingMap && (
        <div className="flex justify-center items-center absolute inset-0 z-10 ">
          <MoonLoader color="#9f7126" size={50} loading={loadingMap} />
        </div>
      )}
      <iframe
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ borderRadius: "1rem" }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleImageLoad}
        className="w-full h-full"
      ></iframe>
    </div>
  </div>

  <div className="max-w-4xl mt-8 mx-auto p-8">
    <h2 className="text-3xl font-semibold text-white dark:text-[#f1f1f1] mb-6">
      {t("Formulaire de contact")}
    </h2>
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <input
          type="text"
          name="fullname"
          placeholder={t("Nom et prénom")}
          className="flex-1 px-4 py-3 rounded-lg border dark:bg-gray-800 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7EBBD5]"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder={t("Adresse email")}
          className="flex-1 px-4 py-3 rounded-lg border dark:bg-gray-800 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7EBBD5]"
          onChange={handleChange}
          required
        />
      </div>

      <textarea
        name="textarea"
        placeholder={t("Écrivez votre message...")}
        rows={5}
        className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7EBBD5]"
        onChange={handleChange}
        required
      ></textarea>

      <div className="flex justify-end">
        <button
          type="submit"
          className="flex items-center gap-2 bg-yellow-400 dark:bg-yellow-500 hover:bg-yellow-500 dark:hover:bg-yellow-600 transition duration-300 text-black px-6 py-3 rounded-lg font-semibold shadow-md"
        >
          <IoIosSend className="text-xl" />
          {t("Envoyer le message")}
        </button>
      </div>
    </form>

    <div className="text-center mt-6 mb-12 text-base text-gray-600 px-6 py-4 dark:text-gray-300 dark:border-gray-600 max-w-xl mx-auto">
      {t("Merci pour votre message ! Nous vous répondrons dès que possible.")}
    </div>
  </div>
</Fragment>

  );
};

export default Contact;
