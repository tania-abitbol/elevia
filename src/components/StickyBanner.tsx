import { useState, useEffect } from "react";
const StickyBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 1000) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    showBanner && (
      <div className="fixed bottom-0 left-0 w-full bg-[#002a5c] text-white py-4 px-6 flex flex-col md:flex-row items-center justify-between z-50 shadow-lg">
        <p className="text-md text-center md:text-left mb-4 md:mb-0 md:mr-4">
          Dites adieu aux heures passées à organiser.
        </p>
        <a
          href="https://calendly.com/taniaelevia/15min"
          target="_blank"
          className="bg-white text-[#002a5c] px-6 py-2 font-semibold rounded-lg shadow hover:bg-gray-200 transition-all"
        >
          Planifier un appel
        </a>
      </div>
    )
  );
};

export default StickyBanner;
