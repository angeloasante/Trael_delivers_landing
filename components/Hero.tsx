import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
            <span className="mr-2">🏆</span>
            Number #1 Food Delivery App in Ghana
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Order your favorites food,{' '}
            <span className="text-green-500">faster</span> &{' '}
            <span className="text-green-500">for less</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover nearby restaurants, claim deals, and track couriers in real time with Trael Delivers.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link href="#" className="inline-block">
              <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </div>
            </Link>
            <Link href="#" className="inline-block">
              <div className="bg-black text-white px-6 py-3 rounded-xl flex items-center space-x-3 hover:bg-gray-800 transition-colors">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </div>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <span className="text-green-500 mr-1">★</span>
              <span className="font-semibold">4.8/5</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>500K+ downloads</div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>PCI DSS Certified</div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div>Halal partners</div>
          </div>
        </div>

        {/* Hero Image - App Mockups */}
        <div className="mt-16 relative">
          <div className="flex justify-center">
            <Image
              src="/hero.png"
              alt="Trael Food Delivery App - Order food from your favorite restaurants"
              width={900}
              height={600}
              className="w-full max-w-4xl h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
