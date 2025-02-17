const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sophie, consultante dans le luxe",
      text: "Avec mon emploi du temps chargé, nous n’aurions jamais eu le temps de planifier un voyage aussi incroyable tout en respectant notre budget initial. Merci pour cette expérience !",
      detail: "Destination : Tokyo et Kyoto",
    },
    {
      name: "Julien, CEO avec une vie bien remplie",
      text: "J'avais besoin de déconnecter rapidement. Elevia s'est occupé de tout avec une précision incroyable : vol, hébergement, chauffeur, activités sur mesure.",
      detail: "Destination : Marrakech",
    },
    {
      name: "Jean-François et sa famille de cinq",
      text: "Avec trois enfants et des agendas surchargés, nous pensions qu'un safari en Tanzanie était irréalisable. Elevia a rendu cela non seulement faisable, mais exceptionnel. ",
      detail: "Destination : Tanzanie",
    },
  ];

  return (
    <section
      id="testimonials"
      className="p-8 bg-gradient-to-b from-[#F9F9F9] to-white text-center px-4 md:px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        Des expériences inoubliables racontées par nos clients
      </h2>
      <p className="text-md md:text-lg mt-2 max-w-2xl mx-auto text-gray-700 leading-relaxed">
        Découvrez comment Elevia a transformé leurs voyages avec une expertise,
        un souci du détail et un service irréprochable.
      </p>

      <div className="grid md:grid-cols-3 gap-6 md:gap-10 mt-10 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md p-5 md:p-6 transition duration-300 hover:shadow-xl border border-gray-200"
          >
            <div className="flex justify-center space-x-1 mb-3">
              {[...Array(5)].map((_, starIndex) => (
                <span
                  key={starIndex}
                  className="text-[#FFD700] text-sm md:text-lg"
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm md:text-lg text-gray-800 leading-relaxed italic">
              {testimonial.text}
            </p>
            <div className="mt-3 text-[var(--accent-color)] font-semibold text-xs md:text-sm">
              — {testimonial.name}
            </div>
            <p className="text-gray-500 text-xs md:text-sm mt-1">
              {testimonial.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
