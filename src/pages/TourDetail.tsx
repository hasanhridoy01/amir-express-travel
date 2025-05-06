import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, Star, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { tours } from '../data/tours';

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find(t => t.id === Number(id));

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary-600 mb-4">Tour Not Found</h1>
          <p className="text-gray-600 mb-6">The tour you're looking for doesn't exist or has been removed.</p>
          <Link to="/tours" className="btn btn-primary">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Tours
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${tour.title} | AmirExpress Tours`}</title>
        <meta name="description" content={tour.description} />
      </Helmet>

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[400px]">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <div className="flex items-center text-white/90 mb-2">
              <MapPin className="h-5 w-5 mr-1" />
              <span>{tour.location}, {tour.country}</span>
              <span className="mx-2">•</span>
              <Clock className="h-5 w-5 mr-1" />
              <span>{tour.duration}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              {tour.title}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Overview</h2>
              <p className="text-gray-600 mb-6">{tour.description}</p>
              
              <h3 className="text-xl font-bold text-primary-900 mb-3">Tour Highlights</h3>
              <ul className="grid gap-3 mb-6">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-accent-600 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="border-l-2 border-primary-200 pl-4">
                    <h3 className="text-lg font-bold text-primary-900 mb-2">
                      Day {day.day}: {day.title}
                    </h3>
                    <p className="text-gray-600">{day.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Booking Card */}
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-primary-900">£{tour.price}</div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-accent-500 fill-current" />
                  <span className="ml-1 font-medium">{tour.rating}</span>
                  <span className="text-sm text-gray-500 ml-1">({tour.reviews} reviews)</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="btn btn-primary w-full mb-4"
              >
                Book Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>

              {/* What's Included */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-primary-900 mb-3">What's Included</h3>
                <ul className="space-y-2">
                  {tour.includes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-accent-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What's Not Included */}
              <div>
                <h3 className="text-lg font-bold text-primary-900 mb-3">Not Included</h3>
                <ul className="space-y-2">
                  {tour.excludes.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-sm text-gray-600">• {item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourDetail;