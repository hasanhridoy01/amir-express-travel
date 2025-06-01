import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Clock, MapPin, Star, ChevronRight, Check, ArrowLeft } from 'lucide-react';
import { tours } from '../data/tours';

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find(t => t.id === Number(id));

  if (!tour) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary-600">Tour Not Found</h1>
          <p className="mb-6 text-gray-600">The tour you're looking for doesn't exist or has been removed.</p>
          <Link to="/tours" className="btn btn-primary">
            <ArrowLeft className="w-5 h-5 mr-2" />
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
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container-custom">
            <div className="flex items-center mb-2 text-white/90">
              <MapPin className="w-5 h-5 mr-1" />
              <span>{tour.location}, {tour.country}</span>
              <span className="mx-2">•</span>
              <Clock className="w-5 h-5 mr-1" />
              <span>{tour.duration}</span>
            </div>
            <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">
              {tour.title}
            </h1>
            <p className="max-w-3xl text-xl text-white/90">
              {tour.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Overview */}
            <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-primary-900">Overview</h2>
              <p className="mb-6 text-gray-600">{tour.description}</p>
              
              <h3 className="mb-3 text-xl font-bold text-primary-900">Tour Highlights</h3>
              <ul className="grid gap-3 mb-6">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="flex-shrink-0 w-5 h-5 mt-1 mr-2 text-accent-600" />
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Itinerary */}
            <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-2xl font-bold text-primary-900">Itinerary</h2>
              <div className="space-y-6">
                {tour.itinerary.map((day) => (
                  <div key={day.day} className="pl-4 border-l-2 border-primary-200">
                    <h3 className="mb-2 text-lg font-bold text-primary-900">
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
            <div className="sticky p-6 bg-white rounded-lg shadow-md top-24">
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold text-primary-900">£{tour.price}</div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-current text-accent-500" />
                  <span className="ml-1 font-medium">{tour.rating}</span>
                  <span className="ml-1 text-sm text-gray-500">({tour.reviews} reviews)</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full mb-4 btn btn-primary"
              >
                Book Now
                <ChevronRight className="w-5 h-5 ml-2" />
              </Link>

              {/* What's Included */}
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold text-primary-900">What's Included</h3>
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
                <h3 className="mb-3 text-lg font-bold text-primary-900">Not Included</h3>
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