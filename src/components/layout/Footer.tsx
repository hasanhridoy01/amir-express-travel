import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo className="text-white" />
            </div>
            <p className="mb-4 text-sm text-gray-300">
              Premium coach hire services and tour packages across the UK and Europe. Creating memorable travel experiences since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-accent-500 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-500 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/coach-hire" className="text-gray-300 hover:text-accent-500 transition-colors">Coach Hire</Link>
              </li>
              <li>
                <Link to="/tours" className="text-gray-300 hover:text-accent-500 transition-colors">Tour Packages</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-accent-500 transition-colors">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-accent-500 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Tours</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tours/1" className="text-gray-300 hover:text-accent-500 transition-colors">Scotland Highlands</Link>
              </li>
              <li>
                <Link to="/tours/2" className="text-gray-300 hover:text-accent-500 transition-colors">Lake District Adventure</Link>
              </li>
              <li>
                <Link to="/tours/3" className="text-gray-300 hover:text-accent-500 transition-colors">Paris Weekend Getaway</Link>
              </li>
              <li>
                <Link to="/tours/4" className="text-gray-300 hover:text-accent-500 transition-colors">Amsterdam City Break</Link>
              </li>
              <li>
                <Link to="/tours/5" className="text-gray-300 hover:text-accent-500 transition-colors">Cornwall Coastal Tour</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 text-accent-500" />
                <span className="text-gray-300">123 Travel Street, London, UK</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 text-accent-500" />
                <a href="tel:+441234567890" className="text-gray-300 hover:text-accent-500 transition-colors">+44 123 456 7890</a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 text-accent-500" />
                <a href="mailto:info@amirexpress.com" className="text-gray-300 hover:text-accent-500 transition-colors">info@amirexpress.com</a>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 mr-2 text-accent-500" />
                <span className="text-gray-300">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
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