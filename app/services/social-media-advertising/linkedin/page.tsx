"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin, Users, BarChart2, Target, Briefcase, TrendingUp, Building, BookOpen, MessageSquare, Award } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function LinkedinAdvertisingPage() {
    const router = useRouter();
    
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="absolute top-0 right-0 w-1/3 h-96 bg-[#0077B5]/5 rounded-bl-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[#0077B5]/5 rounded-tr-full -z-10"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <div className="mb-6 p-3 bg-[#0077B5]/10 rounded-full">
                        <Linkedin className="w-12 h-12 text-[#0077B5]" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#0077B5] text-center mb-3 tracking-tight">
                        LinkedIn Advertising
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-2xl">
                        Target decision-makers and professionals with precision LinkedIn campaigns that drive B2B growth
                    </p>
                    <div className="w-20 h-1 bg-[#0077B5] mb-10"></div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why LinkedIn Advertising?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Leverage the world's largest professional network to connect with business decision-makers and industry professionals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Building className="w-10 h-10 text-[#0077B5]" />,
                                title: "B2B Targeting",
                                description: "Reach decision-makers and professionals with precise targeting by job title, company size, industry, and more."
                            },
                            {
                                icon: <Briefcase className="w-10 h-10 text-[#0077B5]" />,
                                title: "Professional Context",
                                description: "Connect with your audience in a professional mindset, leading to higher quality leads and conversions."
                            },
                            {
                                icon: <Award className="w-10 h-10 text-[#0077B5]" />,
                                title: "Brand Credibility",
                                description: "Build thought leadership and establish your brand as an authority in your industry."
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-[#0077B5]/10 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#0077B5]">{benefit.title}</h3>
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
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our LinkedIn Advertising Approach</h2>
                            <p className="text-gray-700 mb-8">
                                We develop strategic LinkedIn campaigns that target the right decision-makers with compelling content that drives leads and conversions for your B2B business.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        number: "01",
                                        title: "Audience Segmentation",
                                        description: "We identify and target key decision-makers with precise professional targeting capabilities."
                                    },
                                    {
                                        number: "02",
                                        title: "Content Strategy",
                                        description: "We create professional, value-driven content that resonates with business audiences."
                                    },
                                    {
                                        number: "03",
                                        title: "Campaign Optimization",
                                        description: "We continuously refine campaigns based on performance data to maximize ROI."
                                    },
                                    {
                                        number: "04",
                                        title: "Lead Generation Focus",
                                        description: "We implement strategies specifically designed to capture and convert high-quality B2B leads."
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mr-4 bg-[#0077B5] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#0077B5] mb-1">{step.title}</h3>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 bg-[#0077B5]/10 rounded-full mr-4">
                                        <TrendingUp className="w-6 h-6 text-[#0077B5]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#0077B5]">B2B Performance Metrics</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { metric: "Lead Conversion Rate", value: "3.8%", benchmark: "Industry avg: 2.3%" },
                                        { metric: "Cost Per Lead", value: "$58", benchmark: "Industry avg: $75" },
                                        { metric: "Click-Through Rate", value: "0.9%", benchmark: "Industry avg: 0.45%" },
                                        { metric: "Engagement Rate", value: "5.2%", benchmark: "Industry avg: 3.1%" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                            <div>
                                                <div className="font-medium text-gray-800">{stat.metric}</div>
                                                <div className="text-xs text-gray-500">{stat.benchmark}</div>
                                            </div>
                                            <div className="text-xl font-bold text-[#0077B5]">{stat.value}</div>
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
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">LinkedIn Ad Formats We Leverage</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We create strategic campaigns using the most effective ad formats for your specific B2B goals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Sponsored Content",
                                description: "Native ads that appear in the LinkedIn feed for maximum visibility and engagement."
                            },
                            {
                                title: "Message Ads",
                                description: "Direct messages to LinkedIn inboxes for personalized communication with prospects."
                            },
                            {
                                title: "Text Ads",
                                description: "Simple yet effective ads that appear in the right rail on desktop with clear CTAs."
                            },
                            {
                                title: "Dynamic Ads",
                                description: "Personalized ad content that adapts to each viewer's LinkedIn profile data."
                            },
                            {
                                title: "Conversation Ads",
                                description: "Interactive choose-your-path messages that engage prospects in conversational flows."
                            },
                            {
                                title: "Lead Gen Forms",
                                description: "Pre-filled forms that make it easy for prospects to share their information."
                            }
                        ].map((format, index) => (
                            <div key={index} className="bg-[#0077B5]/5 p-6 rounded-lg hover:bg-[#0077B5]/10 transition-colors">
                                <h3 className="text-lg font-bold text-[#0077B5] mb-2">{format.title}</h3>
                                <p className="text-gray-700">{format.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#0077B5] to-[#00A0DC]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Generate High-Quality B2B Leads?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let our experts develop a targeted LinkedIn advertising strategy that connects you with decision-makers and drives business growth.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?type=linkedin-advertising')}
                            className="bg-white text-[#0077B5] hover:bg-gray-100 transition-all font-bold text-base px-8 py-3 rounded-lg shadow"
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