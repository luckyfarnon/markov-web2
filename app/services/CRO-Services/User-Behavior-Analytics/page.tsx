"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { BarChart, PieChart, LineChart, Users, Clock, Activity, Brain, Database, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UserBehaviorAnalyticsPage() {
    const router = useRouter();

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#6a4c93] text-center mb-3 tracking-tight drop-shadow-sm">
                        User Behavior Analytics
                    </h1>
                    <p className="text-lg md:text-xl text-[#6a4c93]/80 text-center mb-8 max-w-2xl">
                        Gain deep insights into how users interact with your website to enhance user experience and boost conversion rates
                    </p>
                    <div className="w-20 h-1 bg-[#6a4c93] mb-10"></div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                        {/* Left Content */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#6a4c93] mb-6">Understand Your Users Like Never Before</h2>
                            <p className="text-gray-700 mb-4">
                                Our User Behavior Analytics services provide comprehensive insights into how visitors interact with your website. By analyzing user journeys, click patterns, and engagement metrics, we help you identify opportunities for optimization.
                            </p>
                            <p className="text-gray-700 mb-6">
                                With data-driven insights, you can make informed decisions to improve user experience, reduce friction points, and ultimately increase conversions and revenue.
                            </p>
                            <Button 
                                onClick={() => router.push('/contact?type=user-behavior-analytics')}
                                className="font-bold text-base px-6 py-3 rounded-lg shadow bg-[#6a4c93] text-white hover:bg-[#583c7a] transition-all"
                            >
                                Schedule a Free Consultation
                            </Button>
                        </div>
                        {/* Right: SVG Illustration */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-64 bg-[#6a4c93]/10 rounded-lg flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                                        <BarChart className="w-8 h-8 text-[#6a4c93] mb-2" />
                                        <div className="text-sm font-medium text-[#6a4c93]">Click Rates</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                                        <PieChart className="w-8 h-8 text-[#6a4c93] mb-2" />
                                        <div className="text-sm font-medium text-[#6a4c93]">Demographics</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                                        <Users className="w-8 h-8 text-[#6a4c93] mb-2" />
                                        <div className="text-sm font-medium text-[#6a4c93]">User Flow</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
                                        <LineChart className="w-8 h-8 text-[#6a4c93] mb-2" />
                                        <div className="text-sm font-medium text-[#6a4c93]">Conversions</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Features Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6a4c93] mb-10">What We Track & Analyze</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Activity className="w-10 h-10 text-[#6a4c93]" />,
                                    title: "User Journey Mapping",
                                    description: "We track user paths through your website to identify common routes, drop-off points, and opportunities for optimization."
                                },
                                {
                                    icon: <Clock className="w-10 h-10 text-[#6a4c93]" />,
                                    title: "Time-on-Page Analytics",
                                    description: "We measure how long users spend on different pages to gauge engagement and content effectiveness."
                                },
                                {
                                    icon: <Brain className="w-10 h-10 text-[#6a4c93]" />,
                                    title: "Behavioral Patterns",
                                    description: "We identify behavioral trends and anomalies to understand what drives user decisions and conversions."
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-[#6a4c93]/5 p-6 rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="mb-4 p-3 bg-white rounded-full shadow">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-[#6a4c93]">{item.title}</h3>
                                        <p className="text-gray-700">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Our Process Section */}
                    <div className="bg-[#6a4c93]/10 p-8 rounded-lg mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6a4c93] mb-8">Our Analytics Process</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    number: "01",
                                    title: "Data Collection Implementation",
                                    description: "We set up comprehensive tracking tools on your website to capture user interactions, including clicks, form completions, scrolling behavior, and more."
                                },
                                {
                                    number: "02",
                                    title: "Data Processing & Visualization",
                                    description: "We process the collected data and create visual representations such as heatmaps, user flow diagrams, and funnel visualizations to make the insights accessible."
                                },
                                {
                                    number: "03",
                                    title: "Pattern Recognition & Analysis",
                                    description: "Our analytics experts identify behavioral patterns, trends, and anomalies in the data to uncover insights about your users' preferences and pain points."
                                },
                                {
                                    number: "04",
                                    title: "Actionable Recommendations",
                                    description: "We translate data insights into concrete, prioritized recommendations to improve user experience and increase conversions on your website."
                                }
                            ].map((step, index) => (
                                <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow">
                                    <div className="mr-4 bg-[#6a4c93] text-white font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-[#6a4c93] mb-2">{step.title}</h3>
                                        <p className="text-gray-700">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Reporting & Tools Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6a4c93] mb-8">Tools & Technologies</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white border border-[#6a4c93]/20 rounded-lg shadow p-6">
                                <h3 className="text-xl font-bold text-[#6a4c93] mb-4 flex items-center">
                                    <Database className="w-6 h-6 mr-2" />
                                    Analytics Platforms
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    We leverage industry-leading analytics platforms to collect and analyze user behavior data:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Google Analytics 4",
                                        "Hotjar",
                                        "Mixpanel",
                                        "Amplitude",
                                        "Custom tracking solutions"
                                    ].map((tool, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="mr-2 text-[#6a4c93]">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                            <span className="text-gray-800">{tool}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-white border border-[#6a4c93]/20 rounded-lg shadow p-6">
                                <h3 className="text-xl font-bold text-[#6a4c93] mb-4 flex items-center">
                                    <Database className="w-6 h-6 mr-2" />
                                    Reporting & Dashboards
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    We provide clear, actionable insights through customized reports and dashboards:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "Real-time user behavior dashboards",
                                        "Monthly insight reports",
                                        "Interactive data visualizations",
                                        "Conversion funnel analysis",
                                        "Benchmark comparisons"
                                    ].map((report, index) => (
                                        <li key={index} className="flex items-center">
                                            <div className="mr-2 text-[#6a4c93]">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                            <span className="text-gray-800">{report}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-[#6a4c93] mb-8">Benefits of User Behavior Analytics</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                "Data-driven decision making",
                                "Identify friction points in user journeys",
                                "Optimize conversion funnels",
                                "Improve user experience",
                                "Increase conversion rates",
                                "Reduce bounce rates",
                                "Personalize user experiences",
                                "Prioritize development efforts",
                                "Validate design decisions"
                            ].map((benefit, index) => (
                                <div key={index} className="flex items-center bg-[#6a4c93]/5 p-4 rounded-lg">
                                    <div className="mr-3 bg-[#6a4c93] rounded-full p-1">
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
            <section className="py-16 bg-gradient-to-r from-[#6a4c93] to-[#583c7a]">
                <div className="container mx-auto px-4 max-w-6xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Unlock User Behavior Insights?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Discover how our User Behavior Analytics services can help you understand your users better and optimize your website for maximum conversions.
                    </p>
                    <Button 
                        onClick={() => router.push('/contact?type=user-behavior-analytics')}
                        className="font-bold text-base px-8 py-4 rounded-lg shadow bg-white text-[#6a4c93] hover:bg-gray-100 transition-all"
                    >
                        Get Started
                    </Button>
                </div>
            </section>
        </main>
    );
} 