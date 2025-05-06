import { ReactNode, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [showButton, setShowButton] = useState(false);
  
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll event handler
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="h-[44px] w-[44px] rounded-md fixed bottom-4 right-4 bg-accent-600 shadow-lg flex items-center justify-center pt-1"
          style={{ boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.2)" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#424B1B]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9997 4.87598C12.1986 4.87598 12.3894 4.95499 12.53 5.09565L18.6 11.1656C18.8929 11.4585 18.8929 11.9334 18.6 12.2263C18.3071 12.5192 17.8322 12.5192 17.5394 12.2263L11.9997 6.68664L6.46002 12.2263C6.16712 12.5192 5.69225 12.5192 5.39936 12.2263C5.10646 11.9334 5.10646 11.4585 5.39936 11.1656L11.4694 5.09565C11.61 4.95499 11.8008 4.87598 11.9997 4.87598Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 5.0459C12.4142 5.0459 12.75 5.38168 12.75 5.7959V20.6259C12.75 21.0401 12.4142 21.3759 12 21.3759C11.5858 21.3759 11.25 21.0401 11.25 20.6259V5.7959C11.25 5.38168 11.5858 5.0459 12 5.0459Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.166 3.12598C21.166 3.54019 20.8302 3.87598 20.416 3.87598L3.58602 3.87598C3.1718 3.87598 2.83602 3.54019 2.83602 3.12598C2.83602 2.71176 3.1718 2.37598 3.58602 2.37598L20.416 2.37598C20.8302 2.37598 21.166 2.71176 21.166 3.12598Z"
              fill="currentColor"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Layout;