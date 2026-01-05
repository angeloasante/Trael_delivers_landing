export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: '🔍',
      title: 'Search',
      description: 'Find nearby restaurants & your go-to dishes.',
      bgColor: 'bg-blue-50',
      numberColor: 'text-blue-500',
    },
    {
      number: '2',
      icon: '🛒',
      title: 'Order',
      description: 'Apply deals & pay securely with Trael Delivers secure payment.',
      bgColor: 'bg-green-50',
      numberColor: 'text-green-500',
    },
    {
      number: '3',
      icon: '😊',
      title: 'Enjoy',
      description: 'Delivery arrives as estimated. No need wait longer.',
      bgColor: 'bg-green-50',
      numberColor: 'text-green-500',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How it works <span className="text-2xl">🔥</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} rounded-3xl p-8 relative overflow-hidden transition-transform hover:scale-105`}
            >
              {/* Step Number */}
              <div className={`absolute top-6 right-6 text-6xl font-bold ${step.numberColor} opacity-20`}>
                {step.number}
              </div>

              {/* Icon */}
              <div className="text-5xl mb-6">{step.icon}</div>

              {/* Content */}
              <h3 className={`text-xl font-bold ${step.numberColor} mb-3`}>
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
