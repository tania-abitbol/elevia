import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Quels types de voyages proposez-vous ?",
      answer: (
        <p>
          Nous organisons des voyages sur-mesure pour ceux qui veulent partir
          l'esprit léger, sans s'occuper de la logistique. Que ce soit en
          famille, entre amis ou en solo, nous nous chargeons de tout pour que
          vous profitiez à 100 % de votre voyage.
        </p>
      ),
    },
    {
      question: "Comment fonctionne le processus de réservation ?",
      answer: (
        <p>
          C’est simple :
          <br />
          1. Planifiez un appel gratuit avec un conseiller.
          <br />
          2. Définissez vos envies et besoins.
          <br />
          3. Nous organisons tout : hébergements, transports, activités.
          <br />
          4. Vous recevez votre programme détaillé et partez sans stress.
        </p>
      ),
    },
    {
      question: "Quelles destinations sont disponibles ?",
      answer: (
        <p>
          Nous proposons des voyages partout dans le monde selon vos envies :
          <br />- Séjours en famille à la mer ou à la montagne.
          <br />- City-trips en Europe ou ailleurs.
          <br />- Voyages nature et aventure (randonnées, road trips, safaris).
          <br />- Escapades détente et bien-être.
          <br />
          Peu importe la destination, on s'occupe de tout.
        </p>
      ),
    },
    {
      question: "Quels sont les budgets que vous prenez en charge ?",
      answer: (
        <p>
          Nos voyages sont adaptés à différents budgets, du séjour simple au
          voyage plus haut de gamme. Nous trouvons les meilleures options en
          fonction de vos attentes et vous garantissons une organisation
          optimale sans prise de tête.
        </p>
      ),
    },
    {
      question: "Pourquoi choisir Élevia Prestige ?",
      answer: (
        <p>
          - Zéro stress : on s’occupe de tout, vous profitez.
          <br />- Gain de temps : fini les recherches interminables.
          <br />- Personnalisation : chaque voyage est conçu selon vos attentes.
          <br />- Assistance : une équipe disponible en cas de besoin.
        </p>
      ),
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Questions Fréquentes
        </h2>
        <p className="text-gray-600 text-lg">
          Simplifiez vos voyages et partez l'esprit tranquille.
        </p>
      </div>

      <div className="mt-8 max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <button
              className={`w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none transition-all ${
                openIndex === index ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800 text-lg">
                {faq.question}
              </span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-gray-500 text-xl"
              >
                {openIndex === index ? "−" : "+"}
              </motion.span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0, translateY: -10 }}
                  animate={{ opacity: 1, height: "auto", translateY: 0 }}
                  exit={{ opacity: 0, height: 0, translateY: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="px-6 pb-6 pt-2 text-gray-700 bg-gray-100 rounded-b-xl leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
