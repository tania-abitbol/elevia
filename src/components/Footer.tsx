import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002a5c] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-start justify-between text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-semibold">Elevia</h3>
          <p className="text-sm mt-2 max-w-xs">
            Des voyages sur-mesure, conçus pour un confort absolu. Partez
            l’esprit léger, on s’occupe de tout.
          </p>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-medium">Navigation</h4>
          <ul className="text-sm mt-2 space-y-1">
            <li>
              <Link href="#voyages" className="hover:underline">
                Expériences
              </Link>
            </li>
            <li>
              <Link href="#process" className="hover:underline">
                Comment ça marche ?
              </Link>
            </li>
            <li>
              <Link href="#testimonials" className="hover:underline">
                Témoignages
              </Link>
            </li>
            <li>
              <Link href="#faq" className="hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium">Suivez-nous</h4>
          <div className="flex justify-center md:justify-start mt-2 space-x-4">
            <a
              href="https://www.linkedin.com/company/106223380/admin/dashboard/"
              className="text-white hover:text-gray-300"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Ligne de séparation */}
      <div className="border-t border-gray-600 mt-6 pt-6 text-center text-sm">
        <p>© 2025 Elevia. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
