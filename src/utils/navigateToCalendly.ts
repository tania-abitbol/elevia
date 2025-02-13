export const navigateToCalendly = () => {
  console.log("Bouton cliqué : tentative d'envoi de l'évènement conversion.");

  const redirect = () => {
    console.log("Redirection effectuée vers Calendly.");
    window.location.href = "https://calendly.com/taniaelevia/15min";
  };

  if (typeof window !== "undefined") {
    if (window.gtag) {
      console.log(
        "gtag est disponible, déclenchement de l'évènement conversion."
      );

      window.gtag("event", `click_to_callendly`, {
        event_category: "click",
      });

      window.gtag("event", "conversion", {
        send_to: "AW-16866771162/xylZCOvUopwaENqB2uo-",
        value: 1.0,
        currency: "EUR",
        event_callback: () => {
          console.log("Callback de conversion exécuté.");
          redirect();
        },
      });

      setTimeout(() => {
        console.log("Timeout de fallback atteint, redirection automatique.");
        redirect();
      }, 1500);
    }

    if (window.lintrk) {
      console.log(
        "LinkedIn tracking disponible, déclenchement de l'évènement conversion."
      );
      window.lintrk("track", { conversion_id: 19996090 });
    } else {
      console.log("LinkedIn tracking non disponible, redirection immédiate.");
      redirect();
    }
  } else {
    console.log(
      "gtag et LinkedIn tracking non disponibles, redirection immédiate."
    );
    redirect();
  }
};
