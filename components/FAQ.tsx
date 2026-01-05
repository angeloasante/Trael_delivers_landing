'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'Is Trael Delivers available in my city?',
      answer: 'Trael Delivers is currently available in Accra and Kumasi, with plans to expand to Takoradi, Tamale, and Cape Coast in 2026. Enter your address on our coverage checker to confirm availability in your area.',
    },
    {
      question: 'What payment methods are supported?',
      answer: 'We support Mobile Money (MTN MoMo, Vodafone Cash, AirtelTigo Money), credit/debit cards (Visa, Mastercard), and cash on delivery for select orders.',
    },
    {
      question: 'How fast is delivery with Trael Delivers?',
      answer: 'Average delivery time is 22-30 minutes during off-peak hours. During busy periods (lunch 12-2pm, dinner 6-9pm), delivery may take 35-45 minutes. You can track your order in real-time!',
    },
    {
      question: 'How do I use promo codes?',
      answer: 'Enter your promo code at checkout in the "Apply Promo" field. Valid codes will automatically apply the discount. New users can use TRAEL2026 for free delivery on their first 3 orders!',
    },
    {
      question: 'Can I track my order in real time?',
      answer: 'Yes! Once your order is confirmed, you can track your delivery driver in real-time on the map. You\'ll receive notifications when your order is being prepared, picked up, and approaching your location.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
