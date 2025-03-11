import React from "react";
import Footer from "./Footer";
import { CheckCircle } from "lucide-react";

const companyInfo = `
Laundry work involves the process of cleaning, drying, folding, and sometimes ironing clothes, linens, and other fabrics to maintain hygiene and fabric quality. It is an essential service in both households and commercial settings such as hotels, hospitals, and laundromats. The process typically begins with sorting clothes based on fabric type, color, and level of dirtiness. Stubborn stains require pre-treatment with stain removers before washing. Depending on the fabric, clothes are either machine-washed or hand-washed using appropriate detergents and water temperatures. After washing, garments are dried using dryers or natural air drying, followed by ironing or steaming for a crisp finish. Some laundry services also offer dry cleaning for delicate fabrics that cannot withstand water-based cleaning. In professional laundry businesses, maintaining high efficiency, handling bulk orders, and ensuring customer satisfaction through timely service and quality care are crucial aspects. The introduction of modern technologies such as automated washing machines, eco-friendly detergents, and app-based laundry services has significantly improved efficiency and convenience in the laundry industry.
`;

const stats = [
  { value: "10K", label: "Satisfied Customers" },
  { value: "2500+", label: "Cities" },
  { value: "2+", label: "Stores" },
  { value: "20L", label: "Garments Washed" },
];


const leadership = [
  { name: "Parul Gohel", role: "Owner", image: "/images/alice.jpg" },
  { name: "Ramesh Gohel", role: "Managing Director", image: "/images/robert.jpg" },
  { name: "Manoj Gohel", role: "CEO", image: "/images/alice.jpg" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      {/* Company Overview Section */}
      <div className="max-w-5xl bg-white shadow-md rounded-xl p-10 mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Who We Are</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{companyInfo}</p>
      </div>

      {/* Statistics Section */}            
      <div className="max-w-6xl bg-white shadow-md rounded-xl p-10 mb-12 text-center">
        <h2 className="text-4xl font-semibold text-blue-700 mb-6">Trusted by Thousands</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => ( 
            <div key={index} className="flex flex-col items-center">
              <span className="text-5xl font-bold text-pink-500">{stat.value}</span>
              <p className="text-gray-700 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
            
      {/* Leadership Team Section */}
      <div className="max-w-6xl w-full px-6">
        <h2 className="text-4xl font-semibold text-blue-700 mb-8 text-center">Best Work & Leadership</h2>
        <div className="grid md:grid-cols-3 gap-10 justify-center">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-blue-500"
              />
              <h3 className="text-2xl font-bold text-gray-800">{leader.name}</h3>
              <p className="text-gray-600 text-sm">{leader.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* {google map Location} */}
      <p>Address: Sevham Laundry, Jetpur</p>
      <div className="mt-2 ">
        <iframe
          title="Sevham Laundry Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.6794400000003!2d70.621017!3d21.754487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQ1JzE2LjAiTiA3MMKwMzcnMTIuMSJF!5e0!3m2!1sen!2sin!4v1645456789123"
          width="100%"
          height="200"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
