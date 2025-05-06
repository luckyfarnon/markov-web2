"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  TrendingUp,
  ShieldCheck,
  Users,
  BarChartHorizontal,
  MessageCircle,
  Globe2,
  ThumbsUp,
  CalendarCheck,
  Lock,
  Star,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function SocialMediaManagementPage() {
  // Primary color for consistent branding
  const primaryColor = "#205A59";
  const secondaryColor = "#8BA640";

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#205A59] to-[#8BA640] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block px-3 py-1 mb-6 text-xs font-semibold rounded-full bg-white text-[#205A59]">
                Social Media Management
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Drive Lasting Results on the Right Channels
              </h1>
              <p className="text-lg text-white opacity-90 mb-8 max-w-xl">
                Custom strategies that promote sales, content engagement, and measurable growth—powered by Markov's expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-[#205A59] hover:bg-gray-100 font-bold">Get My Free Proposal</Button>
              </div>
            </motion.div>
            <motion.div variants={fadeInUp} className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-[#8BA640]/20 rounded-xl transform rotate-3"></div>
                <Image
                  src="/social_media_management.png"
                  alt="Social Media Management"
                  width={600}
                  height={400}
                  className="relative z-10 rounded-xl shadow-xl object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-[#8BA640]">
        <div className="container mx-auto flex flex-wrap justify-center gap-8 items-center">
          <div className="flex flex-col items-center">
            <Star className="text-yellow-400 w-8 h-8 mb-1" />
            <span className="font-bold text-lg text-white">Google</span>
            <span className="text-xs text-white">5.0 Rating</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="text-yellow-400 w-8 h-8 mb-1" />
            <span className="font-bold text-lg text-white">Clutch</span>
            <span className="text-xs text-white">Top Agency</span>
          </div>
          <div className="flex flex-col items-center">
            <Star className="text-yellow-400 w-8 h-8 mb-1" />
            <span className="font-bold text-lg text-white">UpCity</span>
            <span className="text-xs text-white">Excellence</span>
          </div>
        </div>
      </section>

      {/* What is Social Media Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#205A59] mb-4">What is Social Media Management?</h2>
            <p className="text-gray-700 mb-4">Custom strategies that promote sales, content engagement, and measurable growth. Markov's social media management is more than just posting—it's about building a community, driving engagement, and delivering real business results.</p>
            <ul className="space-y-2 text-[#205A59] font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Content planning & creation</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Community management</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Analytics & reporting</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image src="/smm-illustration.png" alt="Social Media Management Illustration" width={320} height={320} className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Integrated Processes */}
      <section className="py-16 bg-gradient-to-r from-[#EAF6F6] to-[#F0F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">Integrated Processes for Maximum Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Strategy Creation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">We research your audience, competitors, and industry to build a custom plan for your brand.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <MessageCircle className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Content Calendar</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">We create, schedule, and publish engaging content that aligns with your goals and brand voice.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Users className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Community Engagement</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">We monitor, respond, and build relationships with your audience to foster loyalty and growth.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <BarChartHorizontal className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">We track performance, optimize campaigns, and provide transparent reports on your ROI.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Businesses Need SMM */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#205A59] mb-4">Why Businesses Need Social Media Management</h2>
            <p className="text-gray-700 mb-4">Online solutions that make your brand stand out. Markov's SMM helps you reach new audiences, build trust, and drive measurable results—without the burden of managing it all yourself.</p>
            <ul className="space-y-2 text-[#205A59] font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Save time and resources</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Access expert strategy and execution</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Enjoy measurable, scalable growth</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image src="/smm-benefits.png" alt="SMM Benefits" width={320} height={320} className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Case Studies/Success Stories */}
      <section className="py-16 bg-gradient-to-r from-[#EAF6F6] to-[#F0F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">5-Star Social Media Management Strategies You Can Rely On</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            Get exceptional returns from custom-built social strategies and content.
          </p>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Financial Company */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="bg-[#205A59] text-white px-3 py-1 rounded-full text-sm font-bold">
                  Twitter Impressions: 724,000 monthly average
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                For more than 5 years, clients from various industries have proven the validity of Markov's proven marketing strategies. Our results remain unchanged from sector to the realm of venture funding, social media engagement, and corporate.
              </p>
              <p className="text-gray-700 mb-4">
                Our professional non-social businesses social media management strategies are passionately executed by our account managers, strategists, and copywriters. These digital strategists have been better than expected.
              </p>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-bold text-[#205A59]">Financial Company</h3>
              </div>
            </div>

            {/* Instagram Engagement */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="bg-[#205A59] text-white px-3 py-1 rounded-full text-sm font-bold">
                  Instagram Engagement: +180%
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                A manufacturing company needed a boost to its online presence. Through our strategic management approach, we increased their social media engagement by an impressive 180%.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Facebook Impressions: <span className="font-semibold">+83%</span> social media engagement year-over-year</li>
                <li>April 2023: Largest day in ad sales results in all-time record in company history</li>
                <li>May 9, 2023: Second day of ad sales in company history</li>
              </ul>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-bold text-[#205A59]">Manufacturing Company</h3>
              </div>
            </div>

            {/* Impressions */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <div className="bg-[#205A59] text-white px-3 py-1 rounded-full text-sm font-bold">
                  Impressions: +185,556 month-over-month (Paid)
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                A recreation company saw incredible results after implementing our social media management approach, effectively increasing their brand visibility online.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Total clicks: <span className="font-semibold">9,570</span></li>
                <li>Conversions: <span className="font-semibold">49.4%</span> CTR</li>
                <li>Click-through Rate: <span className="font-semibold">35.8%</span> CTR</li>
              </ul>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <h3 className="font-bold text-[#205A59]">Recreation Company</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-[#205A59] text-white font-bold px-8 py-3 rounded-full hover:bg-[#205A59]/90">Build Your Own Social Success Story</Button>
          </div>
        </div>
      </section>

      {/* Organic vs Paid Social */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#205A59] mb-4">Organic vs Paid Social: What's the Difference?</h2>
            <p className="text-gray-700 mb-4">Choose the right channels and tactics that work for your business. Markov helps you balance organic growth with paid campaigns for maximum impact.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#EAF6F6] p-4 rounded-xl">
                <h3 className="font-semibold text-[#205A59] mb-2">Organic Social</h3>
                <ul className="text-gray-600 text-sm list-disc pl-4">
                  <li>Building community and trust</li>
                  <li>Content planning and engagement</li>
                  <li>Long-term brand growth</li>
                </ul>
              </div>
              <div className="bg-[#8BA640] p-4 rounded-xl">
                <h3 className="font-semibold text-white mb-2">Paid Social</h3>
                <ul className="text-white text-sm list-disc pl-4">
                  <li>Targeted ad campaigns</li>
                  <li>Rapid audience growth</li>
                  <li>Measurable, scalable results</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Image src="/organic-vs-paid.png" alt="Organic vs Paid Social" width={320} height={320} className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Platform Management */}
      <section className="py-16 bg-gradient-to-r from-[#EAF6F6] to-[#F0F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">Social Media Platforms We Manage</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/facebook-icon.png" alt="Facebook" width={32} height={32} />
                <CardTitle>Facebook Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Community building, content, and paid ads for maximum reach.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/instagram-icon.png" alt="Instagram" width={32} height={32} />
                <CardTitle>Instagram Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Visual storytelling, influencer campaigns, and shoppable content.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={32} height={32} />
                <CardTitle>LinkedIn Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Professional branding, B2B engagement, and thought leadership.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/tiktok-icon.png" alt="TikTok" width={32} height={32} />
                <CardTitle>TikTok Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Creative short-form video and viral brand challenges.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/twitter-icon.png" alt="Twitter" width={32} height={32} />
                <CardTitle>Twitter Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Real-time engagement, brand voice, and customer support.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/pinterest-icon.png" alt="Pinterest" width={32} height={32} />
                <CardTitle>Pinterest Advertising</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Visual discovery, inspiration, and product promotion.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/youtube-icon.png" alt="YouTube" width={32} height={32} />
                <CardTitle>YouTube Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Video content, channel growth, and audience engagement.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">Our Social Media Management Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <TrendingUp className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Social Media Marketing</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Strategy, campaigns, and analytics for all platforms.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <ThumbsUp className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Social Media Advertising</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Targeted ad campaigns to grow your brand and reach new audiences.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Social Media Brand</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Brand strategy, visual identity, and messaging for all platforms.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Users className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Social Media Follower Growth</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Grow your audience with targeted campaigns and influencer outreach.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <BarChartHorizontal className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Social Media SEO</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Optimize your profiles and content for search visibility and engagement.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <CalendarCheck className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Content Writing</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Professional content creation for all your social channels.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Lock className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Social Media Reputation</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Protect your reputation with proactive monitoring and crisis management.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Globe2 className="w-8 h-8 text-[#205A59]" />
                <CardTitle>Website Design & Video</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Custom website and video production for a complete digital presence.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#205A59] to-[#8BA640] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Let Us Help You Conquer Social</h2>
          <p className="mb-8 max-w-xl mx-auto">Markov's experts are ready to help you build a powerful, memorable brand and drive real results on social media. Get your free proposal today!</p>
          <Button className="bg-white text-[#205A59] font-bold text-lg px-8 py-4 hover:bg-gray-100">Get Started</Button>
        </div>
      </section>
    </div>
  )
} 