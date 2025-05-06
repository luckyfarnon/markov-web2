"use client"

import React, { useEffect } from 'react'
import Link from 'next/link'

export default function ServicesPageClient() {
  // Function to handle animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    // Get all elements with the animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Animation */}
      <div className="relative bg-gradient-to-r from-[#205A59]/90 to-[#8BA640]/90 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/services-bg.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float-slow absolute top-10 left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="animate-float absolute top-40 right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
          <div className="animate-float-reverse absolute bottom-10 left-1/3 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in-down">Our Services</h1>
            <p className="text-xl text-white/90 mb-8 animate-fade-in-up">Comprehensive digital solutions to transform your online presence and drive business growth</p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
              <Link href="#digital-marketing" className="bg-white/90 hover:bg-white text-[#205A59] font-semibold px-6 py-3 rounded-full transition-all duration-500 hover:shadow-lg hover:shadow-white/20 hover:-translate-y-1 transform">
                Digital Marketing
              </Link>
              <Link href="#seo" className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-semibold px-6 py-3 rounded-full transition-all duration-500 hover:border-white hover:scale-105 transform">
                SEO Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Digital Solutions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At MarkovWeb, we offer a wide range of services designed to boost your online presence,
            increase conversions, and drive sustainable business growth in the digital landscape.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#205A59] to-[#8BA640] mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Digital Marketing */}
          <div id="digital-marketing" className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-gradient-to-r from-purple-600/10 via-green-600/10 to-blue-600/10 p-6 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-purple-600/20 group-hover:via-green-600/20 group-hover:to-blue-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-100 via-green-100 to-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-purple-600 text-2xl group-hover:scale-110 transition-transform duration-500">◀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-500">Digital Marketing</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-purple-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/digital-marketing/Digital-Marketing-Strategy-Development" className="text-gray-700 hover:text-purple-600 transition-colors duration-300">
                      Digital Marketing Strategy Development
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/digital-marketing/Franchise-Digital-Marketing" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      Franchise Digital Marketing
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/digital-marketing/Enterprise-Digital-Marketing" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      Enterprise Digital Marketing
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/digital-marketing" className="font-medium inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    <span className="bg-gradient-to-r from-purple-600 via-green-600 to-blue-600 bg-clip-text text-transparent hover:from-purple-700 hover:via-green-700 hover:to-blue-700">
                      Explore Digital Marketing
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Pay Per Click (PPC) Marketing */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-100">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-amber-600/10 p-6 transition-all duration-500 group-hover:bg-amber-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-amber-600 text-2xl group-hover:scale-110 transition-transform duration-500">▶</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-500">PPC Marketing</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/ppc/search-engine-marketing" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Search Engine Marketing (SEM)
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/ppc/google-ads-management" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Google Ads Management
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/ppc/youtube-ads-management" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      YouTube Ads Management
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/ppc" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore PPC Marketing
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Link Building */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-200">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-blue-600/10 p-6 transition-all duration-500 group-hover:bg-blue-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-500">🔗</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-500">Link Building</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/link-building/Digital-PR-Outreach" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      Digital PR Outreach
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/link-building/HARO-link-building" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      HARO Link Building
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/link-building" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore Link Building
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Search Engine Optimization (SEO) */}
          <div id="seo" className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-300">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-green-600/10 p-6 transition-all duration-500 group-hover:bg-green-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-green-600 text-2xl group-hover:scale-110 transition-transform duration-500">🔍</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-500">SEO</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/search-engine-optimization(seo)/local-seo" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      Local SEO
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/search-engine-optimization(seo)/technical-seo" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      Technical SEO
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/search-engine-optimization(seo)/enterprise-seo" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      Enterprise SEO
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/search-engine-optimization(seo)" className="text-green-600 font-medium hover:text-green-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore SEO Services
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Web Design & Development */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-100">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-blue-600/10 p-6 transition-all duration-500 group-hover:bg-blue-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-500">🌐</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-500">Web Design</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/web-design-development/branding-services" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      Branding Services
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/Website-design/custom-website-design" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      Custom Website Design
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/web-design-development/wordpress-website-design" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      WordPress Website Design
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/web-design-development" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore Web Design
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* eCommerce Marketing */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-200">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-blue-600/10 p-6 transition-all duration-500 group-hover:bg-blue-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-500">🛒</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-500">eCommerce</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/ppc/ecommerce-seo" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      eCommerce SEO
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/ecommerce-marketing/ecommerce-ppc" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      eCommerce PPC
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/ecommerce-marketing/ecommerce-optimization" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      eCommerce Optimization
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/ecommerce-marketing" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore eCommerce Solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Marketing */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-300">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-green-600/10 p-6 transition-all duration-500 group-hover:bg-green-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-green-600 text-2xl group-hover:scale-110 transition-transform duration-500">⚿</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-500">Social Media</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/social-media-marketing/social-media-management" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      Social Media Management
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/social-media-marketing/social-media-brand-management" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      Social Media Brand Management
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/social-media-marketing/franchise-social-media" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      Franchise Social Media
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/social-media-marketing" className="text-green-600 font-medium hover:text-green-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore Social Media
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Media Production */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-400">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-amber-600/10 p-6 transition-all duration-500 group-hover:bg-amber-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-amber-600 text-2xl group-hover:scale-110 transition-transform duration-500">📱</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-500">Media Production</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/media-production/video-production" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Video Production
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/media-production/video-testimonial-services" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Video Testimonial Services
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/media-production/product-photography-services" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Product Photography Services
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/media-production" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore Media Production
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Online Marketplace Marketing */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-500">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-blue-600/10 p-6 transition-all duration-500 group-hover:bg-blue-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-blue-600 text-2xl group-hover:scale-110 transition-transform duration-500">🏪</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-500">Marketplace</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/online-marketplace-marketing/amazon-seo" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      Amazon SEO
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/online-marketplace-marketing/Amazon-Advertising-PPC" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      Amazon Advertising PPC
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-blue-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/online-marketplace-marketing/amazon-storefront-branding" className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
                      Amazon Storefront & Branding
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/online-marketplace-marketing" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore Marketplace Solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Advertising */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-600">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-amber-600/10 p-6 transition-all duration-500 group-hover:bg-amber-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-amber-600 text-2xl group-hover:scale-110 transition-transform duration-500">📣</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-500">Social Ads</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/social-media-advertising/facebook" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Facebook
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/social-media-advertising/linkedin" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      LinkedIn
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/social-media-advertising/twitter" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Twitter
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/social-media-advertising" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore Social Media Ads
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Content Marketing */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-700">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-amber-600/10 p-6 transition-all duration-500 group-hover:bg-amber-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-amber-600 text-2xl group-hover:scale-110 transition-transform duration-500">📝</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors duration-500">Content Marketing</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/content-writing/seo-content-writing" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      SEO Content Writing
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/content-writing/copywriting-services" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Copywriting Services
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-amber-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/content-writing/email-marketing-services" className="text-gray-700 hover:text-amber-600 transition-colors duration-300">
                      Email Marketing Services
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/content-marketing" className="text-amber-600 font-medium hover:text-amber-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore Content Marketing
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CRO Services */}
          <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-800">
            <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl group hover:-translate-y-2 transform">
              <div className="bg-green-600/10 p-6 transition-all duration-500 group-hover:bg-green-600/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500 group-hover:rotate-6">
                    <span className="text-green-600 text-2xl group-hover:scale-110 transition-transform duration-500">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-500">CRO Services</h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/cro-services/CRO-Audits" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      CRO Audits
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/cro-services/User-Experience-Testing" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      User Experience Testing
                    </Link>
                  </li>
                  <li className="flex items-start group/item">
                    <span className="text-green-600 mr-2 mt-1 transition-all duration-300 group-hover/item:translate-x-1 transform">•</span>
                    <Link href="/services/cro-services/User-Behavior-Analytics" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
                      User Behavior Analytics
                    </Link>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/services/cro-services" className="text-green-600 font-medium hover:text-green-700 inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2">
                    Explore CRO Services
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section with Animation */}
      <div className="bg-gradient-to-r from-[#205A59] to-[#8BA640] py-16 mt-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-float-slow absolute top-10 right-1/4 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
          <div className="animate-pulse-slow absolute bottom-10 left-1/4 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our services can help your business grow in the digital landscape.
            </p>
            <Link href="/contact" className="bg-white text-[#205A59] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform inline-block hover:scale-105">
              Get in Touch Today
            </Link>
          </div>
        </div>
      </div>
      
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes float-reverse {
          0% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
          100% { transform: translateY(0px); }
        }
        
        @keyframes pulse-slow {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
        
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          animation-delay: 0.3s;
          opacity: 0;
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
          animation-delay: 0.6s;
          opacity: 0;
        }
        
        .animate-on-scroll.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  )
}