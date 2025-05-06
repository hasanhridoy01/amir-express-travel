import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { Clock, MapPin, Star, ChevronRight } from 'lucide-react';
import { tours } from '../../data/tours';

const FeaturedTours = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Filter only featured tours
  const featuredTours = tours.filter(tour => tour.featured);

  return (
    <section className="section bg-neutral-50">
      <div className="">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-primary-900">
            Popular Tour Packages
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Discover our most sought-after destinations, carefully curated for unforgettable experiences and amazing adventures.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredTours.map((tour) => (
            <motion.div key={tour.id} variants={itemVariants} className="card group">
              <div className="relative overflow-hidden h-60">
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute px-3 py-1 text-sm font-semibold rounded-full top-4 right-4 bg-accent-500 text-primary-900">
                  £{tour.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-2 text-sm text-gray-500">
                  <MapPin className="w-4 h-4 mr-1 text-primary-500" />
                  <span>{tour.location}, {tour.country}</span>
                  <span className="mx-2">•</span>
                  <Clock className="w-4 h-4 mr-1 text-primary-500" />
                  <span>{tour.duration}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary-900 group-hover:text-primary-600">
                  {tour.title}
                </h3>
                <p className="mb-4 text-gray-600 line-clamp-2">
                  {tour.subtitle}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 fill-current text-accent-500" />
                    <span className="ml-1 font-medium">{tour.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({tour.reviews} reviews)</span>
                  </div>
                  <Link
                    to={`/tours/${tour.id}`}
                    className="flex items-center font-medium transition-colors text-primary-600 hover:text-primary-700"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/tours" className="btn btn-primary">
            View All Tours
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;