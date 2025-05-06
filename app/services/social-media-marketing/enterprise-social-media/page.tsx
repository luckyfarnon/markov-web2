"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Star, Users, TrendingUp, Globe2, ThumbsUp, BarChartHorizontal, MessageCircle, ChevronRight } from 'lucide-react'

export default function EnterpriseSocialMediaPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-16 bg-[#FDFBEE] text-[#015551] overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#015551]">Enterprise Social Media Marketing</h1>
            <p className="text-lg mb-8">Tap Into Robust Strategies Tailored to Larger Businesses</p>
            
            <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="text" 
                  placeholder="Enter Website Address" 
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#57B4BA]" 
                />
                <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise">
                  <Button className="bg-[#FE4F2D] hover:bg-[#e64325] text-white font-bold">GET MY FREE PROPOSAL</Button>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center text-sm text-[#015551] mt-8">
            <Link href="/" className="hover:text-[#57B4BA]">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-[#57B4BA]">Digital Marketing Services</Link>
            <span className="mx-2">/</span>
            <span>Enterprise Social Media Marketing</span>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#015551] mb-6">Enterprise Social Media Marketing Solutions To Keep Your Company Spotlighted</h2>
            
            <div className="mb-8">
              <p className="mb-4">
                A whopping <span className="font-bold text-[#FE4F2D]">4.89 billion users</span> – that's how many people use social media globally, with each person spending an average of <span className="font-bold text-[#FE4F2D]">2 hours and 28 minutes</span> on different platforms.
              </p>
              <p className="mb-4">
                With such a vast reach, social media presents a prime opportunity for brands to engage and connect with their target market.
              </p>
              <p className="mb-6 font-semibold text-[#015551]">
                The question is – can your social media efforts keep up with your growing business and its expanding needs?
              </p>
            </div>
            
            <div className="mb-10">
              <p className="mb-4">
                Enterprise social media marketing (SMM) provides <span className="font-bold text-[#57B4BA]">scalable solutions</span> for companies, often with diverse customer bases and multiple locations, to maintain a robust online presence.
              </p>
              <p className="mb-6">
                With enterprise SMM, you can market your offerings, share thought leadership content and run paid promotions on platforms like Meta (previously Facebook), Instagram, X (previously Twitter) and LinkedIn.
              </p>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#015551] mb-4">Ready to take your online campaigns up a notch?</h3>
              <p className="mb-4">
                Keep your brand top-of-mind among consumers with Thrive Internet Marketing Agency's enterprise social media marketing services. With many new businesses surfacing online, you can't afford to be left out of the conversation.
              </p>
              <p className="mb-4">
                Let Thrive's enterprise social media agency improve your brand's visibility and integrity. We work with businesses at individual and corporate levels, implementing campaigns that drive brand engagement and sales.
              </p>
            </div>
            
            <div className="flex justify-center mb-10">
              <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise">
                <Button className="bg-[#FE4F2D] hover:bg-[#e64325] text-white font-bold px-8 py-3 rounded-md text-lg">BOOST MY ONLINE PRESENCE</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Image Section */}
      <section className="py-16 bg-gradient-to-r from-[#FDFBEE] to-[#f0f5f5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="lg:w-1/2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/enterprise-social-platforms.png" 
                  alt="Enterprise Social Media Platforms" 
                  width={600} 
                  height={400}
                  className="w-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2 space-y-6 max-w-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-[#015551]">
                Enterprise-Grade Social Media Solutions for Maximum Impact
              </h2>
              <p className="text-[#015551]">
                Our comprehensive social media approach combines strategic planning, consistent brand messaging, and data-driven optimizations designed specifically for large enterprise organizations.
              </p>
              <p className="text-[#015551]">
                We help you maintain consistent messaging across all social platforms while tailoring content to each platform's unique audience and format requirements.
              </p>
              <div className="pt-4">
                <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-expert">
                  <Button className="bg-[#57B4BA] hover:bg-[#468e93] text-white font-bold px-6 py-3 rounded-md">
                    CHAT WITH AN SMM EXPERT
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising vs. Marketing Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#015551] mb-8">
              Enterprise Social Media Advertising vs. Social Media Marketing:<br />
              What's the Difference?
            </h2>
            
            <p className="mb-6">
              While both enterprise social media advertising and marketing have their merits, it's essential to identify which strategy best suits your business goals.
            </p>
            
            <p className="mb-10 text-[#57B4BA] font-medium">
              Understanding which and how to use social media for big companies is crucial in deciding the most effective enterprise social media strategy for your business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Marketing Column */}
              <div className="bg-[#FDFBEE] rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#015551] mb-4 text-center">Enterprise Social Media Marketing</h3>
                
                <p className="mb-4">
                  Social media marketing uses free, organic methods to promote your product or service on social networks.
                </p>
                
                <p className="mb-4">
                  Organic tactics include creating compelling content that encourages users to act, such as liking, commenting or sharing your post.
                </p>
                
                <p className="mb-4">
                  The ultimate goal is to build your brand on social media and eventually drive your audience towards your website to increase traffic and, ultimately, sales.
                </p>
                
                <h4 className="font-bold text-[#57B4BA] mt-6 mb-3">What are the benefits of social media marketing?</h4>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#FE4F2D] font-bold mr-2">•</span>
                    <span><span className="font-bold">Builds a genuine connection</span> with your audience through engagement and storytelling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FE4F2D] font-bold mr-2">•</span>
                    <span><span className="font-bold">Provides two-way communication</span> channel between your brand and your audience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FE4F2D] font-bold mr-2">•</span>
                    <span><span className="font-bold">Cost-effective</span>, as most social media platforms are free to use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FE4F2D] font-bold mr-2">•</span>
                    <span><span className="font-bold">Helps with search engine optimization (SEO)</span>, as social signals play a role in determining website rankings</span>
                  </li>
                </ul>
              </div>
              
              {/* Advertising Column */}
              <div className="bg-[#FDFBEE] rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-bold text-[#015551] mb-4 text-center">Enterprise Social Media Advertising</h3>
                
                <p className="mb-4">
                  Social media advertising involves paying for a specific ad placement or boosting existing content.
                </p>
                
                <p className="mb-4">
                  Social media ads are much more targeted, as advertisers can define their audience based on factors like age, location, interests and behavior.
                </p>
                
                <p className="mb-4">
                  This enterprise social media strategy is excellent for businesses wanting quick reach and conversions since they appear in users' feeds even if they don't follow your page.
                </p>
                
                <h4 className="font-bold text-[#57B4BA] mt-6 mb-3">What are the benefits of social media advertising?</h4>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#FE4F2D] font-bold mr-2">•</span>
                    <span><span className="font-bold">Precise targeting capabilities</span> to reach a specific audience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FE4F2D] font-bold mr-2">•</span>
                    <span><span className="font-bold">Easy tracking and analysis</span> of ad performance with detailed analytics and metrics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FE4F2D] font-bold mr-2">•</span>
                    <span><span className="font-bold">Ability to target ads</span> towards specific demographics or audiences for maximum reach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FE4F2D] font-bold mr-2">•</span>
                    <span><span className="font-bold">Faster results</span> compared to organic strategies as ads appear in feeds instantly</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth With Enterprise Solutions Section */}
      <section className="py-16 bg-gradient-to-b from-[#FDFBEE] to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-[#015551] mb-8">
              Achieve Unprecedented Growth With<br />
              Thrive's Enterprise Social Media Solutions
            </h2>
            
            <p className="mb-6">
              Choosing the right enterprise social media strategy is not a black-or-white effort. It requires an in-depth understanding of your target market and platform-specific guidelines and policies.
            </p>
            
            <p className="mb-6">
              Thrive Internet Marketing Agency identifies the right social platforms and strategies to focus your efforts. Our enterprise social media services involve researching trends, analyzing data, creating content, conducting enterprise social media monitoring and measuring results – <span className="font-bold">all within budget</span>.
            </p>
            
            <p className="mb-8">
              Whether your organic reach is slipping or you want to increase conversions with ads, our SMM experts leverage social media best practices to put your brand where your target audience is and drive engagement.
            </p>
            
            <div className="flex justify-center">
              <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-assessment">
                <Button className="bg-[#FE4F2D] hover:bg-[#e64325] text-white font-bold px-8 py-3 rounded-md">
                  ASSESS MY PERFORMANCE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Social Media Management Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#015551] mb-3">
              Why Your Business Needs<br />
              Enterprise Social Media Management
            </h2>
            <p className="text-lg text-[#57B4BA]">Maintain a Cohesive Brand Image Across Various Consumer Touchpoints</p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <p className="mb-6">
              The average person sources content from <span className="font-bold">seven different social networks</span> per month. That's not only seven different opportunities to connect with your target audience but also seven different chances to lose potential customers if your messaging is scattered.
            </p>
            
            <p className="mb-8">
              Enterprise social media management brings all your social media efforts under one roof, ensuring consistency in enterprise social media branding and overall customer experience.
            </p>
            
            <p className="font-medium text-center mb-10">
              Access the following benefits by partnering with an enterprise social media company:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Row 1 */}
            <div className="bg-[#FDFBEE] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#57B4BA] flex items-center justify-center mr-3 text-white">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#015551]">Humanize Your Brand</h4>
              </div>
              <p className="text-[#015551]">
                About <span className="font-bold">86% of people</span> say authenticity is important when deciding which brands to support. Whether it's behind the scenes glimpses, employee spotlights or real-time problem solving, social media facilitates authentic interactions that strengthen brand trust and loyalty.
              </p>
            </div>
            
            <div className="bg-[#FDFBEE] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#57B4BA] flex items-center justify-center mr-3 text-white">
                  <Globe2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#015551]">Leverage Cross-Platform Sharing</h4>
              </div>
              <p className="text-[#015551]">
                Share your latest Instagram post on Twitter, Facebook video to a blog post or connect your Instagram account to your Facebook page – social media platforms make it easy to cross-promote content and reach different audiences, maximizing the impact of each post or update.
              </p>
            </div>
            
            <div className="bg-[#FDFBEE] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#57B4BA] flex items-center justify-center mr-3 text-white">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#015551]">Attract Top-of-Funnel Traffic</h4>
              </div>
              <p className="text-[#015551]">
                Enterprise social media services allow you to expand your reach to all of your audience by utilizing hashtags, targeted ads and content partnerships. These enterprise social media tools drive brand awareness and attract potential customers who may have yet to discover your offerings.
              </p>
            </div>
            
            {/* Row 2 */}
            <div className="bg-[#FDFBEE] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#57B4BA] flex items-center justify-center mr-3 text-white">
                  <BarChartHorizontal className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#015551]">Boost Search Visibility</h4>
              </div>
              <p className="text-[#015551]">
                Google constantly pulls data from social channels to populate its search engine results pages (SERPs). By having an active presence on social media and adhering to SEO best practices, you can improve your business's search visibility and drive more organic traffic to your website.
              </p>
            </div>
            
            <div className="bg-[#FDFBEE] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#57B4BA] flex items-center justify-center mr-3 text-white">
                  <ThumbsUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#015551]">Become a Thought Leader</h4>
              </div>
              <p className="text-[#015551]">
                Sharing valuable content, engaging with industry leaders and participating in relevant conversations on social media establish your brand as a go-to source for industry insights and expertise. This positions your business as a thought leader within your niche and boosts your brand's equity.
              </p>
            </div>
            
            <div className="bg-[#FDFBEE] p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#57B4BA] flex items-center justify-center mr-3 text-white">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-[#015551]">Improve Customer Service</h4>
              </div>
              <p className="text-[#015551]">
                Over <span className="font-bold">70% of consumers</span> with positive brand experiences on social media are likelier to recommend the brand. Social media enables faster response times, making it convenient for addressing customer concerns and providing timely support.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-expert">
              <Button className="bg-[#FE4F2D] hover:bg-[#e64325] text-white font-bold px-8 py-3 rounded-md">
                CHAT WITH AN SMM EXPERT
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gradient-to-r from-[#FDFBEE] to-[#f3f9f9]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#015551] mb-3">
              Thrive's Enterprise Social Media Marketing Results
            </h2>
            <p className="text-lg text-[#57B4BA]">Solidify Your Brand's Position in the Market</p>
          </div>
          
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Thrive's enterprise social media agency has experience in different markets, including business-to-business (B2B) and business-to-company (B2C). Whether you own an enterprise or a multi-location organization, we have the complete <span className="font-bold text-[#57B4BA]">enterprise social media tools your brand needs to succeed</span>.
          </p>
          
          <p className="text-center mb-10">See our enterprise social media solutions in action below:</p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Case Study 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-[#015551] p-4 text-white text-center">
                <h3 className="font-bold">PERFORMANCE CHEMICAL MANUFACTURING COMPANY</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="font-bold text-lg text-[#FE4F2D]">+657%</p>
                    <p className="text-sm">Twitter Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg text-[#FE4F2D]">+138%</p>
                    <p className="text-sm">Facebook Followers</p>
                  </div>
                </div>
                <p className="text-sm">
                  The client, an industry-leading manufacturer of performance chemicals, wanted to boost their site rankings. Since managing the client's social media accounts, Thrive has generated a record-high <span className="font-bold">8,299 sessions</span> by the end of 2019 from only <span className="font-bold">1,018 sessions</span> in January 2019.
                </p>
              </div>
            </div>
            
            {/* Case Study 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-[#015551] p-4 text-white text-center">
                <h3 className="font-bold">MULTI-LOCATION ABA THERAPY CENTER</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="font-bold text-lg text-[#FE4F2D]">+668k</p>
                    <p className="text-sm">People Reached Through Social Media</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg text-[#FE4F2D]">+1,300%</p>
                    <p className="text-sm">Contact Form Submissions</p>
                  </div>
                </div>
                <p className="text-sm">
                  The client tapped Thrive to boost lead generation for their 60 locations. By leveraging social media paid advertising, video production and pay-per-click (PPC) marketing, we were able to bring <span className="font-bold">12,591 visitors</span> to their website and increase their leads by over <span className="font-bold">20 times</span> in just six months.
                </p>
              </div>
            </div>
            
            {/* Case Study 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="bg-[#015551] p-4 text-white text-center">
                <h3 className="font-bold">PREMIER LANDSCAPE CONSTRUCTION COMPANY</h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="font-bold text-lg text-[#FE4F2D]">+100%</p>
                    <p className="text-sm">New Instagram Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-lg text-[#FE4F2D]">+15k</p>
                    <p className="text-sm">Facebook Impressions</p>
                  </div>
                </div>
                <p className="text-sm">
                  The client hired Thrive to enhance their online presence and strengthen brand credibility through organic social media marketing. In just five months of running the social media campaign, we increased the client's Instagram followers by <span className="font-bold">100%</span> and their Facebook interactions by <span className="font-bold">76.9%</span>.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Thrive takes a holistic approach to social media management. We define your growth goals, select the right platforms and create a winning content strategy that drives revenue for your business.
          </p>
          
          <div className="flex justify-center">
            <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-competition">
              <Button className="bg-[#FE4F2D] hover:bg-[#e64325] text-white font-bold px-8 py-3 rounded-md">
                READY TO OUTPERFORM THE COMPETITION?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#015551] to-[#01332f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Thrive's Enterprise Social Media Services</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Make the Most of What Digital Marketing Has To Offer
          </p>
          <Link href="/contact?type=digital-marketing&service=social-media&source=enterprise-growth">
            <Button className="bg-[#FE4F2D] hover:bg-[#e64325] text-white font-bold px-8 py-4 text-lg">
              ACCELERATE MY ONLINE GROWTH NOW
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
} 