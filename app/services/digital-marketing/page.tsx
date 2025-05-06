import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import { ContactLinkButton } from "@/components/ui/contact-link-button";

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden py-16">
      {/* Background Green Pattern */}
      <div className="absolute inset-0">
        <img
          src="/green-pattern.png" // ← Yahan apni background image ka path dena hai
          alt="Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
         Franchise Digital Marketing Services
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-green-700 mb-8">
        Unify Your Brand Presence and Maximize Revenue at Every Site
        </p>

        {/* Input and Button */}
        <div className="flex items-center justify-center bg-[#F8FBF6] p-2 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Enter Website Address"
              className="pl-10 pr-4 py-2 bg-[#F8FBF6] text-sm border border-green-100 focus:ring-2 focus:ring-green-200 focus:border-green-400"
            />
          </div>

          <ContactLinkButton href="/contact?type=digital-marketing" className="ml-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-md transition">
            GET MY FREE PROPOSAL
          </ContactLinkButton>
        </div>
      </div>
    </section>
  );
}
