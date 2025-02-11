export const navigateToCalendly = () => {
  console.log("Bouton cliqué : tentative d'envoi de l'évènement conversion.");

  const redirect = () => {
    console.log("Redirection effectuée vers Calendly.");
    window.location.href = "https://calendly.com/taniaelevia/15min";
  };

  if (typeof window !== "undefined" && window.gtag) {
    console.log(
      "gtag est disponible, déclenchement de l'évènement conversion."
    );
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
