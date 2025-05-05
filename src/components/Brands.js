import React from 'react';

const brands = [
  {
    name: 'Ravi Magic',
    description: 'Premium range of condiments and food products including sauces, pickles, vermicelli, schezwan chutney, and thecha.',
    tags: ['Sauces', 'Pickles', 'Vermicelli', 'Schezwan Chutney', 'Thecha']
  },
  {
    name: 'Britannia',
    description: 'Leading manufacturer of premium biscuits, cookies, and baked goods, known for quality and taste.',
    tags: ['Premium Biscuits', 'Cookies', 'Baked Goods', 'Snacks']
  },
  {
    name: 'Manbhari',
    description: 'Specialized in bakery products including toast, khari, and a variety of cookies and biscuits.',
    tags: ['Toast', 'Khari', 'Cookies', 'Bakery Products']
  },
  {
    name: 'Balgopal',
    description: 'Premium quality agarbatti (incense sticks) and related products for religious and aromatic purposes.',
    tags: ['Agarbatti', 'Incense Sticks', 'Religious Products']
  },
  {
    name: 'Vittal Mineral Water',
    description: 'Pure and refreshing mineral water, ensuring quality and safety in every bottle.',
    tags: ['Mineral Water', 'Bottled Water', 'Beverages']
  }
];

const Brands = () => {
  return (
    <section id="brands" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Official Brands</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are proud to be the official distributors for these premium brands, 
            bringing quality products to your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand) => (
            <div 
              key={brand.name}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover-card transform transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{brand.name}</h3>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <div className="flex flex-wrap gap-2">
                  {brand.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl shadow-lg overflow-hidden hover-card transform transition-all duration-300">
            <div className="p-6 text-white">
              <h3 className="text-2xl font-bold mb-3">Become a Partner</h3>
              <p className="mb-4">Interested in Retail Selling our products? Join our network of trusted partners.</p>
              <a 
                href="/contact" 
                className="inline-block px-6 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands; 