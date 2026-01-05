import Link from 'next/link';

export default function Deals() {
  const deals = [
    {
      icon: '🍱',
      title: 'Lunch Saver',
      description: 'Up to 30% off at lunchtime.',
      bgGradient: 'from-green-50 to-emerald-50',
      iconBg: 'bg-green-100',
    },
    {
      icon: '🌙',
      title: 'Midnight Snack',
      description: 'Free delivery late at night.',
      bgGradient: 'from-purple-50 to-pink-50',
      iconBg: 'bg-purple-100',
    },
    {
      icon: '👥',
      title: 'Referral Bonus',
      description: 'Invite friends & earn coupons.',
      bgGradient: 'from-blue-50 to-cyan-50',
      iconBg: 'bg-blue-100',
    },
  ];

  return (
    <section id="deals" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Deals & Offers <span className="text-2xl">🎁</span>
          </h2>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${deal.bgGradient} rounded-3xl p-6 transition-transform hover:scale-105 cursor-pointer group`}
            >
              <div className="flex items-start justify-between">
                <div>
                  {/* Icon */}
                  <div className={`${deal.iconBg} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                    {deal.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-green-500 mb-2">
                    {deal.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm">
                    {deal.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md group-hover:bg-green-500 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link
            href="#"
            className="inline-flex items-center text-green-500 hover:text-green-600 font-semibold"
          >
            View all deals
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
