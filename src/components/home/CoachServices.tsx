import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { 
  Briefcase, 
  Map, 
  Globe, 
  Heart, 
  School, 
  Trophy, 
  Check, 
  ChevronRight 
} from 'lucide-react';
import { coachServices } from '../../data/coaches';

const CoachServices = () => {
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
        staggerChildren: 0.15,
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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-primary-600" />;
      case 'map':
        return <Map className="w-6 h-6 text-primary-600" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-primary-600" />;
      case 'heart':
        return <Heart className="w-6 h-6 text-primary-600" />;
      case 'school':
        return <School className="w-6 h-6 text-primary-600" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-primary-600" />;
      default:
        return <Briefcase className="w-6 h-6 text-primary-600" />;
    }
  };

  return (
    <section className="section">
      <div className="">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-primary-900">
            Coach Hire Services
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            From day trips to European tours, our fleet of premium coaches caters to all your travel needs with comfort and reliability.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {coachServices.map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="p-6 transition-shadow bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg">
              <div className="flex items-center justify-center mb-4 rounded-lg bg-primary-50 w-14 h-14">
                {getIcon(service.icon)}
              </div>
              <h3 className="mb-3 text-xl font-bold text-primary-900">
                {service.title}
              </h3>
              <p className="mb-4 text-gray-600">
                {service.description}
              </p>
              <ul className="mb-4 space-y-2">
                {service.features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/coach-hire"
                className="flex items-center mt-auto font-medium transition-colors text-primary-600 hover:text-primary-700"
              >
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link to="/coach-hire" className="btn btn-primary">
            View All Coach Services
            <ChevronRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoachServices;