'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "I love how transparent the prices are. No hidden fees, and the promos help me save a lot every month.",
      name: 'Kwame Asante',
      role: 'Software Engineer',
      avatar: '/avatars/avatar1.png',
    },
    {
      quote: "The delivery is always on time! I can track my food in real-time and the drivers are very professional.",
      name: 'Ama Serwaa',
      role: 'Business Owner',
      avatar: '/avatars/avatar2.png',
    },
    {
      quote: "Best food delivery app in Ghana! The variety of restaurants and the quality of service is unmatched.",
      name: 'Kofi Mensah',
      role: 'University Student',
      avatar: '/avatars/avatar3.png',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-2xl mb-4">
            <span className="text-2xl">💬</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What customers say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 relative">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={128}
                  height={128}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
                />
              </div>

              {/* Quote */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-green-500 text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-gray-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between mt-8 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:right-0 md:mt-0 md:px-4 md:-mx-16">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-md"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
