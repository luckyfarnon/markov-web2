"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart, CheckCircle, Zap, ShoppingCart, Tag, Globe, FileText, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EcommerceSEOPage() {
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-b from-[#f3f4f6] to-[#fff]">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#4285F4]">
                            eCommerce SEO Services
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Drive organic traffic, increase rankings, and boost sales with expert eCommerce SEO strategies tailored for your online store.
                        </p>
                        <Button
                            className="bg-[#4285F4] hover:bg-[#2b5cd9] text-white px-8 py-4 rounded-lg font-semibold shadow-lg"
                            onClick={() => router.push("/contact?service=ecommerce-seo")}
                        >
                            Get a Free eCommerce SEO Audit
                        </Button>
                    </div>
                </div>
            </section>

            {/* eCommerce SEO Intro Section */}
            <section className="py-16 bg-white border-b border-[#4285F4]/10">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        {/* SVG Illustration */}
                        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                            <svg width="320" height="260" viewBox="0 0 320 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="40" y="60" width="180" height="140" rx="16" fill="#F3F4F6" />
                                <rect x="60" y="80" width="140" height="100" rx="10" fill="#fff" stroke="#4285F4" strokeWidth="2" />
                                <rect x="80" y="110" width="100" height="16" rx="8" fill="#4285F4" fillOpacity="0.15" />
                                <rect x="80" y="140" width="60" height="12" rx="6" fill="#4285F4" fillOpacity="0.25" />
                                <rect x="80" y="160" width="80" height="12" rx="6" fill="#4285F4" fillOpacity="0.25" />
                                <ellipse cx="130" cy="210" rx="30" ry="8" fill="#E6F0FF" />
                                <rect x="120" y="60" width="40" height="20" rx="8" fill="#4285F4" />
                                <rect x="130" y="65" width="20" height="10" rx="5" fill="#fff" />
                                <circle cx="200" cy="100" r="18" fill="#4285F4" fillOpacity="0.15" />
                                <rect x="190" y="90" width="20" height="20" rx="6" fill="#4285F4" fillOpacity="0.25" />
                                <path d="M60 80 Q50 60 80 60" stroke="#4285F4" strokeWidth="2" fill="none" />
                                <path d="M200 100 Q220 80 220 120" stroke="#4285F4" strokeWidth="2" fill="none" />
                                <circle cx="90" cy="200" r="10" fill="#4285F4" fillOpacity="0.15" />
                                <rect x="100" y="180" width="40" height="10" rx="5" fill="#4285F4" fillOpacity="0.15" />
                                <rect x="160" y="180" width="30" height="10" rx="5" fill="#4285F4" fillOpacity="0.15" />
                                <rect x="70" y="120" width="20" height="8" rx="4" fill="#4285F4" fillOpacity="0.25" />
                                <rect x="170" y="120" width="20" height="8" rx="4" fill="#4285F4" fillOpacity="0.25" />
                                <rect x="120" y="90" width="40" height="8" rx="4" fill="#4285F4" fillOpacity="0.15" />
                                <rect x="120" y="100" width="40" height="8" rx="4" fill="#4285F4" fillOpacity="0.10" />
                                <rect x="120" y="120" width="40" height="8" rx="4" fill="#4285F4" fillOpacity="0.10" />
                                <rect x="120" y="130" width="40" height="8" rx="4" fill="#4285F4" fillOpacity="0.10" />
                                <rect x="120" y="140" width="40" height="8" rx="4" fill="#4285F4" fillOpacity="0.10" />
                                <rect x="120" y="150" width="40" height="8" rx="4" fill="#4285F4" fillOpacity="0.10" />
                                <rect x="120" y="160" width="40" height="8" rx="4" fill="#4285F4" fillOpacity="0.10" />
                                <rect x="120" y="170" width="40" height="8" rx="4" fill="#4285F4" fillOpacity="0.10" />
                            </svg>
                        </div>
                        {/* Content */}
                        <div className="md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left text-[#222]">Grow Your Online Store Revenue with <span className="text-[#4285F4]">eCommerce SEO</span></h2>
                            <div className="text-gray-700 space-y-4 text-base md:text-lg">
                                <p>In today's digital marketplace, visibility is everything. With more than 24 million eCommerce stores operating globally, standing out from the competition requires a strategic approach to search engine optimization.</p>
                                <p>eCommerce businesses face unique SEO challenges: product optimization, category structuring, technical site performance, and maintaining rankings during frequent inventory changes. Our specialized eCommerce SEO services address these challenges head-on.</p>
                                <p>The data speaks for itself: 44% of online shoppers begin their product search on search engines, with 37.5% of all eCommerce traffic coming from organic search. Businesses that rank on the first page of search results capture 95% of web traffic for their target keywords.</p>
                                <p>A robust eCommerce SEO strategy isn't optional—it's essential for sustainable growth and profitability in today's competitive online marketplace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What is eCommerce SEO? */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#4285F4]">What is eCommerce SEO?</h2>
                    <p className="text-gray-700 mb-4">
                        eCommerce SEO is the process of optimizing your online store to rank higher in search engine results and attract more organic traffic. Our team specializes in technical SEO, product optimization, user experience enhancements, and content strategy to drive more qualified traffic and revenue to your eCommerce business.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 mb-4">
                        <li>Boost your store's organic visibility across search engines</li>
                        <li>Attract high-intent shoppers actively searching for your products</li>
                        <li>Build a sustainable channel of traffic that doesn't rely on paid advertising</li>
                    </ul>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4285F4]">Why eCommerce SEO Matters</h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <ShoppingCart className="w-10 h-10 text-[#4285F4] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Higher Conversion Rates</h3>
                            <p className="text-gray-700 text-sm">Organic traffic converts 2-3x better than paid traffic with higher average order values.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <BarChart className="w-10 h-10 text-[#4285F4] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Sustainable Revenue Growth</h3>
                            <p className="text-gray-700 text-sm">Build long-term traffic and sales channels with compounding returns over time.</p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow text-center">
                            <Zap className="w-10 h-10 text-[#4285F4] mb-4 mx-auto" />
                            <h3 className="font-semibold mb-2">Better User Experience</h3>
                            <p className="text-gray-700 text-sm">Fast, optimized stores not only rank better but also convert visitors into loyal customers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4285F4]">Our eCommerce SEO Services</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Tag className="w-10 h-10 text-[#4285F4] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Product Optimization</h3>
                            <p className="text-gray-700 mb-2">Enhance product titles, descriptions, images, and schema markup to improve rankings.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Globe className="w-10 h-10 text-[#4285F4] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Technical SEO</h3>
                            <p className="text-gray-700 mb-2">Fix crawl errors, improve site speed, implement structured data, and enhance mobile experience.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <FileText className="w-10 h-10 text-[#4285F4] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Content Strategy</h3>
                            <p className="text-gray-700 mb-2">Create high-converting category pages, buying guides, and blog content that drives traffic.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <BarChart className="w-10 h-10 text-[#4285F4] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Site Architecture</h3>
                            <p className="text-gray-700 mb-2">Optimize your eCommerce site structure for efficient crawling and improved user experience.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <CheckCircle className="w-10 h-10 text-[#4285F4] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Link Building</h3>
                            <p className="text-gray-700 mb-2">Earn high-quality backlinks through digital PR, product outreach, and content promotion.</p>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow-lg flex flex-col items-center text-center">
                            <Mail className="w-10 h-10 text-[#4285F4] mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Competitive Analysis</h3>
                            <p className="text-gray-700 mb-2">Identify gaps and opportunities by analyzing your top-performing competitors.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Process Stepper */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4285F4]">Our eCommerce SEO Process</h2>
                    <div className="max-w-4xl mx-auto">
                        {[
                            { title: "Comprehensive Audit", desc: "We analyze your store's technical foundation, content quality, and competitor landscape." },
                            { title: "Custom Strategy Development", desc: "We create a tailored SEO roadmap based on your industry, competition, and business goals." },
                            { title: "Implementation & Optimization", desc: "We execute technical fixes, content enhancements, and strategic improvements." },
                            { title: "Reporting & Refinement", desc: "We track performance, identify new opportunities, and continuously adapt your strategy." }
                        ].map((step, idx) => (
                            <div key={step.title} className="flex items-start mb-8">
                                <div className="flex flex-col items-center mr-6">
                                    <div className="w-12 h-12 rounded-full bg-[#4285F4] text-white flex items-center justify-center font-bold text-lg">
                                        {idx + 1}
                                    </div>
                                    {idx < 3 && <div className="w-1 h-16 bg-[#4285F4]" />}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#4285F4] mb-2">{step.title}</h3>
                                    <p className="text-gray-700">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4285F4]">eCommerce SEO Success Stories</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#4285F4] mb-2">Health Supplements Store</h3>
                            <p className="text-gray-700 text-sm mb-2">Increased organic traffic by <span className="font-bold text-[#4285F4]">375%</span> and revenue by <span className="font-bold text-[#4285F4]">245%</span> in 8 months.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Product page optimization</li>
                                <li>Site structure improvements</li>
                            </ul>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow">
                            <h3 className="font-semibold text-[#4285F4] mb-2">Electronics Retailer</h3>
                            <p className="text-gray-700 text-sm mb-2">Achieved first page rankings for 200+ competitive keywords and 189% increase in conversions.</p>
                            <ul className="list-disc pl-6 text-gray-700 text-sm">
                                <li>Technical SEO overhaul</li>
                                <li>Content strategy & implementation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="py-16 bg-[#f3f4f6]">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4285F4]">eCommerce SEO FAQs</h2>
                    <div className="max-w-2xl mx-auto space-y-6">
                        <div>
                            <h3 className="font-semibold text-[#4285F4] mb-2">How long does eCommerce SEO take to show results?</h3>
                            <p className="text-gray-700 text-sm">Initial improvements can be seen within 1-2 months, with significant results typically appearing within 3-6 months depending on your industry competitiveness and starting point.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#4285F4] mb-2">Do you work with all eCommerce platforms?</h3>
                            <p className="text-gray-700 text-sm">Yes, we have expertise with Shopify, WooCommerce, Magento, BigCommerce, and custom-built eCommerce stores.</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[#4285F4] mb-2">How is eCommerce SEO different from regular SEO?</h3>
                            <p className="text-gray-700 text-sm">eCommerce SEO requires specialized focus on product page optimization, inventory management, shopping feeds, product schema, and managing dynamic content at scale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Overview Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#4285F4]">eCommerce SEO Pricing</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#4285F4] mb-2">Starter</h3>
                            <p className="text-3xl font-bold text-[#4285F4] mb-2">$799</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to 100 products</li>
                                <li>Technical & On-Page SEO</li>
                                <li>Monthly Reporting</li>
                            </ul>
                            <Button
                                className="bg-[#4285F4] text-white w-full"
                                onClick={() => router.push('/contact?service=ecommerce-seo-starter')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow text-center border-2 border-[#4285F4]">
                            <h3 className="font-bold text-[#4285F4] mb-2">Growth</h3>
                            <p className="text-3xl font-bold text-[#4285F4] mb-2">$1,499</p>
                            <p className="text-gray-700 mb-4">/month</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Up to 500 products</li>
                                <li>Advanced Technical SEO</li>
                                <li>Content Creation</li>
                                <li>Link Building</li>
                            </ul>
                            <Button
                                className="bg-[#4285F4] text-white w-full"
                                onClick={() => router.push('/contact?service=ecommerce-seo-growth')}
                            >
                                Get Started
                            </Button>
                        </div>
                        <div className="bg-[#f3f4f6] p-8 rounded-xl shadow text-center">
                            <h3 className="font-bold text-[#4285F4] mb-2">Enterprise</h3>
                            <p className="text-3xl font-bold text-[#4285F4] mb-2">Custom</p>
                            <p className="text-gray-700 mb-4">Contact Us</p>
                            <ul className="text-gray-700 text-sm mb-4 space-y-2">
                                <li>Unlimited products</li>
                                <li>Custom Strategy</li>
                                <li>Dedicated SEO Team</li>
                                <li>Advanced Analytics</li>
                            </ul>
                            <Button
                                className="bg-[#4285F4] text-white w-full"
                                onClick={() => router.push('/contact?service=ecommerce-seo-enterprise')}
                            >
                                Contact Us
                            </Button>
                        </div>
                    </div>
                    <p className="text-center text-gray-700 mt-8 max-w-2xl mx-auto">
                        Not sure which plan is right for you? <span className="text-[#4285F4] underline cursor-pointer" onClick={() => router.push('/contact?service=ecommerce-seo')}>Contact us</span> for a personalized consultation and custom quote.
                    </p>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-[#4285F4]">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Ready to Grow Your eCommerce Store?
                        </h2>
                        <p className="text-xl text-white/90 mb-8">
                            Let our eCommerce SEO experts help you increase traffic, conversions, and revenue.
                        </p>
                        <Button
                            className="bg-white text-[#4285F4] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold"
                            onClick={() => router.push("/contact?service=ecommerce-seo")}
                        >
                            Get Your Free SEO Audit
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
} 