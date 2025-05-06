"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import ContactButton from "./ui/Contactbutton"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Control body scroll when dropdown is open
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflowX = 'hidden'
    }
    
    return () => {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflowX = 'hidden'
    }
  }, [isDropdownOpen])

  const servicesMegaMenu = [
    {
      title: "Digital Marketing",
      icon: <span className="text-blue-600 text-xl">◀</span>,
      items: ["Digital Marketing Strategy Development", "Franchise Digital Marketing", "Enterprise Digital Marketing"]
    },
    {
      title: "Pay Per Click (PPC) Marketing",
      icon: <span className="text-amber-600 text-xl">▶</span>,
      items: ["Search Engine Marketing (SEM)", "Google Ads Management", "YouTube Ads Management", "Programmatic Advertising", "Lead Generation Services", "Franchise PPC", "Enterprise PPC"]
    },
    {
      title: "Link Building",
      icon: <span className="text-blue-600 text-xl">🔗</span>,
      items: ["Digital PR Outreach", "HARO Link Building"]
    },
    {
      title: "Search Engine Optimization (SEO)",
      icon: <span className="text-green-600 text-xl">🔍</span>,
      items: ["Local SEO", "Technical SEO", "Franchise SEO", "Enterprise SEO", "Generative Engine Optimization", "SEO Audits", "Franchise SEO Audit", "Enterprise SEO Audit"]
    },
    {
      title: "Web Design & Development",
      icon: <span className="text-blue-600 text-xl">🌐</span>,
      items: ["Branding Services", "Custom Website Design", "WordPress Website Design", "Website Hosting", "ADA Compliance Services"]
    },
    {
      title: "Ecommerce Marketing",
      icon: <span className="text-blue-600 text-xl">🛒</span>,
      items: ["Ecommerce SEO", "eCommerce PPC", "Ecommerce Optimization", "Shopify SEO", "Shopify Web Design", "eCommerce Web Design"]
    },
    {
      title: "Social Media Marketing",
      icon: <span className="text-green-600 text-xl">⚿</span>,
      items: ["Social Media Management", "Social Media Brand Management", "Franchise Social Media", "Enterprise Social Media"]
    },
    {
      title: "Media Production",
      icon: <span className="text-amber-600 text-xl">📱</span>,
      items: ["Video Production", "Video Testimonial Services", "Product Photography Services", "Drone Video and Photography Services"]
    },
    {
      title: "Online Marketplace Marketing",
      icon: <span className="text-blue-600 text-xl">🏪</span>,
      items: [
        "Amazon SEO", 
        "Amazon Advertising PPC", 
        "Amazon Storefront & Branding", 
        "Amazon Seller Consulting", 
        "Amazon Posts Management", 
        "Amazon DSP Advertising Management", 
        "Walmart Marketplace", 
        "Target Plus Marketplace",
        "eBay Marketplace"
      ]
    },
    {
      title: "Social Media Advertising",
      icon: <span className="text-amber-600 text-xl">📣</span>,
      items: ["Facebook", "LinkedIn", "Twitter", "Instagram"]
    },
    {
      title: "Content Marketing",
      icon: <span className="text-amber-600 text-xl">📝</span>,
      items: ["SEO Content Writing", "Copywriting Services", "Translation Services", "Email Marketing Services", "Outbound Marketing"]
    },
    {
      title: "CRO Services",
      icon: <span className="text-green-600 text-xl">📊</span>,
      items: ["CRO Audits", "User Experience Testing", "User Behavior Analytics"]
    },
    {
      title: "Ecommerce SEO",
      href: "/services/ppc/ecommerce-seo",
      description: "Optimize your online store for search engines"
    }
  ]

  const industriesMenu = [
    {
      name: "Healthcare",
      path: "/industries/healthcare",
      icon: "🏥",
      description: "Digital solutions for hospitals, clinics, and healthcare providers"
    },
    {
      name: "Finance",
      path: "/industries/finance",
      icon: "💰",
      description: "Marketing strategies for banks, insurance, and fintech companies"
    },
    {
      name: "Education",
      path: "/industries/education",
      icon: "🎓",
      description: "Digital presence for schools, universities, and e-learning platforms"
    },
    {
      name: "E-Commerce",
      path: "/industries/e-commerce",
      icon: "🛒",
      description: "Growth solutions for online stores and marketplace businesses"
    }
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-background/95 backdrop-blur-md shadow-md" : "py-4 bg-background"}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/Markov.png" alt="Markov Logo" width={100} height={100} className="drop-shadow-md group-hover:rotate-12 transition-transform duration-500" />
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-l from-[#1C2B2B] to-[#2BC4C1] text-transparent bg-clip-text">Markov</span>
            <span className="text-xs text-muted-foreground -mt-1">International LLC</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex flex-1 justify-center">
          <ul className="flex items-center space-x-8">
            {/* Services Mega Menu */}
            <li className="group relative" 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}>
              <button className="flex items-center font-medium text-gray-800 hover:text-[#205A59] transition-colors py-3 px-4 rounded-md hover:bg-[#f0f9f9] text-lg">
                Services <ChevronDown className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Mega menu panel - with fixed closing tags */}
              <div className="absolute left-0 top-full mt-3 w-screen max-w-7xl bg-gradient-to-b from-gray-50 to-white p-10 shadow-2xl rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top-left scale-95 group-hover:scale-100">
                <div className="container mx-auto max-w-[95%]">
                  <div className="flex flex-col space-y-6">
                    <div className="text-center mb-2">
                      <h2 className="text-xl font-bold bg-gradient-to-r from-[#205A59] to-[#8BA640] bg-clip-text text-transparent">Our Services</h2>
                      <div className="w-24 h-1 bg-gradient-to-r from-[#205A59] to-[#8BA640] mx-auto mt-2 rounded-full"></div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-x-10 gap-y-8">
                      {/* Digital Marketing */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
                            <span className="text-blue-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">◀</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Digital Marketing</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/digital-marketing/Digital-Marketing-Strategy-Development" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Digital Marketing Strategy
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/digital-marketing/Franchise-Digital-Marketing" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Franchise Digital Marketing
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/digital-marketing/Enterprise-Digital-Marketing" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Enterprise Digital Marketing
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Pay Per Click */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-amber-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center shadow-sm">
                            <span className="text-amber-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">▶</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Pay Per Click (PPC)</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/ppc/search-engine-marketing" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Search Engine Marketing (SEM)
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/ppc/google-ads-management" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Google Ads Management
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/ppc/youtube-ads-management" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              YouTube Ads Management
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/ppc/programmatic-advertising" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Programmatic Advertising
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/ppc/lead-generation" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Lead Generation Services
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Link Building */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
                            <span className="text-blue-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">🔗</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Link Building</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/link-building/Digital-PR-Outreach" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Digital PR Outreach
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/link-building/HARO-link-building" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              HARO Link Building
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Search Engine Optimization */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-green-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shadow-sm">
                            <span className="text-green-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">🔍</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">SEO</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/SEO/local-seo" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              Local SEO
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/SEO/technical-seo" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              Technical SEO
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/SEO/enterprise-seo" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              Enterprise SEO
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Web Design & Development */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
                            <span className="text-blue-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">🌐</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Web Design</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/Website-design/custom-website-design" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Custom Website Design
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/Website-design/wordpress-website-design" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              WordPress Website Design
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/Website-design/ADA-Compliance-services" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              ADA Compliance Services
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* eCommerce Marketing */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
                            <span className="text-blue-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">🛒</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">eCommerce Marketing</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/ppc/ecommerce-seo" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              eCommerce SEO
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/ppc/ecommerce-ppc" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              eCommerce PPC
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/ppc/shopify-seo" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Shopify SEO
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Social Media Marketing */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-green-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shadow-sm">
                            <span className="text-green-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">⚿</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Social Media Marketing</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/social-media-marketing/social-media-management" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              Social Media Management
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/social-media-marketing/social-media-brand-management" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              Social Media Brand Management
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/social-media-marketing/franchise-social-media" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              Franchise Social Media
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/Website-design/ADA-Compliance-services" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              ADA Compliance Services
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Media Production */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-amber-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center shadow-sm">
                            <span className="text-amber-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">📱</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Media Production</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/Media-Production/Video-Production" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Video Production
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/Media-Production/Video-Testimonial-Services" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Video Testimonial Services
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/Media-Production/Product-Photography-Services" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Product Photography Services
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/Media-Production/video-production-page" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Video Production Page
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Online Marketplace Marketing */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-blue-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shadow-sm">
                            <span className="text-blue-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">🏪</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Marketplace Marketing</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/online-marketplace-marketing/amazon-seo" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Amazon SEO
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/online-marketplace-marketing/Amazon-Advertising-PPC" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Amazon Advertising PPC
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/online-marketplace-marketing/Walmart-marketplace" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-blue-500"></span>
                              Walmart Marketplace
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Social Media Advertising */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-amber-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center shadow-sm">
                            <span className="text-amber-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">📣</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Social Media Advertising</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/social-media-advertising/facebook" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Facebook
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/social-media-advertising/linkedin" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              LinkedIn
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/social-media-advertising/instagram" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Instagram
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Content Marketing */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-amber-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center shadow-sm">
                            <span className="text-amber-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">📝</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">Content Marketing</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/content-writing/seo-content-writing" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              SEO Content Writing
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/content-writing/copywriting-services" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Copywriting Services
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/content-writing/email-marketing-services" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-amber-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-amber-500"></span>
                              Email Marketing Services
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* CRO Services */}
                      <div className="group/category relative transform transition-all duration-300 hover:-translate-y-1">
                        <div className="absolute inset-0 bg-green-50 rounded-xl opacity-0 group-hover/category:opacity-100 transition-opacity duration-300 -z-10"></div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center shadow-sm">
                            <span className="text-green-600 text-2xl group-hover/category:scale-110 transition-transform duration-300">📊</span>
                          </div>
                          <h3 className="font-bold text-gray-800 group-hover/category:text-[#205A59] transition-colors text-lg">CRO Services</h3>
                        </div>
                        <ul className="space-y-3 text-base pl-14">
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/cro-services/CRO-Audits" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              CRO Audits
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/cro-services/User-Experience-Testing" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              User Experience Testing
                            </Link>
                          </li>
                          <li className="transition-all duration-200 hover:translate-x-1">
                            <Link href="/services/cro-services/User-Behavior-Analytics" className="text-gray-700 hover:text-[#205A59] hover:font-medium flex items-center">
                              <span className="w-1.5 h-1.5 bg-green-300 rounded-full mr-2 transition-all duration-300 group-hover/category:bg-green-500"></span>
                              User Behavior Analytics
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-center pt-6 border-t border-gray-100">
                      <Link href="/services" className="px-6 py-3 bg-gradient-to-r from-[#205A59] to-[#8BA640] text-white text-base font-medium rounded-full hover:shadow-lg transition-shadow duration-300 flex items-center gap-2">
                        View All Services
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {/* Industries Dropdown */}
            <li className="group relative">
              <button className="flex items-center font-medium text-gray-800 hover:text-[#205A59] transition-colors py-3 px-4 rounded-md hover:bg-[#f0f9f9] text-lg">
                Industries <ChevronDown className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-96 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <h3 className="px-4 py-2 text-sm font-semibold text-[#205A59] bg-gray-50 uppercase tracking-wider">
                    Specialized Industry Solutions
                  </h3>
                  {industriesMenu.map((industry, index) => (
                    <Link 
                      key={index} 
                      href={industry.path} 
                      className="block transition-all hover:bg-gray-50"
                    >
                      <div className="flex items-start gap-3 p-4 group/item">
                        <div className="w-10 h-10 bg-[#EAF6F6] rounded-full flex items-center justify-center flex-shrink-0 group-hover/item:bg-[#D1EBEB] transition-colors">
                          <span className="text-xl">{industry.icon}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800 group-hover/item:text-[#205A59] transition-colors block">
                            {industry.name}
                            <span className="inline-block ml-2 opacity-0 transform translate-x-0 group-hover/item:opacity-100 group-hover/item:translate-x-1 transition-all text-[#205A59]">→</span>
                          </span>
                          <span className="text-sm text-gray-500">{industry.description}</span>
                        </div>
                      </div>
                      {index < industriesMenu.length - 1 && (
                        <div className="mx-4 border-t border-gray-100"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Other Nav Links */}
            <li><Link href="/case-studies" className="font-medium text-gray-800 hover:text-[#205A59] transition-colors py-3 px-4 rounded-md hover:bg-[#f0f9f9] text-lg">Case Studies</Link></li>
            <li><Link href="/careers" className="font-medium text-gray-800 hover:text-[#205A59] transition-colors py-3 px-4 rounded-md hover:bg-[#f0f9f9] text-lg">Careers</Link></li>
            <li className="group relative">
              <button className="flex items-center font-medium text-gray-800 hover:text-[#205A59] transition-colors py-3 px-4 rounded-md hover:bg-[#f0f9f9] text-lg">
                Company <ChevronDown className="w-5 h-5 ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/about" className="block px-5 py-3 hover:bg-gray-100 text-base">About Us</Link>
                <Link href="/team" className="block px-5 py-3 hover:bg-gray-100 text-base">Team</Link>
                <Link href="/blog" className="block px-5 py-3 hover:bg-gray-100 text-base">Blog</Link>
                <Link href="/contact" className="block px-5 py-3 hover:bg-gray-100 text-base">Contact</Link>
              </div>
            </li>
          </ul>
        </nav>

        {/* Mobile & Contact */}
        <div className="flex items-center gap-4 w-62">
          <div className="hidden lg:block"><ContactButton /></div>
          <button className="lg:hidden text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white p-4 overflow-y-auto z-40">
          <nav className="space-y-4">
            {/* Mobile Services */}
            <div>
              <button
                className="w-full flex justify-between items-center font-medium text-gray-800"
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
              >
                Services <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "services" && (
                <div className="mt-2 pl-4 space-y-4">
                  <h3 className="text-sm font-semibold text-[#205A59] uppercase tracking-wider">
                    Our Comprehensive Services
                  </h3>
                  {servicesMegaMenu.map((col, i) => (
                    <div key={i} className="mb-4 pb-4 border-b border-gray-100">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#EAF6F6] rounded-full flex items-center justify-center">
                          {col.icon}
                        </div>
                        <p className="font-semibold text-gray-800">{col.title}</p>
                      </div>
                      <ul className="pl-11 space-y-1 text-gray-700">
                        {Array.isArray(col.items) && col.items.map((item, j) => (
                          <li key={j} className="relative">
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#EAF6F6]"></div>
                            <Link href="#" className="text-sm py-1 block pl-4">{item}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Industries */}
            <div>
              <button
                className="w-full flex justify-between items-center font-medium text-gray-800"
                onClick={() => setActiveDropdown(activeDropdown === "industries" ? null : "industries")}
              >
                Industries <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === "industries" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "industries" && (
                <div className="mt-2 pl-4 space-y-3 py-2">
                  <h3 className="text-sm font-semibold text-[#205A59] uppercase tracking-wider">
                    Specialized Industry Solutions
                  </h3>
                  {industriesMenu.map((industry, index) => (
                    <div key={index} className="py-2">
                      <Link 
                        href={industry.path}
                        className="flex items-start gap-3 text-gray-700"
                      >
                        <div className="w-8 h-8 bg-[#EAF6F6] rounded-full flex items-center justify-center flex-shrink-0">
                          <span>{industry.icon}</span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-800 block">{industry.name}</span>
                          <span className="text-xs text-gray-500">{industry.description}</span>
                        </div>
                      </Link>
                      {index < industriesMenu.length - 1 && (
                        <div className="mt-3 border-t border-gray-100"></div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Other mobile links */}
            <Link href="/case-studies" className="block font-medium text-gray-800">Case Studies</Link>
            <Link href="/careers" className="block font-medium text-gray-800">Careers</Link>
            <Link href="/about" className="block font-medium text-gray-800">About Us</Link>
            <Link href="/contact" className="block font-medium text-gray-800">Contact</Link>

            <div className="mt-6">
              <ContactButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}