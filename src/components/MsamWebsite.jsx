import React, { useState } from 'react';

const MsamWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const portfolioItems = [
    {
      title: 'Classic Car',
      image: '/api/placeholder/600/400',
      category: 'Photography'
    },
    {
      title: 'Sport Gear',
      image: '/api/placeholder/600/400',
      category: 'Product'
    },
    {
      title: 'Luxury Watch',
      image: '/api/placeholder/600/400',
      category: 'Product'
    },
    {
      title: 'Modern Interior',
      image: '/api/placeholder/600/400',
      category: 'Architecture'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-light tracking-wider">
              MSAM.media
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">HOME</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">PROJEKTE</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">SERVICES</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">SOFTWARE</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-black/50 to-black/80"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <p className="text-lg font-light mb-4">Multimedia Design Studio</p>
          <h1 className="text-6xl font-light mb-12 tracking-wider">MSAM.media</h1>
          <button className="px-8 py-2 border border-white/30 hover:bg-white/10 transition-colors tracking-wider">
            KONTAKT
          </button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group relative aspect-[4/3] overflow-hidden bg-gray-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-light">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="font-light">© 2025 MSAM.media. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MsamWebsite;