'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Deals', href: '#deals' },
    { name: 'Coverage', href: '#coverage' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'For Merchants', href: '#partner' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-2 text-sm">
        <p>🎉 Free delivery on your first 3 orders - Use code: TRAEL2026</p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/icon.png" alt="Trael Delivers" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold text-gray-900">Trael Delivers<span className="text-green-500">.</span></span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-green-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="#download"
                className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
              >
                Get the App
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-600 hover:text-green-500 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  href="#download"
                  className="bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get the App
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
