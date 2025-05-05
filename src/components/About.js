import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">We are a leading wholesale distributor specializing in confectionery and beverage products. With years of experience in the industry, we provide retailers with high-quality products from top brands.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-handshake text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Reliable Partnerships</h3>
            <p className="text-gray-600">We maintain strong relationships with top brands to ensure consistent supply and quality products.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-truck text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Efficient Distribution</h3>
            <p className="text-gray-600">Our efficient logistics network ensures timely delivery of products to retailers across the region.</p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-star text-indigo-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Quality Assurance</h3>
            <p className="text-gray-600">We maintain strict quality control standards for all products in our inventory.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 