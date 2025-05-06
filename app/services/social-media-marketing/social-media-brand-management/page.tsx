"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle, Star, Users, TrendingUp, Globe2, ThumbsUp, BarChartHorizontal, ShieldCheck, MessageCircle, CalendarCheck, Lock } from 'lucide-react'

export default function SocialMediaBrandManagementPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-[#2BC4C1] to-[#3B82F6] text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block px-4 py-1 mb-4 text-xs font-semibold rounded-full bg-white text-[#2BC4C1] shadow">Social Media Brand Management</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Empower Your Brand. Connect. Grow.</h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">Establish a unique voice, build trust, and grow your audience with Markov's data-driven social media brand management solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#2BC4C1] hover:bg-gray-100 font-bold">Get Your Free Proposal</Button>
            <Button variant="outline" className="text-white border-white bg-transparent hover:bg-white/20 font-bold">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-6 bg-[#3AAFA9]">
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

      {/* What is Social Media Branding */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#205A59] mb-4">What is Social Media Branding?</h2>
            <p className="text-gray-700 mb-4">Shape your brand perception and build online trust. Social media branding is about more than just posting—it's about creating a consistent, authentic presence that resonates with your audience and sets you apart from the competition.</p>
            <ul className="space-y-2 text-[#2BC4C1] font-medium">
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Consistent brand voice & visuals</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Audience engagement & trust</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Data-driven content strategy</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <Image src="/brand-illustration.png" alt="Branding Illustration" width={320} height={320} className="rounded-xl shadow-lg" />
          </div>
        </div>
      </section>

      {/* Branding Process */}
      <section className="py-16 bg-gradient-to-r from-[#EAF6F6] to-[#F0F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">Our Social Media Brand Management Process</h2>
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <Card className="w-64 bg-white shadow-md border-0">
              <CardHeader className="flex flex-col items-center">
                <Globe2 className="w-8 h-8 text-[#2BC4C1] mb-2" />
                <CardTitle>1. Platform & Market Research</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-center">Identify the best platforms and analyze your competitors and audience.</CardContent>
            </Card>
            <Card className="w-64 bg-white shadow-md border-0">
              <CardHeader className="flex flex-col items-center">
                <TrendingUp className="w-8 h-8 text-[#F79C42] mb-2" />
                <CardTitle>2. Branding Strategy</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-center">Develop a unique brand voice, messaging, and visual identity.</CardContent>
            </Card>
            <Card className="w-64 bg-white shadow-md border-0">
              <CardHeader className="flex flex-col items-center">
                <ThumbsUp className="w-8 h-8 text-[#3B82F6] mb-2" />
                <CardTitle>3. Content & Design</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-center">Create engaging, on-brand content and eye-catching visuals.</CardContent>
            </Card>
            <Card className="w-64 bg-white shadow-md border-0">
              <CardHeader className="flex flex-col items-center">
                <BarChartHorizontal className="w-8 h-8 text-[#205A59] mb-2" />
                <CardTitle>4. Analytics & Optimization</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600 text-center">Monitor performance and optimize for growth and engagement.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">Why Choose Markov for Social Media Branding?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="w-10 h-10 text-[#2BC4C1] mb-3" />
              <h3 className="font-semibold text-lg mb-2">Brand Protection</h3>
              <p className="text-gray-600">Safeguard your reputation with proactive monitoring and crisis management.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <MessageCircle className="w-10 h-10 text-[#F79C42] mb-3" />
              <h3 className="font-semibold text-lg mb-2">Audience Engagement</h3>
              <p className="text-gray-600">Foster real connections and loyalty with interactive, authentic content.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CalendarCheck className="w-10 h-10 text-[#3B82F6] mb-3" />
              <h3 className="font-semibold text-lg mb-2">Consistent Presence</h3>
              <p className="text-gray-600">Maintain a steady, on-brand presence across all major platforms.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Lock className="w-10 h-10 text-[#205A59] mb-3" />
              <h3 className="font-semibold text-lg mb-2">Account Security</h3>
              <p className="text-gray-600">Protect your accounts from threats and unauthorized access.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-10 h-10 text-[#2BC4C1] mb-3" />
              <h3 className="font-semibold text-lg mb-2">Community Growth</h3>
              <p className="text-gray-600">Grow your audience with targeted campaigns and influencer outreach.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <TrendingUp className="w-10 h-10 text-[#F79C42] mb-3" />
              <h3 className="font-semibold text-lg mb-2">Measurable Results</h3>
              <p className="text-gray-600">Track ROI and campaign success with transparent analytics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gradient-to-r from-[#EAF6F6] to-[#F0F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">Social Media Platforms We Specialize In</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/facebook-icon.png" alt="Facebook" width={32} height={32} />
                <CardTitle>Facebook</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Brand storytelling, community building, and targeted ads for maximum reach.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/instagram-icon.png" alt="Instagram" width={32} height={32} />
                <CardTitle>Instagram</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Visual branding, influencer partnerships, and shoppable content.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/linkedin-icon.png" alt="LinkedIn" width={32} height={32} />
                <CardTitle>LinkedIn</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Professional branding, thought leadership, and B2B engagement.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/tiktok-icon.png" alt="TikTok" width={32} height={32} />
                <CardTitle>TikTok</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Creative short-form video and viral brand challenges.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/twitter-icon.png" alt="Twitter" width={32} height={32} />
                <CardTitle>Twitter</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Real-time engagement, brand voice, and customer support.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/pinterest-icon.png" alt="Pinterest" width={32} height={32} />
                <CardTitle>Pinterest</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Visual discovery, inspiration, and product promotion.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials/Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-r from-[#2BC4C1] to-[#3B82F6] text-white shadow-lg border-0">
              <CardHeader>
                <CardTitle>Moving Company</CardTitle>
                <CardDescription>+92% Engagement</CardDescription>
              </CardHeader>
              <CardContent>"Markov helped us build a loyal community and double our leads in 6 months!"</CardContent>
              <CardFooter className="text-xs">Industry: Logistics</CardFooter>
            </Card>
            <Card className="bg-gradient-to-r from-[#F79C42] to-[#FDBC78] text-[#205A59] shadow-lg border-0">
              <CardHeader>
                <CardTitle>Property Investment</CardTitle>
                <CardDescription>+120,000 Impressions</CardDescription>
              </CardHeader>
              <CardContent>"Our brand is now recognized as a thought leader in our niche, thanks to Markov's strategy."</CardContent>
              <CardFooter className="text-xs">Industry: Real Estate</CardFooter>
            </Card>
            <Card className="bg-gradient-to-r from-[#3B82F6] to-[#2BC4C1] text-white shadow-lg border-0">
              <CardHeader>
                <CardTitle>Ecommerce Store</CardTitle>
                <CardDescription>+45% Sales</CardDescription>
              </CardHeader>
              <CardContent>"We saw a huge boost in sales and brand loyalty after our rebrand with Markov."</CardContent>
              <CardFooter className="text-xs">Industry: E-commerce</CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-16 bg-gradient-to-r from-[#EAF6F6] to-[#F0F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-[#205A59] mb-10">Our Social Media Branding Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/branding-service.png" alt="Branding" width={32} height={32} />
                <CardTitle>Social Media Branding</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Brand strategy, visual identity, and messaging for all platforms.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/management-service.png" alt="Management" width={32} height={32} />
                <CardTitle>Social Media Management</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Content creation, scheduling, and community engagement.</CardContent>
            </Card>
            <Card className="bg-white shadow border-0">
              <CardHeader className="flex flex-row items-center gap-3">
                <Image src="/advertising-service.png" alt="Advertising" width={32} height={32} />
                <CardTitle>Social Media Advertising</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-600">Targeted ad campaigns to grow your brand and reach new audiences.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#2BC4C1] to-[#3B82F6] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Social Brand?</h2>
          <p className="mb-8 max-w-xl mx-auto">Let Markov's experts help you build a powerful, memorable brand on social media. Get your free proposal today!</p>
          <Button className="bg-white text-[#2BC4C1] hover:bg-gray-100 font-bold text-lg px-8 py-4">Get Started</Button>
        </div>
      </section>
    </div>
  )
} 