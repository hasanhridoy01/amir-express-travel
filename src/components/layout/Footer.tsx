import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Webcam,
  PhoneCall
} from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-primary-900">
      <div className="py-20 container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="mb-4 text-sm text-gray-300">
              Premium coach hire services and tour packages across the UK and
              Europe. Creating memorable travel experiences since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-accent-500"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-accent-500"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-accent-500"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 transition-colors hover:text-accent-500"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/coach-hire"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Coach Hire
                </Link>
              </li>
              <li>
                <Link
                  to="/tours"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Tour Packages
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Popular Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tours/1"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Scotland Highlands
                </Link>
              </li>
              <li>
                <Link
                  to="/tours/2"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Lake District Adventure
                </Link>
              </li>
              <li>
                <Link
                  to="/tours/3"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Paris Weekend Getaway
                </Link>
              </li>
              <li>
                <Link
                  to="/tours/4"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Amsterdam City Break
                </Link>
              </li>
              <li>
                <Link
                  to="/tours/5"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  Cornwall Coastal Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 mr-2 text-accent-500" />
                <span className="text-gray-300">
                  468 Katherine Road , London , E7 8EP
                </span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-5 h-5 mr-2 text-lime-500" />
                <a
                  href="whatsApp:+441234567890"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  +44 7445 248478
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 mr-2 text-accent-500" />
                <a
                  href="tel:+441234567890"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  01245561488
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 mr-2 text-accent-500" />
                <a
                  href="mailto:info@amirexpress.com"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  info@amirexpress.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Webcam className="w-5 h-5 mr-2 text-accent-500" />
                <a
                  target="_blank"
                  href="http://amirexpress.uk"
                  className="text-gray-300 transition-colors hover:text-accent-500"
                >
                  amirexpress.uk
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        <div className="pt-6 mt-10 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © {currentYear} AmirExpress. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <img
                src="https://images.pexels.com/photos/6863332/pexels-photo-6863332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Payment methods"
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
