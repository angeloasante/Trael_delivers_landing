'use client';

import { useState } from 'react';

export default function Coverage() {
  const [address, setAddress] = useState('');

  const handleCheck = () => {
    // In production, this would check against actual coverage data
    alert('Coverage check coming soon! We currently serve Accra and Kumasi.');
  };

  return (
    <section id="coverage" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-2xl mb-6">
              <span className="text-3xl">📍</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coverage & ETA
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Now in Accra, Kumasi, and expanding soon to Takoradi and Tamale.
              <br />
              Average delivery time 22-30 minutes off-peak.
            </p>

            {/* Address Check */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">📍</span>
                <input
                  type="text"
                  placeholder="Enter your address to check"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
              </div>
              <button
                onClick={handleCheck}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Check
              </button>
            </div>
          </div>

          {/* Right - Map Illustration */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-4 overflow-hidden">
              {/* Map Background */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl h-80 relative">
                {/* Map Grid Lines */}
                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full" style={{
                    backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Location Pins */}
                <div className="absolute top-1/4 left-1/3">
                  <div className="bg-white shadow-lg rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Elephanto
                  </div>
                </div>

                <div className="absolute top-1/3 right-1/4">
                  <div className="bg-white shadow-lg rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                    Equinox
                  </div>
                </div>

                <div className="absolute bottom-1/3 left-1/4">
                  <div className="bg-white shadow-lg rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                    Aura Salon
                  </div>
                </div>

                <div className="absolute bottom-1/4 right-1/3">
                  <div className="bg-white shadow-lg rounded-xl px-3 py-2 text-sm font-medium flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                    BOA
                  </div>
                </div>

                {/* Delivery Info Card */}
                <div className="absolute bottom-4 right-4 bg-white shadow-lg rounded-xl p-3">
                  <div className="text-xs text-gray-500">ETA</div>
                  <div className="text-lg font-bold text-orange-500">22-30 min</div>
                </div>

                {/* Driver Marker */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg animate-bounce">
                    🛵
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
