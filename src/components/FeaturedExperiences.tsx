const FeaturedExperiences: React.FC = () => {
  const experiences = [
    {
      title: 'Hôtels d’exception',
      description: 'Séjours Signature, soigneusement sélectionnés pour leur raffinement et leur service irréprochable.',
      image: '/hotel.jpg',
      alt: 'Séjours Signature',
    },
    {
      title: 'Villas Élégantes',
      description: 'Des villas sublimes, avec piscine privée et conciergerie dédiée, pour une intimité absolue.',
      image: '/villa.jpg',
      alt: 'Villas Élégantes',
    },
    {
      title: 'Aventures Sur-Mesure',
      description: 'Expéditions uniques et guidées, mêlant luxe et authenticité dans des lieux exclusifs.',
      image: '/safari.jpg',
      alt: 'Aventures Sur-Mesure',
    },
    {
      title: 'Voyages Aériens Premium',
      description: 'Vols premium, optimisés pour le confort et la flexibilité, avec un service d’exception.',
      image: '/avion.jpg',
      alt: 'Voyages Aériens Privés',
    },
    {
      title: 'Ski en Montagne',
      description: 'Chalets luxueux au cœur des montagnes, combinant sérénité, jacuzzi et ski privé.',
      image: '/ski.jpg',
      alt: 'Retraites en Montagne',
    },
    {
      title: 'Expériences Maritimes',
      description: 'Croisières personnalisées sur des yachts élégants, avec itinéraires exclusifs.',
      image: '/yacht.jpg',
      alt: 'Expériences Maritimes',
    },
  ]

  return (
    <section id='voyages' className='p-20 px-6 text-center'>
      <h2 className='text-4xl font-bold text-gray-900'>Des expériences d’exception</h2>
      <p className='text-lg mt-4 max-w-3xl mx-auto text-gray-700'>
        Conçues pour vous offrir un équilibre parfait entre confort, exploration et élégance.
      </p>

      <div className='grid md:grid-cols-3 gap-12 mt-10 max-w-6xl mx-auto'>
        {experiences.map((experience) => (
          <div key={experience.title} className='relative rounded-lg shadow-md overflow-hidden'>
            {/* Image avec filtre subtil */}
            <div className='relative'>
              <img src={experience.image} alt={experience.alt} className='w-full h-64 object-cover' />
              <div className='absolute inset-0 bg-black bg-opacity-20'></div>
            </div>
            {/* Texte sous l'image */}
            <div className='p-6 bg-white'>
              <h3 className='text-xl font-semibold text-gray-900'>{experience.title}</h3>
              <p className='mt-2 text-gray-600 leading-relaxed'>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedExperiences
