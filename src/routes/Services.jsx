import React, { useState } from 'react';
import Texturebg from '../assets/texture_bg2.jpg';

/* -------------------------------------------------------
   SERVICE CARD
------------------------------------------------------- */
const ServiceCard = ({ icon, title, description, features, isPopular }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-500 ${
        isHovered ? 'transform -translate-y-2 shadow-2xl' : 'shadow-lg'
      } ${isPopular ? 'border-2 border-red-600' : 'border border-gray-200'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg z-10">
          POPULAR
        </div>
      )}

      <div className="p-8">
        <div
          className={`inline-flex p-4 rounded-xl mb-6 transition-colors duration-300 ${
            isHovered ? 'bg-red-600' : 'bg-gray-100'
          }`}
        >
          <div
            className={`text-5xl transition-colors duration-300 ${
              isHovered ? 'text-white' : 'text-red-600'
            }`}
          >
            {icon}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <svg
                className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <button
          className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
            isHovered ? 'bg-red-600 text-white shadow-lg' : 'bg-gray-900 text-white'
          }`}
        >
          Get Started
          <svg
            className={`ml-2 w-5 h-5 transition-transform duration-300 ${
              isHovered ? 'translate-x-1' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

/* -------------------------------------------------------
   PROCESS STEP
------------------------------------------------------- */
const ProcessStep = ({ number, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-bold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

/* -------------------------------------------------------
   MAIN PAGE
------------------------------------------------------- */
const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Modern, scalable, and responsive websites tailored to your business needs.",
      isPopular: false,
      features: [
         "Wordpress Development",
        "Custom Code Websites",
        "Responsive UI/UX",
     "Landing Page Development",
      "Website Speed Optimization",
      "Maintenance & Support"
      ],
    },
    {
      icon: "🎨",
      title: "Graphic Design",
      description:
        "Brand-focused graphic design that enhances your visual identity.",
      isPopular: true,
      features: [
        "Social Media Graphics",
        "Logo & Branding Design",
        "Business Cards & Brand Kits",
        "Website & App UI Layouts",
        "Photo Editing & Retouching",
        "Website Banner Designs"
      ],
    },
    {
      icon: "🎬",
      title: "Video Editing",
      description:
        "High-quality video editing that engages your audience and elevates your brand.",
      isPopular: false,
      features: [
        "Cinematic Editing",
        "Motion Graphics & Text Animations",
        "Short & Long Form Content",
        "Subtitles & Captions (Auto or Custom)",
        "Montage & Compilation Editing",
        "Product Showcase Videos"
      ],
    },
  ];

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "We analyze your goals and create a strategic project plan.",
    },
    {
      number: "2",
      title: "Design & Development",
      description:
        "Our team designs and builds solutions aligned with your vision.",
    },
    {
      number: "3",
      title: "Testing & Launch",
      description: "We refine, test, and prepare your project for deployment.",
    },
    {
      number: "4",
      title: "Support & Growth",
      description:
        "Continuous improvements and support to keep you ahead.",
    },
  ];

  return (
    <div className="mt-25">
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <div
          style={{ backgroundImage: `url(${Texturebg})` }}
          className="relative bg-cover bg-center text-white"
        >
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
            <span className="bg-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
              PROFESSIONAL SERVICES
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business <br />
              <span className="text-red-600">With Expert Solutions</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              From concept to launch, we deliver exceptional digital solutions
              built with creativity and precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-xl">
                Schedule Consultation
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all">
                View Our Work
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white py-12 border-b">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">20+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">3+ Years</div>
                <div className="text-gray-600">Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              High-quality digital solutions built to grow your brand
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="bg-gray-50 py-20 pb-60">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven workflow that ensures world-class results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, index) => (
                <ProcessStep key={index} {...step} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
