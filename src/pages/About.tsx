import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | AmirExpress</title>
        <meta name="description" content="Learn about AmirExpress's history, values, and commitment to providing exceptional coach hire services and tour experiences." />
      </Helmet>
      
      <div className="section">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">About AmirExpress</h1>
        <div className="prose max-w-none">
          <p className="mb-6 text-lg text-gray-700">
            Welcome to AmirExpress, your trusted partner in coach hire and tour services across the UK and Europe.
          </p>
          {/* Additional content will be added as needed */}
        </div>
      </div>
    </>
  );
};

export default About;