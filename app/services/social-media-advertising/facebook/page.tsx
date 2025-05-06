"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Facebook, Users, BarChart2, Target, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function FacebookAdvertisingPage() {
    const router = useRouter();
    
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="absolute top-0 right-0 w-1/3 h-96 bg-[#1877F2]/5 rounded-bl-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[#1877F2]/5 rounded-tr-full -z-10"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <div className="mb-6 p-3 bg-[#1877F2]/10 rounded-full">
                        <Facebook className="w-12 h-12 text-[#1877F2]" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#1877F2] text-center mb-3 tracking-tight">
                        Facebook Advertising
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-2xl">
                        Reach your ideal customers with targeted Facebook ad campaigns that drive engagement and conversions
                    </p>
                    <div className="w-20 h-1 bg-[#1877F2] mb-10"></div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Facebook Advertising?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Leverage the world's largest social media platform to connect with your audience where they already spend their time
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-10 h-10 text-[#1877F2]" />,
                                title: "Massive Audience Reach",
                                description: "Connect with over 2.9 billion monthly active users across demographics, interests, and locations."
                            },
                            {
                                icon: <Target className="w-10 h-10 text-[#1877F2]" />,
                                title: "Precise Targeting",
                                description: "Target users based on demographics, interests, behaviors, and custom audiences for maximum relevance."
                            },
                            {
                                icon: <BarChart2 className="w-10 h-10 text-[#1877F2]" />,
                                title: "Advanced Analytics",
                                description: "Gain detailed insights into campaign performance with real-time data and comprehensive reports."
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-[#1877F2]/10 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#1877F2]">{benefit.title}</h3>
                                    <p className="text-gray-700">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach Section */}
            <section className="py-16 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Facebook Advertising Approach</h2>
                            <p className="text-gray-700 mb-8">
                                We build strategic Facebook ad campaigns that target the right audience with the right message at the right time. Our data-driven methodology ensures your advertising budget is used efficiently to maximize ROI.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        number: "01",
                                        title: "Audience Research & Targeting",
                                        description: "We identify your ideal customer segments and develop detailed targeting strategies."
                                    },
                                    {
                                        number: "02",
                                        title: "Compelling Creative Development",
                                        description: "We create eye-catching visuals and persuasive copy that resonates with your audience."
                                    },
                                    {
                                        number: "03",
                                        title: "Continuous Optimization",
                                        description: "We constantly monitor and refine campaigns to improve performance over time."
                                    },
                                    {
                                        number: "04",
                                        title: "Comprehensive Reporting",
                                        description: "We provide clear insights into campaign performance and ROI metrics."
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mr-4 bg-[#1877F2] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#1877F2] mb-1">{step.title}</h3>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 bg-[#1877F2]/10 rounded-full mr-4">
                                        <TrendingUp className="w-6 h-6 text-[#1877F2]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1877F2]">Campaign Performance</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { metric: "Average CTR", value: "3.2%", benchmark: "Industry avg: 0.90%" },
                                        { metric: "Cost Per Click", value: "$0.48", benchmark: "Industry avg: $1.72" },
                                        { metric: "Conversion Rate", value: "9.5%", benchmark: "Industry avg: 5.3%" },
                                        { metric: "ROAS", value: "4.2x", benchmark: "Industry avg: 2.0x" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                            <div>
                                                <div className="font-medium text-gray-800">{stat.metric}</div>
                                                <div className="text-xs text-gray-500">{stat.benchmark}</div>
                                            </div>
                                            <div className="text-xl font-bold text-[#1877F2]">{stat.value}</div>
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

            {/* Ad Types Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Facebook Ad Formats We Leverage</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We create high-performing campaigns using the most effective ad formats for your specific goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Image Ads",
                                description: "Eye-catching visuals with compelling copy to drive engagement and conversions."
                            },
                            {
                                title: "Video Ads",
                                description: "Engaging video content that tells your brand story and captures attention."
                            },
                            {
                                title: "Carousel Ads",
                                description: "Multiple images or videos in a single ad to showcase different products or features."
                            },
                            {
                                title: "Collection Ads",
                                description: "Mobile shopping experiences featuring products from your catalog."
                            },
                            {
                                title: "Instant Experience Ads",
                                description: "Full-screen mobile experiences that load instantly when users tap your ad."
                            },
                            {
                                title: "Lead Generation Ads",
                                description: "Simplified forms to capture prospect information directly within Facebook."
                            }
                        ].map((format, index) => (
                            <div key={index} className="bg-[#1877F2]/5 p-6 rounded-lg hover:bg-[#1877F2]/10 transition-colors">
                                <h3 className="text-lg font-bold text-[#1877F2] mb-2">{format.title}</h3>
                                <p className="text-gray-700">{format.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#1877F2] to-[#0A66C2]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Grow Your Business with Facebook Ads?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let our experts develop a customized Facebook advertising strategy that aligns with your business goals and budget.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?type=facebook-advertising')}
                            className="bg-white text-[#1877F2] hover:bg-gray-100 transition-all font-bold text-base px-8 py-3 rounded-lg shadow"
                        >
                            Get Started
                        </Button>
                        <Button 
                            onClick={() => router.push('/services/social-media-advertising')}
                            className="bg-transparent border border-white text-white hover:bg-white/10 transition-all font-bold text-base px-8 py-3 rounded-lg shadow"
                        >
                            Explore All Social Advertising
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    );
} 