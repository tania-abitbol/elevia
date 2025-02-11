const CTALiberation: React.FC = () => {
  
const handleCalendlyClick = () => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-16866771162/xylZCOvUopwaENqB2uo-",
      value: 1.0,
      currency: "EUR",
      event_callback: () => {
        window.location.href = "https://your-calendly-link.com"; // Redirection
      },
    });
  }
};


  
  return (
    <section className="bg-[var(--accent-color)] text-white py-6 px-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-md md:text-lg font-medium">
          Dites adieu au stress de l&apos;organisation des voyages. Profitez, on
          s&apos;occupe de tout.
        </p>

        <div
          className="mt-4 md:mt-0 px-6 py-2 bg-white text-[var(--accent-color)] font-semibold rounded-md hover:bg-gray-200 cursor-pointer transition"
          onClick={handleCalendlyClick}
        >
          Réserver mon appel
        </div>
      </div>
    </section>
  );
};

export default CTALiberation;

