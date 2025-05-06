"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { BarChart, Zap, TrendingUp, LineChart, BarChart2, PieChart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CROAuditsPage() {
    const router = useRouter();

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#0077b6] text-center mb-3 tracking-tight drop-shadow-sm">
                        CRO Audits
                    </h1>
                    <p className="text-lg md:text-xl text-[#0077b6]/80 text-center mb-8 max-w-2xl">
                        Uncover conversion bottlenecks and optimization opportunities with our comprehensive CRO audit services
                    </p>
                    <div className="w-20 h-1 bg-[#0077b6] mb-10"></div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0077b6] mb-6">Improve Your Website's Conversion Rates</h2>
                            <p className="text-gray-700 mb-4">
                                Our CRO audit process delivers actionable insights to help you identify and fix conversion bottlenecks. We analyze your website's performance metrics, user behavior, and design elements to uncover optimization opportunities.
                            </p>
                            <p className="text-gray-700 mb-6">
                                With our data-driven approach, we help you make informed decisions that lead to higher conversion rates, better ROI, and improved user experience.
                            </p>
                            <Button 
                                onClick={() => router.push('/contact?type=cro-audits')}
                                className="font-bold text-base px-6 py-3 rounded-lg shadow bg-[#0077b6] text-white hover:bg-[#00598c] transition-all"
                            >
                                Schedule a Free Consultation
                            </Button>
                        </div>
                        {/* Right: SVG Illustration */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-64 bg-[#0077b6]/10 rounded-lg flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#0077b6]/20 flex items-center justify-center">
                                        <BarChart className="w-10 h-10 text-[#0077b6]" />
                                    </div>
                                    <div className="w-48 h-32 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
                                        <div className="flex justify-between items-center">
                                            <div className="text-[#0077b6] font-bold">Conversion Rate</div>
                                            <TrendingUp className="w-5 h-5 text-green-500" />
                                        </div>
                                        <div className="text-3xl font-bold text-[#0077b6]">+47%</div>
                                        <div className="text-sm text-gray-500">After optimization</div>
                                    </div>
                                    <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-[#0077b6]/20 flex items-center justify-center">
                                        <Zap className="w-10 h-10 text-[#0077b6]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our CRO Audit Process */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0077b6] mb-10">Our CRO Audit Process</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <LineChart className="w-10 h-10 text-[#0077b6]" />,
                                    title: "Data Analysis",
                                    description: "We analyze your website's analytics, heatmaps, and user recordings to understand user behavior patterns and identify issues."
                                },
                                {
                                    icon: <BarChart2 className="w-10 h-10 text-[#0077b6]" />,
                                    title: "Conversion Funnel Review",
                                    description: "We examine your conversion funnel to identify drop-off points and recommend improvements to streamline the user journey."
                                },
                                {
                                    icon: <PieChart className="w-10 h-10 text-[#0077b6]" />,
                                    title: "Actionable Recommendations",
                                    description: "We provide clear, prioritized recommendations based on impact and implementation complexity."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#0077b6]/5 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-white rounded-full shadow">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-[#0077b6]">{item.title}</h3>
                                        <p className="text-gray-700">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="bg-[#0077b6]/10 p-8 rounded-lg">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#0077b6] mb-8">Benefits of CRO Audits</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Identify conversion barriers and bottlenecks",
                                "Improve user experience and satisfaction",
                                "Increase conversion rates and ROI",
                                "Reduce customer acquisition costs",
                                "Make data-driven design decisions",
                                "Prioritize website improvements"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                                    <div className="mr-4 bg-[#0077b6] rounded-full p-1">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-800">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#0077b6] to-[#00598c]">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Improve Your Conversion Rates?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Get a comprehensive CRO audit and start turning more visitors into customers today.
                    </p>
                    <Button 
                        onClick={() => router.push('/contact?type=cro-audits')}
                        className="font-bold text-base px-8 py-4 rounded-lg shadow bg-white text-[#0077b6] hover:bg-gray-100 transition-all"
                    >
                        Get Started
                    </Button>
                </div>
            </section>
        </main>
    );
} 