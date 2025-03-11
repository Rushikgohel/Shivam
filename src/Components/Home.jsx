import React from "react";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
// import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const images = [
    {
      url: "src/assets/images/portable-steam-ironing-machine-500x500.webp",
      title: "Premium Laundry Services",
      subtitle: "Expert care for your finest garments"
    },
    {
      url: "src/assets/images/download1.jpeg",
      title: "Professional Dry Cleaning",
      subtitle: "State-of-the-art cleaning technology"
    },
    {
      url: "src/assets/images/download2.jpeg",
      title: "Same Day Service",
      subtitle: "Fast turnaround when you need it most"
    },
    {
      url: "src/assets/images/download3.jpeg",
      title: "Eco-Friendly Solutions",
      subtitle: "Sustainable cleaning for a better tomorrow"
    },
    {
      url: "src/assets/images/download.jpeg",
      title: "Free Pickup & Delivery",
      subtitle: "Convenience at your doorstep"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const services = [
    {
      title: "Dry Cleaning",
      desc: "Gentle cleaning for delicate fabrics. Professional care for your finest garments, including suits, dresses, and formal wear.",
      icon: "/api/placeholder/64/64",
      features: ["Eco-friendly solvents", "Stain removal", "Fabric protection"]
    },
    {
      title: "Wash & Fold",
      desc: "Regular laundry with expert folding. We handle your everyday laundry needs with care and attention to detail.",
      icon: "/api/placeholder/64/64",
      features: ["Same-day service", "Custom folding", "Sorting by color"]
    },
    {
      title: "Ironing",
      desc: "Perfectly pressed clothes for a crisp look. Professional pressing service to keep your garments looking sharp.",
      icon: "/api/placeholder/64/64",
      features: ["Steam pressing", "Starching available", "Detailed attention"]
    }
  ];

  const steps = [
    {
      title: "Schedule Pickup",
      description: "Book your laundry pickup in just a few clicks through our website or mobile app. Choose your preferred time slot and we'll be there!",
      details: [
        "24/7 online booking available",
        "Flexible time slots",
        "Same-day service available",
        "Real-time notifications"
      ],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "We Collect",
      description: "Our professional team arrives at your doorstep to collect your laundry. We handle your clothes with care from the very first moment.",
      details: [
        "Trained pickup staff",
        "Protective laundry bags provided",
        "Digital inventory system",
        "GPS tracking available"
      ],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "We Clean",
      description: "Using state-of-the-art equipment and eco-friendly detergents, we give your clothes the premium care they deserve.",
      details: [
        "Professional grade equipment",
        "Eco-friendly products",
        "Stain treatment specialists",
        "Quality control checks"
      ],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: "We Deliver",
      description: "Your freshly cleaned clothes are carefully packaged and delivered back to you at your preferred time and location.",
      details: [
        "Free delivery service",
        "Time slot selection",
        "Real-time tracking",
        "Contactless delivery option"
      ],
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      )
    }
  ];

  const pricingPlans = [
    {
      plan: "Basic",
      price: "$10/kg",
      image: "/api/placeholder/80/80",
      features: [
        "Standard cleaning",
        "48-hour turnaround",
        "Free pickup",
        "Basic stain removal"
      ]
    },
    {
      plan: "Standard",
      price: "$15/kg",
      image: "/api/placeholder/80/80",
      popular: true,
      features: [
        "Premium cleaning",
        "24-hour turnaround",
        "Free pickup & delivery",
        "Advanced stain treatment"
      ]
    },
    {
      plan: "Premium",
      price: "$20/kg",
      image: "/api/placeholder/80/80",
      features: [
        "Luxury cleaning",
        "Same-day service",
        "Priority delivery",
        "Expert stain removal"
      ]
    }
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      comment: "Exceptional service! My clothes come back perfectly clean every time.",
      image: "src/assets/images/images.jpeg"
    },
    {
      name: "David Chen",
      location: "San Francisco, USA",
      rating: 4.5,
      comment: "Very professional and reliable. Great attention to detail.",
      image: "src/assets/images/images1.jpeg"
    },
    {
      name: "Emma Thompson",
      location: "London, UK",
      rating: 5,
      comment: "The premium service is worth every penny. Outstanding quality!",
      image: "src/assets/images/images2.jpeg"
    }
  ];

  const renderStars = (rating) => {
    try {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;

      for (let i = 0; i < fullStars; i++) {
        stars.push(
          <Star
            key={`star-${i}`}
            size={20}
            className="text-yellow-400 fill-yellow-400"
          />
        );
      }

      if (hasHalfStar) {
        stars.push(
          <StarHalf
            key="half-star"
            size={20}
            className="text-yellow-400 fill-yellow-400"
          />
        );
      }

      return stars;
    } catch (error) {
      console.error('Error rendering stars:', error);
      return null;
    }
  };


  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <div className="relative h-screen overflow-hidden">
          {/* Background Images */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}

          {/* Sidebar Toggle Button */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="absolute top-4 right-4 z-50 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-blue-900/95 transform transition-transform duration-300 ease-in-out z-40 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
              }`}
          >
            <div className="p-6">
              <h3 className="text-white text-xl font-semibold mb-6">Navigation</h3>
              <ul className="space-y-4">
                {images.map((image, index) => (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setCurrentImageIndex(index);
                        setIsSidebarOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-300 ${currentImageIndex === index
                        ? 'bg-blue-700 text-white'
                        : 'text-white/70 hover:bg-blue-800 hover:text-white'
                        }`}
                    >
                      {image.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6 z-10">
            <h1 className="text-5xl font-bold mb-4 transition-opacity duration-500">
              {images[currentImageIndex].title}
            </h1>
            <p className="text-xl mb-8 transition-opacity duration-500">
              {images[currentImageIndex].subtitle}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Book Now
            </button>

            {/* Image Navigation Dots */}
            <div className="absolute bottom-8 flex space-x-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentImageIndex === index
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/70'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto p-8">
          {/* Header Section */}
          <div className="mb-4">
            <div className="inline-block bg-gray-100 px-4 py-2 rounded-md">
              <span className="text-gray-700">OPERATING ACROSS JETPUR</span>
            </div>
          </div>

         

        {/* Services */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-8"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-gray-600">
                    {service.desc}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
              Experience the convenience of our premium laundry service in four simple steps.
              We've designed our process to be as effortless as possible for you.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative group bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-full h-0.5 bg-blue-200 transform translate-x-1/2">
                      <div className="absolute right-0 w-3 h-3 bg-blue-400 rounded-full transform translate-x-1/2 -translate-y-1/2" />
                    </div>
                  )}

                  {/* Step Number */}
                  <div className="absolute -top-4 left-6 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold group-hover:bg-blue-600 transition-colors">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="text-blue-500 mb-4 group-hover:text-blue-600 transition-colors">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {step.description}
                  </p>

                  {/* Details */}
                  <ul className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-500">
                        <svg
                          className="w-4 h-4 mr-2 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Pricing Plans */}
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Pricing Plans
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                Choose the perfect plan for your laundry needs. All plans include free pickup
                and our satisfaction guarantee.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {pricingPlans.map((pricing, index) => (
                  <div
                    key={index}
                    className={`relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${pricing.popular ? "border-2 border-blue-500" : ""
                      }`}
                  >
                    {pricing.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    )}

                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-100 p-4">
                      <img
                        src={pricing.image}
                        alt={pricing.plan || "Pricing Plan"}
                        className="w-full h-full rounded-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/80/80";
                        }}
                      />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                      {pricing.plan}
                    </h3>
                    <p className="text-3xl font-bold text-blue-600 mb-6 text-center">
                      {pricing.price}
                    </p>

                    <ul className="space-y-4 mb-8">
                      {pricing.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <Check className="w-5 h-5 mr-3 text-blue-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-3 px-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors duration-300">
                      Choose {pricing.plan}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Reviews */}
            <div>
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
                Customer Reviews
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                See what our satisfied customers have to say about our laundry services.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="w-12 h-12 rounded-full object-cover mr-4"
                          onError={(e) => {
                            e.target.src = "/api/placeholder/64/64";
                          }}
                        />
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.location}</p>
                      </div>
                    </div>

                    <div className="flex items-center mb-3 space-x-1">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-sm text-gray-500">
                        ({review.rating.toFixed(1)})
                      </span>
                    </div>

                    <p className="text-gray-600 italic">"{review.comment}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      </div>
    </>
  );
};

export default Home;
