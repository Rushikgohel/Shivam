import React from 'react'

const Footer = () => {
  return (
    <div>
     {/* Footer */}
     <footer className="bg-blue-600 text-white text-center py-6  ">
     <p>&copy; {new Date().getFullYear()} Laundry Service. All rights reserved.</p>
 </footer>
 </div>
  )
}

export default Footer;