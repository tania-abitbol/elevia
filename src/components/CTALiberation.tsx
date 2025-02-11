const CTALiberation: React.FC = () => {
  const handleCalendlyClick = () => {
    console.log("Bouton cliqué : tentative d'envoi de l'évènement conversion.");

    const redirect = () => {
      console.log("Redirection effectuée vers Calendly.");
      window.location.href = "https://calendly.com/taniaelevia/15min";
    };

    if (typeof window !== "undefined" && window.gtag) {
      console.log("gtag est disponible, déclenchement de l'évènement conversion.");
      window.gtag("event", "conversion", {
        send_to: "AW-16866771162/xylZCOvUopwaENqB2uo-",
        value: 1.0,
        currency: "EUR",
        event_callback: () => {
          console.log("Callback de conversion exécuté.");
          redirect();
        },
      });
      // Fallback : si le callback ne s’exécute pas dans les 1.5 secondes, on redirige quand même
      setTimeout(() => {
        console.log("Timeout de fallback atteint, redirection automatique.");
        redirect();
      }, 1500);
    } else {
      console.log("gtag non disponible, redirection immédiate.");
      redirect();
    }
  };

  return (
    <section className="bg-[var(--accent-color)] text-white py-6 px-8 text-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <p className="text-md md:text-lg font-medium">
          Dites adieu au stress de l&apos;organisation des voyages. Profitez, on s&apos;occupe de tout.
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
