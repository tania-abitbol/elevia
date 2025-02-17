import { navigateToCalendly } from "@/utils/navigateToCalendly";

const CTALiberation = () => {
  return (
    <section className="bg-[var(--accent-color)] text-white py-10 px-8 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <p className="text-lg md:text-xl font-medium leading-relaxed">
          Dites adieu au stress de l'organisation des voyages.
          <br /> Profitez, on s'occupe de tout.
        </p>

        <button
          className="mt-4 px-8 py-4 bg-white text-[var(--accent-color)] font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-200 transition-all duration-300"
          onClick={navigateToCalendly}
        >
          Planifiez votre voyage maintenant
        </button>
      </div>
    </section>
  );
};

export default CTALiberation;
