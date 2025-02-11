const CTALiberation: React.FC = () => {
  const handleCalendlyClick = () => {
    window.gtag("event", "conversion", {
      send_to: "AW-16866771162/xylZCOvUopwaENqB2uo-",
      value: 1.0,
      currency: "EUR",
    });
  };

  return (
    <section className="bg-[var(--accent-color)] text-white py-6 px-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-md md:text-lg font-medium">
          Dites adieu au stress de l&apos;organisation des voyages. Profitez, on
          s&apos;occupe de tout.
        </p>
        <a
          href="https://calendly.com/taniaelevia/15min"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 md:mt-0 px-6 py-2 bg-white text-[var(--accent-color)] font-semibold rounded-md hover:bg-gray-200 transition"
          onClick={handleCalendlyClick} // Ajoute l'événement ici
        >
          Réserver mon appel
        </a>
      </div>
    </section>
  );
};

export default CTALiberation;
