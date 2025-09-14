import { useState } from "react";
import { FiHelpCircle } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

const faqData = [
  {
    question: "Qu'est-ce que Magic Auto ?",
    answer:
      "Magic Auto est une entreprise spécialisée dans le lavage de tous types de véhicules et la gestion d'un parking sécurisé, offrant rapidité et qualité à chaque visite.",
  },
  {
    question: "Comment réserver un lavage ou un parking ?",
    answer:
      "Remplissez le formulaire de réservation sur notre site en indiquant vos besoins et nous confirmerons votre créneau rapidement.",
  },
  {
    question: "Quels sont les moyens de paiement acceptés ?",
    answer:
      "Nous acceptons les cartes bancaires, Mobile Money et le en liquide",
  },
  {
    question: "Puis-je modifier ou annuler ma réservation ?",
    answer:
      "Oui, tant que la réservation n’a pas été effectuée. Contactez-nous via le formulaire pour toute modification.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="FAQ" className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 dark:text-white mb-8">
        <span className="inline-flex items-center gap-2">
          <FiHelpCircle className="text-4xl text-white dark:text-yellow-400" />
          Foire Aux Questions
        </span>
      </h2>

      <div className="space-y-6 mt-10">
        {faqData.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-2xl 
                       bg-white/90 dark:bg-gradient-to-r dark:from-[#739ae9] dark:to-[#a6bff1]"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex justify-between items-center px-6 py-5 font-semibold text-gray-900 dark:text-white text-lg focus:outline-none"
            >
              <span>{item.question}</span>
              {openIndex === index ? (
                <FaMinusCircle className="text-gray-700 dark:text-white text-xl" />
              ) : (
                <FaPlusCircle className="text-gray-700 dark:text-white text-xl" />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 py-4 text-gray-700 dark:text-white text-sm leading-relaxed bg-gray-50 dark:bg-transparent">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
