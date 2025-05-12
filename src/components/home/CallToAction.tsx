import { Link } from 'react-router-dom';
import { PhoneCall, ChevronRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="section bg-primary-50">
      <div className="">
        <div className="p-8 bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Ready to Plan Your Next Journey?
              </h2>
              <p className="mb-6 text-lg text-white/90">
                Whether you need a coach for a special occasion or want to explore our tour packages, we're here to make your travel experience exceptional.
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
            </div>
            <div className="p-6 bg-white/10 backdrop-blur-sm rounded-xl md:p-8">
              <h3 className="mb-4 text-xl font-bold text-white">
                Need Help Planning?
              </h3>
              <p className="mb-6 text-white/90">
                Our travel experts are ready to assist you in creating the perfect itinerary for your needs. Contact us for personalized service.
              </p>
              <div className="flex items-center p-4 rounded-lg bg-accent-500">
                <div className="p-2 mr-4 bg-white rounded-full">
                  <PhoneCall className="w-6 h-6 text-primary-900" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary-900">Call us at</p>
                  <a href="tel:+44 7445 248478" className="text-lg font-bold text-primary-900">
                    +44 7445 248478
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;