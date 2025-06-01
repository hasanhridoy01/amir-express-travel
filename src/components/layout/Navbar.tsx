import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, Bus, MapPin } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Coach Hire", path: "/coach-hire" },
    { name: "Tour Packages", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 py-3.5 w-full z-50 transition-all duration-300 backdrop-blur-3xl`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo
              className={`h-10 w-auto ${
                isScrolled ? "text-primary-900" : "text-neutral"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-1 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-accent-600"
                      : isScrolled
                      ? "text-primary-900 hover:text-primary-700"
                      : "text-neutral hover:text-accent-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex items-center ml-4 space-x-3">
              <a
                href="tel:+44 7445 248478"
                className={`text-sm font-medium ${
                  isScrolled ? "text-primary-900" : "text-neutral"
                }`}
              >
                +44 7445 248478
              </a>
              <a href="/contact" className="btn btn-accent">
                Book Now
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? "text-primary-900" : "text-neutral"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="shadow-lg bg-neutral md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "bg-primary-50 text-primary-700"
                      : "text-primary-900 hover:bg-primary-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 pt-2 mt-2 border-t border-gray-200">
              <a
                href="tel:+441234567890"
                className="px-3 py-2 font-medium text-primary-900"
              >
                +44 123 456 7890
              </a>
              <Link to="/contact" className="m-2 btn btn-accent">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
