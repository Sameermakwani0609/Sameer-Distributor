import React from 'react';

const Products = () => {
  const products = [
    {
      name: 'Cookies & Biscuits',
      description: 'Premium quality cookies and biscuits from Britannia and other top brands.',
      brands: 'Britannia, Ravi Magic'
    },
    {
      name: 'Traditional Sweets',
      description: 'Authentic traditional sweets made with finest ingredients.',
      brands: 'Manbhari, Balgopal'
    },
    {
      name: 'Chocolates',
      description: 'Delightful chocolate treats in various flavors and packaging options.',
      brands: 'Ravi Magic, Britannia'
    },
    {
      name: 'Mineral Water',
      description: 'Pure and refreshing mineral water in various packaging sizes.',
      brands: 'Vittal Mineral Water'
    },
    {
      name: 'Snacks',
      description: 'Savory snacks perfect for anytime munching.',
      brands: 'Ravi Magic, Manbhari'
    },
    {
      name: 'Cakes & Pastries',
      description: 'Delicious baked goods with long shelf life.',
      brands: 'Britannia, Balgopal'
    },
    {
      name: 'Candies',
      description: 'Various candies in different flavors and packaging options.',
      brands: 'Ravi Magic, Manbhari'
    },
    {
      name: 'Gift Packs',
      description: 'Premium confectionery gift packs for special occasions.',
      brands: 'All Brands'
    }
  ];

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We distribute a wide range of confectionery products and beverages to meet the diverse needs of retailers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-item bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] overflow-hidden transition duration-300 transform"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">Available from:</span>
                  <span className="font-medium text-indigo-600">{product.brands}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            Request Full Product Catalog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
