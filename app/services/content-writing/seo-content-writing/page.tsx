"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Search, BarChart2, Award, Target, BookOpen, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SEOContentWritingPage() {
    const router = useRouter();
    
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="absolute top-0 right-0 w-1/3 h-96 bg-[#28a745]/5 rounded-bl-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[#28a745]/5 rounded-tr-full -z-10"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <div className="mb-6 p-3 bg-[#28a745]/10 rounded-full">
                        <FileText className="w-12 h-12 text-[#28a745]" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#28a745] text-center mb-3 tracking-tight">
                        SEO Content Writing
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-2xl">
                        Crafting SEO-optimized content that ranks in search engines and engages your target audience
                    </p>
                    <div className="w-20 h-1 bg-[#28a745] mb-10"></div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why SEO Content Writing?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Professionally written content that's strategically optimized for search engines while delivering value to your audience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Search className="w-10 h-10 text-[#28a745]" />,
                                title: "Higher Search Rankings",
                                description: "Content strategically optimized for keywords that your target audience is actively searching for."
                            },
                            {
                                icon: <Target className="w-10 h-10 text-[#28a745]" />,
                                title: "Increased Organic Traffic",
                                description: "Quality content that attracts visitors and reduces your dependency on paid advertising."
                            },
                            {
                                icon: <Award className="w-10 h-10 text-[#28a745]" />,
                                title: "Authority Building",
                                description: "Establish your brand as a trusted authority in your industry through valuable, informative content."
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-[#28a745]/10 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#28a745]">{benefit.title}</h3>
                                    <p className="text-gray-700">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section className="py-16 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our SEO Content Writing Process</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            A systematic approach to creating content that ranks well and resonates with your audience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                number: "01",
                                title: "Keyword Research",
                                description: "We identify high-value keywords with optimal search volume and competition levels."
                            },
                            {
                                number: "02",
                                title: "Content Strategy",
                                description: "We develop a comprehensive content plan aligned with your business goals."
                            },
                            {
                                number: "03",
                                title: "Content Creation",
                                description: "Our expert writers craft engaging, informative content optimized for SEO."
                            },
                            {
                                number: "04",
                                title: "Performance Tracking",
                                description: "We analyze metrics and refine content based on real-world performance data."
                            }
                        ].map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 flex items-center justify-center w-12 h-12 bg-[#28a745] rounded-full text-white font-bold text-xl">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#28a745]">{step.title}</h3>
                                    <p className="text-gray-700">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Types Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">SEO Content We Create</h2>
                            <p className="text-gray-700 mb-8">
                                Our team creates a wide variety of SEO-optimized content to help you achieve your marketing goals and reach your target audience effectively.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Blog Posts & Articles",
                                        description: "Informative, engaging content that establishes expertise and drives organic traffic."
                                    },
                                    {
                                        title: "Landing Pages",
                                        description: "Conversion-focused pages designed to rank for commercial keywords and drive action."
                                    },
                                    {
                                        title: "Product Descriptions",
                                        description: "Compelling, SEO-friendly descriptions that highlight benefits and features."
                                    },
                                    {
                                        title: "Pillar Content & Topic Clusters",
                                        description: "Comprehensive content structures that demonstrate topical authority to search engines."
                                    },
                                    {
                                        title: "Local SEO Content",
                                        description: "Geo-targeted content that helps you attract customers in specific locations."
                                    }
                                ].map((content, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mr-4 text-[#28a745]">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#28a745] mb-1">{content.title}</h3>
                                            <p className="text-gray-700">{content.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 bg-[#28a745]/10 rounded-full mr-4">
                                        <BarChart2 className="w-6 h-6 text-[#28a745]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#28a745]">SEO Content Performance</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { metric: "Organic Traffic Increase", value: "135%", benchmark: "Average after 6 months" },
                                        { metric: "Keyword Rankings", value: "Top 10", benchmark: "For targeted keywords" },
                                        { metric: "Conversion Rate", value: "4.2%", benchmark: "From organic visitors" },
                                        { metric: "Bounce Rate Reduction", value: "38%", benchmark: "Due to quality content" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                            <div>
                                                <div className="font-medium text-gray-800">{stat.metric}</div>
                                                <div className="text-xs text-gray-500">{stat.benchmark}</div>
                                            </div>
                                            <div className="text-xl font-bold text-[#28a745]">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 text-center">
                                    <p className="text-sm text-gray-500 italic">Based on average client performance data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#28a745] to-[#20c997]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Boost Your Search Rankings?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let our expert content writers create SEO-optimized content that drives traffic, engages readers, and converts visitors into customers.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?type=seo-content')}
                            className="bg-white text-[#28a745] hover:bg-gray-100 transition-all font-bold text-base px-8 py-3 rounded-lg shadow"
                        >
                            Get Started
                        </Button>
                        <Button 
                            onClick={() => router.push('/services/content-writing')}
                            className="bg-transparent border border-white text-white hover:bg-white/10 transition-all font-bold text-base px-8 py-3 rounded-lg shadow"
                        >
                            Explore All Content Services
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
} 