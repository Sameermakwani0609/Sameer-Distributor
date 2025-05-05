import React from 'react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: 'box',
      title: 'Bulk Supply',
      description: 'We provide wholesale quantities at competitive prices to support your retail business.'
    },
    {
      icon: 'truck-fast',
      title: 'Quick Delivery',
      description: 'Our efficient logistics network ensures prompt delivery to your location.'
    },
    {
      icon: 'headset',
      title: 'Dedicated Support',
      description: 'Our customer service team is available to assist with any queries or concerns.'
    },
    {
      icon: 'certificate',
      title: 'Quality Guarantee',
      description: 'All products are quality-checked to ensure they meet the highest standards.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose Us</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">We pride ourselves on providing exceptional service and products to our retail partners.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`fas fa-${feature.icon} text-indigo-600 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 