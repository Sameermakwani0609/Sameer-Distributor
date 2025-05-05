import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Sameer Distributor</h3>
            <p className="text-gray-400 mb-4">Your trusted wholesale partner for quality confectionery and beverages.</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/" className="text-gray-400 hover:text-white transition">Home</a>
              <a href="/about" className="text-gray-400 hover:text-white transition">About</a>
              <a href="/brands" className="text-gray-400 hover:text-white transition">Brands</a>
              <a href="/products" className="text-gray-400 hover:text-white transition">Products</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Brands</h3>
            <div className="space-y-2">
              <a href="/brands#ravi-magic" className="text-gray-400 hover:text-white transition">Ravi Magic</a>
              <a href="/brands#britannia" className="text-gray-400 hover:text-white transition">Britannia</a>
              <a href="/brands#manbhari" className="text-gray-400 hover:text-white transition">Manbhari</a>
              <a href="/brands#balgopal" className="text-gray-400 hover:text-white transition">Balgopal</a>
              <a href="/brands#vittal" className="text-gray-400 hover:text-white transition">Vittal Mineral Water</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-indigo-500 mr-2"></i>
                <span className="text-gray-400">Sameer Distribuot,Ambedkar Chowk,Ner(p),Dist Yavatmal</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone text-indigo-500 mr-2"></i>
                <span className="text-gray-400">+91 8669197077</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-indigo-500 mr-2"></i>
                <span className="text-gray-400">sameerdistribuorner@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-gray-400">&copy; 2025 Sameer Distributor. All rights reserved.</p>
            <div className="md:text-right">
              <a href="/privacy" className="text-gray-400 hover:text-white transition mr-4">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 