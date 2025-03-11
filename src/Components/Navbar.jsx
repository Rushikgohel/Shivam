import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Shivam Lundry</h1>
        
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-300">Home</a>
          <a href="/AboutAs" className="text-white hover:text-gray-300">About</a>
          <a href="/Services" className="text-white hover:text-gray-300">Services</a>
          <a href="/ContectAs" className="text-white hover:text-gray-300">Contact</a>
        </div>
        
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }}
          className="md:hidden bg-blue-700 text-white flex flex-col space-y-4 p-4"
        >
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
