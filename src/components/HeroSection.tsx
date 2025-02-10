const HeroSection: React.FC = () => {
  return (
    <header
      id='hero'
      className="relative h-screen bg-[url('/luxury-travel.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center px-6"
    >
      <div className='absolute inset-0 bg-black bg-opacity-50'></div>
      <div className='relative z-10 max-w-xl'>
        <h1 className='text-4xl md:text-5xl font-bold leading-snug animate-fade-in'>Vivez l’Exception avec Elevia</h1>
        <p className='text-base md:text-lg mt-4 opacity-90'>
          Des voyages sur-mesure, une organisation impeccable, des expériences inoubliables.
        </p>
        <a
          href='https://calendly.com/taniabitbol/15min'
          className='mt-6 px-6 py-3 md:px-8 md:py-4 bg-white text-[var(--accent-color)] font-medium rounded-lg transition duration-300 transform hover:bg-gray-200 hover:scale-105 inline-block'
        >
          Planifier un Voyage
        </a>
      </div>
      <div className='absolute bottom-6 animate-bounce'>
        <span className='text-sm md:text-lg'>↓ Faites défiler pour en savoir plus</span>
      </div>
    </header>
  )
}

export default HeroSection
