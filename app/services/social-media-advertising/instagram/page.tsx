"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Instagram, Users, BarChart2, Target, Camera, TrendingUp, ArrowRight, Image, Video, ShoppingBag, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function InstagramAdvertisingPage() {
    const router = useRouter();
    
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-white flex flex-col items-center justify-center">
                <div className="absolute top-0 right-0 w-1/3 h-96 bg-[#C13584]/5 rounded-bl-full -z-10"></div>
                <div className="absolute bottom-0 left-0 w-1/4 h-64 bg-[#C13584]/5 rounded-tr-full -z-10"></div>
                
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl mx-auto px-4">
                    <div className="mb-6 p-3 bg-[#C13584]/10 rounded-full">
                        <Instagram className="w-12 h-12 text-[#C13584]" />
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#C13584] text-center mb-3 tracking-tight">
                        Instagram Advertising
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 text-center mb-8 max-w-2xl">
                        Connect with your audience through visually stunning Instagram ad campaigns that drive engagement and brand awareness
                    </p>
                    <div className="w-20 h-1 bg-[#C13584] mb-10"></div>
                </div>
            </section>

            {/* Key Benefits Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Instagram Advertising?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Leverage Instagram's highly engaged visual platform to build brand awareness and connect with your target audience
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Users className="w-10 h-10 text-[#C13584]" />,
                                title: "Engaged Audience",
                                description: "Connect with over 1 billion monthly active users who spend an average of 30 minutes per day on the platform."
                            },
                            {
                                icon: <Camera className="w-10 h-10 text-[#C13584]" />,
                                title: "Visual Storytelling",
                                description: "Showcase your brand through beautiful visuals in a platform designed for high-quality imagery and video."
                            },
                            {
                                icon: <ShoppingBag className="w-10 h-10 text-[#C13584]" />,
                                title: "Shopping Integration",
                                description: "Turn browsing into buying with shoppable posts and ads that streamline the purchasing process."
                            }
                        ].map((benefit, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                <div className="flex flex-col items-center text-center">
                                    <div className="mb-4 p-3 bg-[#C13584]/10 rounded-full">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 text-[#C13584]">{benefit.title}</h3>
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
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Our Instagram Advertising Approach</h2>
                            <p className="text-gray-700 mb-8">
                                We create visually captivating Instagram campaigns that align with your brand identity while driving measurable results. Our strategy combines aesthetic appeal with data-driven targeting to maximize your ROI.
                            </p>

                            <div className="space-y-4">
                                {[
                                    {
                                        number: "01",
                                        title: "Visual Strategy Development",
                                        description: "We craft a cohesive visual identity that resonates with your target audience and stands out in feeds."
                                    },
                                    {
                                        number: "02",
                                        title: "Content Creation",
                                        description: "We produce scroll-stopping images and videos specifically designed for Instagram's unique environment."
                                    },
                                    {
                                        number: "03",
                                        title: "Precision Targeting",
                                        description: "We identify and target your ideal audience segments based on demographics, interests, and behaviors."
                                    },
                                    {
                                        number: "04",
                                        title: "Performance Optimization",
                                        description: "We continuously analyze and refine campaigns to improve engagement and conversion rates."
                                    }
                                ].map((step, index) => (
                                    <div key={index} className="flex items-start">
                                        <div className="mr-4 bg-[#C13584] text-white font-bold rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                                            {step.number}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-[#C13584] mb-1">{step.title}</h3>
                                            <p className="text-gray-700">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <div className="w-full max-w-md h-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                                <div className="flex items-center mb-6">
                                    <div className="p-2 bg-[#C13584]/10 rounded-full mr-4">
                                        <Heart className="w-6 h-6 text-[#C13584]" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#C13584]">Engagement Metrics</h3>
                                </div>
                                
                                <div className="space-y-6">
                                    {[
                                        { metric: "Engagement Rate", value: "4.7%", benchmark: "Industry avg: 2.2%" },
                                        { metric: "Cost Per Engagement", value: "$0.35", benchmark: "Industry avg: $0.78" },
                                        { metric: "Story Completion Rate", value: "87%", benchmark: "Industry avg: 70%" },
                                        { metric: "Click-Through Rate", value: "2.8%", benchmark: "Industry avg: 0.94%" }
                                    ].map((stat, index) => (
                                        <div key={index} className="flex justify-between items-center border-b border-gray-100 pb-2">
                                            <div>
                                                <div className="font-medium text-gray-800">{stat.metric}</div>
                                                <div className="text-xs text-gray-500">{stat.benchmark}</div>
                                            </div>
                                            <div className="text-xl font-bold text-[#C13584]">{stat.value}</div>
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
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Instagram Ad Formats We Utilize</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            We create campaigns using the most effective ad formats to achieve your specific business objectives
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Feed Ads",
                                description: "Native ads that appear in users' Instagram feeds with seamless integration."
                            },
                            {
                                title: "Story Ads",
                                description: "Full-screen vertical ads that appear between user stories for maximum impact."
                            },
                            {
                                title: "Reels Ads",
                                description: "Short-form video ads that appear in Instagram's popular Reels feature."
                            },
                            {
                                title: "Explore Ads",
                                description: "Ads that appear in Instagram's Explore section where users discover new content."
                            },
                            {
                                title: "Shopping Ads",
                                description: "Shoppable ads that allow users to purchase products without leaving Instagram."
                            },
                            {
                                title: "Carousel Ads",
                                description: "Multi-image or video ads that allow users to swipe through multiple pieces of content."
                            }
                        ].map((format, index) => (
                            <div key={index} className="bg-[#C13584]/5 p-6 rounded-lg hover:bg-[#C13584]/10 transition-colors">
                                <h3 className="text-lg font-bold text-[#C13584] mb-2">{format.title}</h3>
                                <p className="text-gray-700">{format.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#C13584] to-[#F56040]">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Elevate Your Brand on Instagram?</h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Let our experts develop a visually stunning Instagram advertising strategy that builds your brand and drives real business results.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button 
                            onClick={() => router.push('/contact?type=instagram-advertising')}
                            className="bg-white text-[#C13584] hover:bg-gray-100 transition-all font-bold text-base px-8 py-3 rounded-lg shadow"
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