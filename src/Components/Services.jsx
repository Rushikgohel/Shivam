import React from "react";
import Footer from "./Footer";

const Services = () => {
  const serviceList = [
    { title: "Dry Cleaning", desc: "Gentle cleaning for delicate fabrics.", img: "src/assets/images/download.jpeg" },
    { title: "Wash & Fold", desc: "Regular laundry with expert folding.", img: "src/assets/images/download3.jpeg" },
    { title: "Ironing", desc: "Perfectly pressed clothes for a crisp look.", img: "src/assets/images/portable-steam-ironing-machine-500x500.webp" },
    { title: "Stain Removal", desc: "Advanced techniques to remove tough stains.", img: "src/assets/images/download1.jpeg" },
    { title: "Express Service", desc: "Same-day laundry for urgent needs.", img: "src/assets/images/download2.jpeg" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Our Services</h1>
      <p className="text-gray-700 mb-8 text-center max-w-md">
        We offer high-quality laundry services tailored to your needs.
      </p>
      <div className="grid gap-8 w-full max-w-4xl">
        {serviceList.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg ${
              index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="md:w-1/2 p-4">
              <h3 className="text-xl font-semibold text-blue-600">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.desc}</p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
