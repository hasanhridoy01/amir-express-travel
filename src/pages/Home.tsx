import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import FeaturedTours from '../components/home/FeaturedTours';
import CoachServices from '../components/home/CoachServices';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AmirExpress | Coach Hire & Tour Packages</title>
        <meta name="description" content="Premium coach hire services and tour packages across the UK and Europe. Experience comfortable and reliable transportation with AmirExpress." />
      </Helmet>
      
      <Hero />
      <FeaturedTours />
      <CoachServices />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default Home;