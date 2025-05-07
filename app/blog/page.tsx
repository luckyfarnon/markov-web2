"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search, Calendar, Clock, ChevronRight, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// Sample blog data
const BLOG_POSTS = [
  {
    id: "1",
    title: "The Future of Business Process Outsourcing in 2024",
    excerpt: "Discover how AI, automation, and hybrid work models are transforming BPO services and creating new opportunities for businesses worldwide.",
    imageUrl: "/placeholder.svg?height=720&width=1280&text=BPO+Trends",
    category: "BPO",
    author: "Sarah Johnson",
    authorRole: "CEO",
    authorImage: "/placeholder.svg?height=100&width=100&text=SJ",
    date: "May 12, 2024",
    readTime: "8 min read",
    featured: true,
    tags: ["BPO", "Automation", "AI", "Business Strategy"]
  },
  {
    id: "2",
    title: "5 Ways Cloud Migration Enhances IT Infrastructure Resilience",
    excerpt: "Learn how migrating to cloud infrastructure can improve security, scalability, and disaster recovery capabilities for modern enterprises.",
    imageUrl: "/placeholder.svg?height=720&width=1280&text=Cloud+Migration",
    category: "IT Solutions",
    author: "Michael Zhang",
    authorRole: "CTO",
    authorImage: "/placeholder.svg?height=100&width=100&text=MZ",
    date: "May 5, 2024",
    readTime: "6 min read",
    featured: true,
    tags: ["Cloud Computing", "IT Infrastructure", "Digital Transformation"]
  },
  {
    id: "3",
    title: "The 5G Revolution: Transforming Telecommunication Services",
    excerpt: "Explore how 5G technology is reshaping telecommunication services and enabling unprecedented innovation across industries.",
    imageUrl: "/placeholder.svg?height=720&width=1280&text=5G+Revolution",
    category: "Telecommunication",
    author: "James Wilson",
    authorRole: "Head of Telecommunication",
    authorImage: "/placeholder.svg?height=100&width=100&text=JW",
    date: "April 28, 2024",
    readTime: "5 min read",
    featured: false,
    tags: ["5G", "Telecommunication", "IoT", "Connectivity"]
  },
  {
    id: "4",
    title: "Content Marketing Strategies That Drive Measurable ROI",
    excerpt: "Discover actionable content marketing approaches that not only engage audiences but also deliver measurable business results.",
    imageUrl: "/placeholder.svg?height=720&width=1280&text=Content+Marketing",
    category: "Digital Marketing",
    author: "Aisha Khan",
    authorRole: "Head of Digital Marketing",
    authorImage: "/placeholder.svg?height=100&width=100&text=AK",
    date: "April 21, 2024",
    readTime: "7 min read",
    featured: false,
    tags: ["Content Marketing", "ROI", "Digital Strategy"]
  },
  {
    id: "5",
    title: "Optimizing Customer Experience in E-Commerce Platforms",
    excerpt: "Learn essential strategies for enhancing user experience, streamlining checkout processes, and increasing conversion rates on e-commerce platforms.",
    imageUrl: "/placeholder.svg?height=720&width=1280&text=E-Commerce+UX",
    category: "E-Commerce Management",
    author: "Daniel Brown",
    authorRole: "Head of E-Commerce",
    authorImage: "/placeholder.svg?height=100&width=100&text=DB",
    date: "April 14, 2024",
    readTime: "9 min read",
    featured: false,
    tags: ["E-Commerce", "UX Design", "Conversion Optimization"]
  },
  {
    id: "6",
    title: "Building High-Performance Call Center Teams in Remote Settings",
    excerpt: "Strategies for recruiting, training, and managing successful call center teams in distributed and remote work environments.",
    imageUrl: "/placeholder.svg?height=720&width=1280&text=Remote+Call+Centers",
    category: "Call Center Solutions",
    author: "Grace Liu",
    authorRole: "Head of Call Center",
    authorImage: "/placeholder.svg?height=100&width=100&text=GL",
    date: "April 7, 2024",
    readTime: "6 min read",
    featured: false,
    tags: ["Call Centers", "Remote Work", "Team Management"]
  },
];

// All unique categories from blog posts
const ALL_CATEGORIES = Array.from(new Set(BLOG_POSTS.map(post => post.category)));

// All unique tags from blog posts
const ALL_TAGS = Array.from(new Set(BLOG_POSTS.flatMap(post => post.tags)));

export default function BlogPage({ searchParams }: { searchParams: { post?: string } }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  
  // Check if we should show an individual post
  const postId = searchParams.post;
  
  if (postId) {
    return <BlogPost slug={postId} />;
  }
  
  // Filter blog posts based on search, category and tag
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Featured posts
  const featuredPosts = BLOG_POSTS.filter(post => post.featured);
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-800 to-teal-700 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={staggerContainer}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h1 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-4">
                Insights & Expertise
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-8">
                Stay updated with the latest trends, strategies, and insights in business services and technology
              </motion.p>
              <motion.div variants={fadeInUp} className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-3 w-full rounded-full bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-100/60 focus:ring-2 focus:ring-white/30 focus:border-transparent"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Featured Articles Section */}
        {featuredPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow group">
                      <CardContent className="p-0">
                        <div className="relative h-64 md:h-72">
                          <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-6">
                            <Badge className="bg-blue-600 hover:bg-blue-700 mb-2">{post.category}</Badge>
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{post.title}</h3>
                            <div className="flex items-center text-white/80 text-sm">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{post.date}</span>
                              <span className="mx-2">•</span>
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="relative w-10 h-10 mr-3 overflow-hidden rounded-full">
                                <Image 
                                  src={post.authorImage}
                                  alt={post.author}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                <p className="text-xs text-gray-500">{post.authorRole}</p>
                              </div>
                            </div>
                            <Link href={`/blog?post=${post.id}`} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                              Read more <ChevronRight className="ml-1 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Main Blog Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === null ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                    >
                      All Categories
                    </button>
                    {ALL_CATEGORIES.map(category => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`block w-full text-left px-3 py-2 rounded-md transition-colors ${selectedCategory === category ? 'bg-blue-100 text-blue-800' : 'hover:bg-gray-100'}`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {ALL_TAGS.map(tag => (
                      <Badge
                        key={tag}
                        variant={selectedTag === tag ? "default" : "outline"}
                        className={`cursor-pointer ${selectedTag === tag ? 'bg-blue-600' : 'hover:bg-gray-100'}`}
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Blog Posts */}
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">All Articles</h2>
                  <p className="text-gray-500">{filteredPosts.length} articles</p>
                </div>
                
                {filteredPosts.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <p className="text-gray-500 mb-4">No articles found matching your criteria</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory(null);
                        setSelectedTag(null);
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                ) : (
                  <motion.div 
                    initial="hidden" 
                    animate="visible" 
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        variants={fadeInUp}
                        className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="relative h-48">
                          <Image
                            src={post.imageUrl}
                            alt={post.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-gray-500 text-sm mb-3">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
                          <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="relative w-8 h-8 mr-2 overflow-hidden rounded-full">
                                <Image 
                                  src={post.authorImage}
                                  alt={post.author}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-xs text-gray-700">{post.author}</p>
                            </div>
                            <Link href={`/blog?post=${post.id}`} className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                              Read article <ChevronRight className="ml-1 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
                  <p className="text-blue-100 mb-8">
                    Subscribe to receive the latest insights, updates, and industry trends directly in your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white focus:border-transparent"
                    />
                    <Button className="bg-white text-blue-700 hover:bg-blue-50 hover:text-blue-800">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-sm text-blue-100 mt-3">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
                <div className="relative hidden md:block">
                  <div className="absolute right-0 bottom-0 w-full h-full overflow-hidden">
                    <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" width="600" height="400" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="500" cy="150" r="300" fill="url(#paint0_radial)" fillOpacity="0.4" />
                      <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(500 150) rotate(90) scale(300)">
                          <stop stopColor="white" />
                          <stop offset="1" stopColor="white" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                  <Image 
                    src="/placeholder.svg?height=400&width=600&text=Newsletter" 
                    alt="Newsletter"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Add the BlogAlternateLinks component to the page */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <BlogAlternateLinks />
        </div>
      </section>
    </div>
  )
}

// Add links to the dynamic route blog posts or the alternative approach with search parameters
export function BlogAlternateLinks() {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Alternative Blog Access</h2>
      <p className="mb-4">You can access blog posts through:</p>
      <ul className="list-disc pl-6 mb-4">
        <li className="mb-2">
          <a href="/blog-posts?slug=future-of-bpo-2024" className="text-blue-600 hover:underline">
            Query parameter approach: /blog-posts?slug=post-name
          </a>
        </li>
        <li className="mb-2">
          <a href="/blog-catch?slug=future-of-bpo-2024" className="text-blue-600 hover:underline">
            Alternative approach: /blog-catch?slug=post-name
          </a>
        </li>
        <li>
          <a href="/blog?post=1" className="text-blue-600 hover:underline">
            Main blog approach: /blog?post=post-id
          </a>
        </li>
      </ul>
    </div>
  );
}

// Add the BlogPost component at the end
function BlogPost({ slug }: { slug: string }) {
  // Simplified version for demo purposes 
  // Find the matching blog post by ID or slug
  const post = BLOG_POSTS.find(p => p.id === slug);

  if (!post) {
    return (
      <div className="container mx-auto p-4 mt-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="mb-4">The blog post you are looking for could not be found.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 mt-8">
      <Link href="/blog" className="inline-flex items-center mb-4 text-blue-600 hover:text-blue-800">
        <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
        Back to all posts
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-64 md:h-96">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center mb-6">
            <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full">
              <Image 
                src={post.authorImage}
                alt={post.author}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-medium">{post.author}</p>
              <p className="text-sm text-gray-500">{post.authorRole}</p>
            </div>
            <div className="ml-6 flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="w-4 h-4 mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg">{post.excerpt}</p>
            <p>This is a placeholder for the full blog post content. In a real application, this would be the actual content of the blog post, potentially with rich formatting, images, and other elements.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add a function at the end of the file to detect if we're viewing a blog post
export function shouldShowBlogPost(url: URL): boolean {
  return !!url.searchParams.get('post');
} 