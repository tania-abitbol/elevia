import { Link } from "react-scroll";
import { useState } from "react";
import { FaPlane } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* ✅ NAVBAR PRINCIPALE (fixe seulement au top) */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute top-5 left-1/2 transform -translate-x-1/2 w-[85%] md:w-[75%] lg:w-[65%] rounded-xl px-6 py-3 bg-black/50 backdrop-blur-md text-white z-50 shadow-lg"
      >
        <div className="flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <FaPlane className="text-lg text-[var(--yellow)] animate-pulse" />
            <h1 className="text-lg md:text-xl font-light tracking-wide">
              Elevia{" "}
              <span className="text-[var(--yellow)] font-semibold">
                Prestige
              </span>
            </h1>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex space-x-8">
            {["hero", "voyages", "process"].map((section, index) => (
              <Link
                key={index}
                to={section}
                smooth={true}
                offset={section === "voyages" ? -200 : -100}
                duration={1000}
                className="relative font-medium tracking-wider cursor-pointer transition duration-300 hover:text-[var(--yellow)]"
              >
                {section === "hero" && "Accueil"}
                {section === "voyages" && "Nos Voyages"}
                {section === "process" && "Comment ça marche ?"}
              </Link>
            ))}
            <a
              href="https://calendly.com/taniaelevia/15min"
              target="_blank"
              className="font-medium tracking-wider cursor-pointer transition duration-300 hover:text-[var(--yellow)]"
            >
              Contact
            </a>
          </div>

          {/* BOUTON BURGER MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none text-white"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    !isMenuOpen
                      ? "M4 6h16M4 12h16M4 18h16"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ✅ MENU MOBILE (fix centré avec animation propre) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black/90 text-white px-8 py-12 flex flex-col items-center justify-center space-y-6 z-50"
          >
            {/* ✅ LOGO + BOUTON FERMER */}
            <div className="absolute top-4 left-6 flex items-center justify-between w-full">
              <div className="flex items-center space-x-2">
                <FaPlane className="text-lg text-[var(--yellow)] animate-pulse" />
                <h1 className="text-lg md:text-xl font-light tracking-wide">
                  Elevia{" "}
                  <span className="text-[var(--yellow)] font-semibold">
                    Prestige
                  </span>
                </h1>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white focus:outline-none mr-12"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* ✅ LIENS MOBILE BIEN CENTRÉS */}
            {["hero", "voyages", "process"].map((section, index) => (
              <Link
                key={index}
                to={section}
                smooth={true}
                offset={section === "voyages" ? -200 : -100}
                duration={1000}
                className="text-xl font-semibold cursor-pointer transition duration-300 hover:text-[var(--yellow)]"
                onClick={() => setIsMenuOpen(false)}
              >
                {section === "hero" && "Accueil"}
                {section === "voyages" && "Nos Voyages"}
                {section === "process" && "Comment ça marche ?"}
              </Link>
            ))}
            <a
              href="https://calendly.com/taniaelevia/15min"
              target="_blank"
              className="text-xl font-semibold cursor-pointer transition duration-300 hover:text-[var(--yellow)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
