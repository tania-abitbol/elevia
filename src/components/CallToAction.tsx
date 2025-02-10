import Link from 'next/link'

const CallToAction: React.FC = () => {
  return (
    <section
      id='contact'
      className='relative bg-[var(--accent-color)] text-white py-10 text-center overflow-hidden px-8'
    >
      <div className='absolute inset-0 bg-black bg-opacity-20'></div>

      <div className='relative z-10 max-w-3xl mx-auto'>
        <h2 className='text-2xl font-bold'>Prêt à vivre une expérience unique ?</h2>
        <p className='text-md mt-4'>
          Réservez un appel dès maintenant et laissez-nous organiser votre prochain voyage de rêve.
        </p>
        <Link
          href='https://calendly.com/taniabitbol/15min'
          className='mt-6 inline-block px-8 py-4 bg-white text-[var(--accent-color)] font-semibold rounded-lg transition duration-300 transform hover:bg-gray-200 hover:scale-105'
        >
          Réserver un appel
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
