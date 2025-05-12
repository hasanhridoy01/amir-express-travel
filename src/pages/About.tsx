import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AmirExpress</title>
        <meta
          name="description"
          content="Learn about AmirExpress's history, values, and commitment to providing exceptional coach hire services and tour experiences."
        />
      </Helmet>

      <section className="section bg-gray-50">
        <div className="mx-auto">
          <h1 className="mb-6 text-4xl font-bold text-gray-900">
            About AmirExpress
          </h1>
          <p className="mb-8 text-lg text-gray-700">
            Welcome to AmirExpress, your trusted partner in coach hire and tour
            services across the UK and Europe. With a strong passion for travel
            and a commitment to comfort and safety, we make every journey a
            memorable experience.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Our Story
              </h2>
              <p className="mb-4 text-gray-700">
                AmirExpress was founded with the goal of offering high-quality,
                reliable, and affordable coach travel. Over the years, we’ve
                grown from a small fleet into a respected name in the travel
                industry, serving thousands of happy travelers.
              </p>
              <p className="text-gray-700">
                Our dedicated team, experienced drivers, and modern vehicles
                ensure that every trip—whether a local day tour or a European
                adventure—is handled with utmost care and professionalism.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Our Values
              </h2>
              <ul className="pl-6 space-y-2 text-gray-700 list-disc">
                <li>
                  <strong>Customer Focus:</strong> We prioritize the needs and
                  satisfaction of our clients.
                </li>
                <li>
                  <strong>Safety First:</strong> Safety is at the heart of all
                  our operations and services.
                </li>
                <li>
                  <strong>Reliability:</strong> You can count on us to deliver
                  punctual and dependable services.
                </li>
                <li>
                  <strong>Comfort:</strong> We offer well-maintained coaches
                  designed for comfort and convenience.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Join Us On Your Next Journey
            </h2>
            <p className="mb-4 text-gray-700">
              Whether you’re planning a private tour, a corporate event, or a
              school trip, AmirExpress is here to provide exceptional travel
              experiences every step of the way.
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 mt-4 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;