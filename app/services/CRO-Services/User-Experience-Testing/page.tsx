"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { UserPlus, Eye, Target, Users, Monitor, Cpu, MousePointer, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserExperienceTestingPage() {
    const router = useRouter();

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#ff6f61] text-center mb-3 tracking-tight drop-shadow-sm">
                        User Experience Testing
                    </h1>
                    <p className="text-lg md:text-xl text-[#ff6f61]/80 text-center mb-8 max-w-2xl">
                        Gain valuable insights into how users interact with your website to improve usability and conversions
                    </p>
                    <div className="w-20 h-1 bg-[#ff6f61] mb-10"></div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#ff6f61] mb-6">Elevate Your User Experience</h2>
                            <p className="text-gray-700 mb-4">
                                Our comprehensive UX testing services help you understand your users' behaviors, preferences, and pain points. By identifying usability issues and optimization opportunities, we help you create a more intuitive and effective user experience.
                            </p>
                            <p className="text-gray-700 mb-6">
                                With data-driven insights from real users, you can make informed design decisions that improve engagement, satisfaction, and ultimately, conversion rates.
                            </p>
                            <Button 
                                onClick={() => router.push('/contact?type=ux-testing')}
                                className="font-bold text-base px-6 py-3 rounded-lg shadow bg-[#ff6f61] text-white hover:bg-[#e55a4f] transition-all"
                            >
                                Schedule a Free Consultation
                            </Button>
                        </div>
                        {/* Right: SVG Illustration */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-64 bg-[#ff6f61]/10 rounded-lg flex items-center justify-center">
                                <div className="relative">
                                    <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-[#ff6f61]/20 flex items-center justify-center">
                                        <UserPlus className="w-10 h-10 text-[#ff6f61]" />
                                    </div>
                                    <div className="w-48 h-32 bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between">
                                        <div className="flex justify-between items-center">
                                            <div className="text-[#ff6f61] font-bold">User Satisfaction</div>
                                            <Eye className="w-5 h-5 text-[#ff6f61]" />
                                        </div>
                                        <div className="text-3xl font-bold text-[#ff6f61]">+85%</div>
                                        <div className="text-sm text-gray-500">Improved experience</div>
                                    </div>
                                    <div className="absolute -bottom-12 -right-12 w-24 h-24 rounded-full bg-[#ff6f61]/20 flex items-center justify-center">
                                        <Target className="w-10 h-10 text-[#ff6f61]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our UX Testing Methods */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ff6f61] mb-10">Our UX Testing Methods</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Users className="w-10 h-10 text-[#ff6f61]" />,
                                    title: "Usability Testing",
                                    description: "We observe real users as they interact with your website to identify pain points and opportunities for improvement."
                                },
                                {
                                    icon: <Monitor className="w-10 h-10 text-[#ff6f61]" />,
                                    title: "A/B Testing",
                                    description: "We compare different versions of your website to determine which design elements and content perform better."
                                },
                                {
                                    icon: <Cpu className="w-10 h-10 text-[#ff6f61]" />,
                                    title: "Heatmap Analysis",
                                    description: "We use heatmaps and user recordings to visualize how users interact with your website and identify engagement patterns."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#ff6f61]/5 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-white rounded-full shadow">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-[#ff6f61]">{item.title}</h3>
                                        <p className="text-gray-700">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* UX Testing Process */}
                    <div className="bg-[#ff6f61]/10 p-8 rounded-lg mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ff6f61] mb-8">Our UX Testing Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                            {[
                                {
                                    number: "01",
                                    title: "Research & Planning",
                                    description: "We define your goals, identify target users, and create test scenarios."
                                },
                                {
                                    number: "02",
                                    title: "Participant Recruitment",
                                    description: "We recruit users that match your target audience demographics."
                                },
                                {
                                    number: "03",
                                    title: "Testing Execution",
                                    description: "We conduct tests and gather quantitative and qualitative data."
                                },
                                {
                                    number: "04",
                                    title: "Analysis & Reporting",
                                    description: "We analyze results and provide actionable recommendations."
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow">
                                    <div className="mr-4 bg-[#ff6f61] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#ff6f61] mb-2">{step.title}</h3>
                                        <p className="text-gray-700">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ff6f61] mb-8">Benefits of UX Testing</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "Identify usability issues before they impact users",
                                "Improve user satisfaction and retention",
                                "Increase conversion rates and ROI",
                                "Reduce development costs by fixing issues early",
                                "Gain valuable insights into user behavior",
                                "Make data-driven design decisions"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center bg-[#ff6f61]/5 p-4 rounded-lg">
                                    <div className="mr-4 bg-[#ff6f61] rounded-full p-1">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-gray-800">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Case Study Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#ff6f61] mb-8">Success Story</h2>
                        <div className="bg-white border border-[#ff6f61]/20 rounded-lg shadow-lg p-8">
                            <div className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/3 flex justify-center">
                                    <div className="w-full h-48 bg-[#ff6f61]/10 rounded-lg flex items-center justify-center">
                                        <MousePointer className="w-16 h-16 text-[#ff6f61]" />
                                    </div>
                                </div>
                                <div className="md:w-2/3">
                                    <h3 className="text-xl font-bold text-[#ff6f61] mb-4">E-commerce Website Transformation</h3>
                                    <p className="text-gray-700 mb-4">
                                        An e-commerce client was experiencing high cart abandonment rates despite strong traffic. Our UX testing revealed several usability issues in the checkout process that were frustrating users.
                                    </p>
                                    <p className="text-gray-700 mb-4">
                                        After implementing our recommendations, the client saw:
                                    </p>
                                    <ul className="list-disc pl-5 mb-4 text-gray-700 space-y-1">
                                        <li>42% decrease in cart abandonment</li>
                                        <li>28% increase in overall conversion rate</li>
                                        <li>53% improvement in user satisfaction scores</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#ff6f61] to-[#e55a4f]">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Transform Your User Experience?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Discover how our UX testing services can help you create a more intuitive, engaging, and conversion-focused website.
                    </p>
                    <Button 
                        onClick={() => router.push('/contact?type=ux-testing')}
                        className="font-bold text-base px-8 py-4 rounded-lg shadow bg-white text-[#ff6f61] hover:bg-gray-100 transition-all"
                    >
                        Get Started
                    </Button>
                </div>
            </section>
        </main>
    );
} 