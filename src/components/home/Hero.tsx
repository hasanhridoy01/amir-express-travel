import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const backgrounds = [
  {
    image: "https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    title: "Explore Europe's Finest Destinations",
    subtitle: "From historic cities to breathtaking landscapes"
  },
  {
    image: "https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    title: "Discover the Beauty of the UK",
    subtitle: "Unforgettable experiences in Britain's most scenic locations"
  },
  {
    image: "https://images.pexels.com/photos/7291911/pexels-photo-7291911.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
    title: "Premium Coach Services",
    subtitle: "Travel in comfort and style with our luxury fleet"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === backgrounds.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-auto px-5 pb-20 mx-auto sm:px-6 lg:px-10 md:pb-5 md:h-screen">
      {/* Background Images */}
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${bg.image})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 hero-gradient opacity-80"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative flex items-center h-full">
        <div className="pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl text-white"
          >
            <h1 className="mb-4 text-4xl font-bold md:text-5xl lg:text-6xl">
              {backgrounds[current].title}
            </h1>
            <p className="mb-8 text-xl md:text-2xl text-white/90">
              {backgrounds[current].subtitle}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link to="/coach-hire" className="btn btn-accent">
                Hire a Coach
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/tours" className="text-white border-white btn btn-outline hover:bg-white/20">
                Explore Tours
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Popular Destinations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl p-4 mt-16 rounded-lg bg-white/10 backdrop-blur-md"
          >
            <div className="mb-4 text-white">
              <h3 className="text-lg font-semibold">Popular Destinations</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
              {["London", "Edinburgh", "Paris", "Amsterdam", "Lake District"].map((destination) => (
                <Link 
                  key={destination} 
                  to={`/tours`}
                  className="flex items-center justify-center p-2 text-sm font-medium text-white transition-colors rounded-md bg-white/20 hover:bg-white/30"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  {destination}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute left-0 right-0 flex justify-center bottom-9">
        <div className="flex space-x-2">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;