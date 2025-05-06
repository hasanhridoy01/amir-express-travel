import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Emily Thompson",
    location: "London",
    rating: 5,
    content: "Our Scottish Highlands tour with AmirExpress was absolutely magnificent! The coach was comfortable, the driver was professional and friendly, and the itinerary was perfect. We saw so many breathtaking places that we would have never discovered on our own.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    name: "Robert Johnson",
    location: "Manchester",
    rating: 5,
    content: "We hired a coach for our company retreat, and AmirExpress exceeded all expectations. The luxury coach had all the amenities we needed, and the driver was punctual and accommodating. Will definitely use their services again for future corporate events.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    name: "Sophia Williams",
    location: "Birmingham",
    rating: 4,
    content: "Our school trip to the Lake District was a huge success thanks to AmirExpress. The coach was immaculate, and the driver was fantastic with the children. The entire process from booking to completion was smooth and professional.",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Testimonials = () => {
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

  return (
    <section className="text-white section bg-primary-900">
      <div className="">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-white/80">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experiences with AmirExpress.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative p-6 rounded-lg bg-white/10 backdrop-blur-sm"
            >
              <div className="absolute -top-6 -left-2">
                <Quote className="w-12 h-12 opacity-50 text-accent-500" />
              </div>
              <div className="flex items-center mt-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="object-cover w-12 h-12 mr-4 rounded-full"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-white/70">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? 'text-accent-500 fill-current'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <p className="text-white/90">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;