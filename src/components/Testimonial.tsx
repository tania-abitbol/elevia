const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sophie, consultante dans le luxe",
      text: "“Avec mon emploi du temps chargé, nous n’aurions jamais eu le temps de planifier un voyage aussi incroyable tout en respectant notre budget initial. Merci pour cette expérience !”",
      detail: "Destination : Tokyo et Kyoto",
    },
    {
      name: "Julien, CEO avec une vie bien remplie",
      text: "“J&aposavais besoin de déconnecter rapidement. Elevia s'est occupé de tout avec une précision incroyable : vol, hébergement, chauffeur, activités sur mesure.”",
      detail: "Destination : Marrakech",
    },
    {
      name: "Jean-François et sa famille de cinq",
      text: "“Avec trois enfants et des agendas surchargés, nous pensions qu'un safari en Tanzanie était irréalisable. Elevia a rendu cela non seulement faisable, mais exceptionnel. ”",
      detail: "Destination : Tanzanie",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-[#F9F9F9] to-white text-center px-6"
    >
      <h2 className="text-4xl font-bold text-gray-900">
        Des expériences inoubliables racontées par nos clients
      </h2>
      <p className="text-lg mt-4 max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Découvrez comment Elevia a transformé leurs voyages avec une expertise,
        un souci du détail et un service irréprochable.
      </p>

      <div className="grid md:grid-cols-3 gap-12 mt-12 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white rounded-lg shadow-md p-6 transition duration-300 hover:shadow-xl border border-gray-200"
          >
            {/* Animation des étoiles */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-1 animate-pulse">
              {[...Array(5)].map((_, starIndex) => (
                <span key={starIndex} className="text-[#FFD700] text-lg">
                  ★
                </span>
              ))}
            </div>
            <p className="text-lg text-gray-800 leading-relaxed italic mt-8">
              {testimonial.text}
            </p>
            <div className="mt-4 text-[var(--accent-color)] font-semibold text-sm">
              — {testimonial.name}
            </div>
            <p className="text-gray-500 text-sm mt-2">{testimonial.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
