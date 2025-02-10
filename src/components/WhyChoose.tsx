import { FaCrown, FaStar, FaGlobe } from 'react-icons/fa'

const WhyChoose: React.FC = () => {
  return (
    <section className='py-20 px-6 text-center bg-gray-100'>
      <h2 className='text-4xl font-bold'>Pourquoi choisir Elevia ?</h2>
      <p className='text-lg mt-4 max-w-3xl mx-auto'>
        Vous nous expliquez vos envies, et nous transformons vos idées en un voyage sur-mesure.
      </p>
      <div className='grid md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto'>
        <div className='p-6 bg-white rounded-lg shadow-md flex flex-col items-center'>
          <FaCrown className='text-[var(--accent-color)] text-4xl mb-3' />
          <h3 className='text-xl font-semibold'>100% Sur-Mesure</h3>
          <p className='mt-2 text-gray-600'>Chaque voyage est conçu uniquement pour vous.</p>
        </div>
        <div className='p-6 bg-white rounded-lg shadow-md flex flex-col items-center'>
          <FaStar className='text-[var(--accent-color)] text-4xl mb-3' />
          <h3 className='text-xl font-semibold'>Expériences Exclusives</h3>
          <p className='mt-2 text-gray-600'>Séjours dans des lieux inaccessibles au grand public.</p>
        </div>
        <div className='p-6 bg-white rounded-lg shadow-md flex flex-col items-center'>
          <FaGlobe className='text-[var(--accent-color)] text-4xl mb-3' />
          <h3 className='text-xl font-semibold'>Service Premium</h3>
          <p className='mt-2 text-gray-600'>Un accompagnement de A à Z pour un voyage sans stress.</p>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
