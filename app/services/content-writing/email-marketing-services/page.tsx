"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Mail, Users, BarChart2, Target, Clock, Zap, ArrowRight, Repeat } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function EmailMarketingServicesPage() {
    const router = useRouter();
    
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="absolute top-0 right-0 w-1/3 h-96 bg-[#17a2b8]/5 rounded-bl-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[#17a2b8]/5 rounded-tr-full -z-10"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <div className="mb-6 p-3 bg-[#17a2b8]/10 rounded-full">
                        <Mail className="w-12 h-12 text-[#17a2b8]" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#17a2b8] text-center mb-3 tracking-tight">
                        Email Marketing Services
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-2xl">
                        Strategic email campaigns that nurture leads, build customer relationships, and drive consistent revenue
                    </p>
                    <div className="w-20 h-1 bg-[#17a2b8] mb-10"></div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Email Marketing?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            The most effective channel for nurturing leads, building customer relationships, and generating consistent ROI
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <BarChart2 className="w-10 h-10 text-[#17a2b8]" />,
                                title: "High ROI",
                                description: "Email marketing delivers one of the highest returns on investment of any marketing channel, averaging $42 for every $1 spent."
                            },
                            {
                                icon: <Users className="w-10 h-10 text-[#17a2b8]" />,
                                title: "Direct Connection",
                                description: "Build direct relationships with your audience in a channel you own, not dependent on third-party algorithms."
                            },
                            {
                                icon: <Repeat className="w-10 h-10 text-[#17a2b8]" />,
                                title: "Consistent Revenue",
                                description: "Create predictable income through strategic automation, nurture sequences, and promotional campaigns."
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-[#17a2b8]/10 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#17a2b8]">{benefit.title}</h3>
                                    <p className="text-gray-700">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            <section className="py-16 bg-[#f8fafc]">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Email Marketing Services</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Comprehensive email marketing solutions to engage your audience at every stage of the customer journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Zap className="w-10 h-10 text-[#17a2b8]" />,
                                title: "Email Strategy Development",
                                description: "Comprehensive planning that aligns your email marketing with business goals and customer needs."
                            },
                            {
                                icon: <Clock className="w-10 h-10 text-[#17a2b8]" />,
                                title: "Automated Email Sequences",
                                description: "Set-and-forget email flows that nurture leads and guide customers through their journey."
                            },
                            {
                                icon: <Target className="w-10 h-10 text-[#17a2b8]" />,
                                title: "Segmentation & Personalization",
                                description: "Targeted messaging based on behavior, preferences, and demographics for maximum relevance."
                            },
                            {
                                icon: <Mail className="w-10 h-10 text-[#17a2b8]" />,
                                title: "Newsletter Management",
                                description: "Regular, value-driven content that keeps your audience engaged and your brand top-of-mind."
                            },
                            {
                                icon: <BarChart2 className="w-10 h-10 text-[#17a2b8]" />,
                                title: "Performance Analysis",
                                description: "Data-driven insights and optimization to continually improve open rates, clicks, and conversions."
                            },
                            {
                                icon: <Users className="w-10 h-10 text-[#17a2b8]" />,
                                title: "List Growth & Management",
                                description: "Strategic approaches to building a healthy, engaged email list while maintaining compliance."
                            }
                        ].map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col">
                                    <div className="mb-4 p-3 bg-[#17a2b8]/10 w-fit rounded-full">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#17a2b8]">{service.title}</h3>
                                    <p className="text-gray-700">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Email Marketing Process</h2>
                            <p className="text-gray-700 mb-8">
                                We follow a proven methodology to create email marketing campaigns that engage your audience and drive measurable results.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        number: "01",
                                        title: "Audience Analysis",
                                        description: "We analyze your customer base to understand their needs, pain points, and behavior patterns."
                                    },
                                    {
                                        number: "02",
                                        title: "Strategy Development",
                                        description: "We create a tailored email marketing plan aligned with your business objectives."
                                    },
                                    {
                                        number: "03",
                                        title: "Content Creation",
                                        description: "Our copywriters craft compelling emails that engage recipients and drive action."
                                    },
                                    {
                                        number: "04",
                                        title: "Implementation & Automation",
                                        description: "We set up campaigns, automation sequences, and proper tracking mechanisms."
                                    },
                                    {
                                        number: "05",
                                        title: "Testing & Optimization",
                                        description: "We continuously test and refine to improve performance metrics and ROI."
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mr-4 flex items-center justify-center w-8 h-8 bg-[#17a2b8] rounded-full text-white font-bold text-sm flex-shrink-0">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#17a2b8] mb-1">{step.title}</h3>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 bg-[#17a2b8]/10 rounded-full mr-4">
                                        <BarChart2 className="w-6 h-6 text-[#17a2b8]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#17a2b8]">Email Performance Metrics</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { metric: "Average Open Rate", value: "28.5%", benchmark: "Industry avg: 21.3%" },
                                        { metric: "Click-Through Rate", value: "4.3%", benchmark: "Industry avg: 2.5%" },
                                        { metric: "Conversion Rate", value: "9.2%", benchmark: "Industry avg: 5.3%" },
                                        { metric: "Revenue Per Email", value: "$0.47", benchmark: "Industry avg: $0.20" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                            <div>
                                                <div className="font-medium text-gray-800">{stat.metric}</div>
                                                <div className="text-xs text-gray-500">{stat.benchmark}</div>
                                            </div>
                                            <div className="text-xl font-bold text-[#17a2b8]">{stat.value}</div>
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
            <section className="py-16 bg-gradient-to-r from-[#17a2b8] to-[#20c997]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Maximize Your Email Marketing?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let our email marketing experts help you build meaningful connections with your audience and drive consistent revenue growth.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?type=email-marketing')}
                            className="bg-white text-[#17a2b8] hover:bg-gray-100 transition-all font-bold text-base px-8 py-3 rounded-lg shadow"
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