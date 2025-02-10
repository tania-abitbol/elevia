import { Link } from "react-scroll";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent text-white z-30">
      <div className="p-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Elevia</h1>

        <div className="hidden md:flex space-x-6">
          <Link
            to="hero"
            smooth={true}
            duration={700}
            className="font-bold cursor-pointer hover:text-[var(--yellow)] transition duration-300"
          >
            Accueil
          </Link>
          <Link
            to="voyages"
            smooth={true}
            offset={-200}
            duration={1000}
            className="font-bold cursor-pointer hover:text-[var(--yellow)] transition duration-300"
          >
            Nos Voyages
          </Link>
          <Link
            to="process"
            offset={-100}
            smooth={true}
            duration={1500}
            className="font-bold cursor-pointer hover:text-[var(--yellow)] transition duration-300"
          >
            Comment ça marche ?
          </Link>
          <a
            href="https://calendly.com/taniaelevia/15min"
            target="_blank"
            className="font-bold cursor-pointer hover:text-[var(--yellow)] transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Menu burger pour mobile */}
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

      {/* Menu déroulant pour mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#002a5c] text-white px-6 py-8 fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6">
          {/* Logo en haut et bouton de fermeture */}
          <div className="absolute top-4 left-6 flex items-center justify-between w-full">
            <h1 className="text-3xl font-bold">Elevia</h1>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8 mr-12"
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

          {/* Liens */}
          <Link
            to="hero"
            smooth={true}
            duration={700}
            className="text-xl font-semibold cursor-pointer hover:text-[var(--yellow)] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="voyages"
            smooth={true}
            offset={-200}
            duration={1000}
            className="text-xl font-semibold cursor-pointer hover:text-[var(--yellow)] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Nos Voyages
          </Link>
          <Link
            to="process"
            offset={-100}
            smooth={true}
            duration={1500}
            className="text-xl font-semibold cursor-pointer hover:text-[var(--yellow)] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Comment ça marche ?
          </Link>
          <a
            href="https://calendly.com/taniaelevia/15min"
            target="_blank"
            className="text-xl font-semibold cursor-pointer hover:text-[var(--yellow)] transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
