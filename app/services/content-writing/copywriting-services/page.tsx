"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { PenTool, MessageCircle, Target, Star, Lightbulb, BarChart2, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function CopywritingServicesPage() {
    const router = useRouter();
    
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="absolute top-0 right-0 w-1/3 h-96 bg-[#ff9f1c]/5 rounded-bl-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[#ff9f1c]/5 rounded-tr-full -z-10"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <div className="mb-6 p-3 bg-[#ff9f1c]/10 rounded-full">
                        <PenTool className="w-12 h-12 text-[#ff9f1c]" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#ff9f1c] text-center mb-3 tracking-tight">
                        Copywriting Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-2xl">
                        Persuasive words that turn prospects into customers and drive your business growth
                    </p>
                    <div className="w-20 h-1 bg-[#ff9f1c] mb-10"></div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Professional Copywriting?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Compelling copy that connects with your audience, communicates your value, and converts prospects into paying customers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <MessageCircle className="w-10 h-10 text-[#ff9f1c]" />,
                                title: "Clear Communication",
                                description: "Messaging that articulates your value proposition and resonates with your target audience."
                            },
                            {
                                icon: <Target className="w-10 h-10 text-[#ff9f1c]" />,
                                title: "Higher Conversion Rates",
                                description: "Persuasive copy that turns website visitors and leads into paying customers."
                            },
                            {
                                icon: <Star className="w-10 h-10 text-[#ff9f1c]" />,
                                title: "Brand Consistency",
                                description: "Unified messaging across all channels that strengthens your brand identity and recognition."
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-[#ff9f1c]/10 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#ff9f1c]">{benefit.title}</h3>
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
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Copywriting Approach</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Strategic copywriting that combines psychology, research, and creativity to drive results
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                number: "01",
                                title: "Research & Discovery",
                                description: "We immerse ourselves in your brand, audience, and competitors to understand key differentiators."
                            },
                            {
                                number: "02",
                                title: "Strategy Development",
                                description: "We create a messaging framework that aligns with your business goals and audience needs."
                            },
                            {
                                number: "03",
                                title: "Creative Execution",
                                description: "Our skilled copywriters craft compelling copy that engages and persuades your target audience."
                            },
                            {
                                number: "04",
                                title: "Refinement & Optimization",
                                description: "We test, measure, and refine copy based on performance data to maximize results."
                            }
                        ].map((step, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 flex items-center justify-center w-12 h-12 bg-[#ff9f1c] rounded-full text-white font-bold text-xl">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#ff9f1c]">{step.title}</h3>
                                    <p className="text-gray-700">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Copywriting Services We Offer</h2>
                            <p className="text-gray-700 mb-8">
                                From website copy to email campaigns, our versatile copywriters create persuasive content for any marketing channel or need.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: "Website Copywriting",
                                        description: "Compelling pages that engage visitors and drive conversions, from homepages to product pages."
                                    },
                                    {
                                        title: "Ad Copy & Sales Pages",
                                        description: "High-converting copy for PPC campaigns, sales letters, and landing pages that generate leads and sales."
                                    },
                                    {
                                        title: "Email Marketing Copy",
                                        description: "Strategic email sequences that nurture leads, build relationships, and drive repeat business."
                                    },
                                    {
                                        title: "Brand Messaging",
                                        description: "Cohesive messaging frameworks that communicate your value proposition and brand story."
                                    },
                                    {
                                        title: "Social Media Copy",
                                        description: "Engaging posts that build community, drive engagement, and strengthen your brand presence."
                                    }
                                ].map((service, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mr-4 text-[#ff9f1c]">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#ff9f1c] mb-1">{service.title}</h3>
                                            <p className="text-gray-700">{service.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 bg-[#ff9f1c]/10 rounded-full mr-4">
                                        <Lightbulb className="w-6 h-6 text-[#ff9f1c]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#ff9f1c]">Our Copywriting Results</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { metric: "Conversion Rate Increase", value: "82%", benchmark: "Average for landing pages" },
                                        { metric: "Click-Through Rate", value: "3.5x", benchmark: "Higher than industry average" },
                                        { metric: "Email Open Rate", value: "35%", benchmark: "For optimized subject lines" },
                                        { metric: "User Engagement", value: "+127%", benchmark: "For website with new copy" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                            <div>
                                                <div className="font-medium text-gray-800">{stat.metric}</div>
                                                <div className="text-xs text-gray-500">{stat.benchmark}</div>
                                            </div>
                                            <div className="text-xl font-bold text-[#ff9f1c]">{stat.value}</div>
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
            <section className="py-16 bg-gradient-to-r from-[#ff9f1c] to-[#ffbf69]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready for Copy That Converts?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let our expert copywriters create persuasive content that connects with your audience and drives measurable business results.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?type=copywriting')}
                            className="bg-white text-[#ff9f1c] hover:bg-gray-100 transition-all font-bold text-base px-8 py-3 rounded-lg shadow"
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