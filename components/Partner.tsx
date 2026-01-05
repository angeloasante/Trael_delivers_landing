import Link from 'next/link';
import Image from 'next/image';

export default function Partner() {
  return (
    <section id="partner" className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Partner with Trael Delivers
            </h2>
            <p className="text-teal-100 text-lg mb-8 leading-relaxed">
              Reach more customers, access real-time analytics, and run
              exclusive promos as a Trael Delivers partner. Join 500+ restaurants
              already growing with us.
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-teal-100">Commission rates starting at 15%</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-teal-100">Real-time dashboard & analytics</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-teal-100">Dedicated partner support team</span>
              </li>
            </ul>

            {/* CTA Button */}
            <Link
              href="#"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
            >
              Apply as a Merchant
            </Link>
          </div>

          {/* Right - Phone Mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/hero.png"
              alt="Trael Delivers Merchant Dashboard - Manage orders and track revenue"
              width={500}
              height={400}
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
