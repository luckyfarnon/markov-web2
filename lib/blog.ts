// Blog post type definition
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readingTime: string;
  author: string;
  featured?: boolean;
}

// Mock blog data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js 15',
    excerpt: 'Learn how to build modern web applications with Next.js 15, the React framework for production.',
    content: 'Next.js 15 introduces several new features that make building React applications even easier...',
    date: 'November 15, 2023',
    readingTime: '5 min read',
    author: 'John Doe',
    featured: true
  },
  {
    id: '2',
    slug: 'understanding-react-server-components',
    title: 'Understanding React Server Components',
    excerpt: 'Dive deep into React Server Components and learn how they can improve your application performance.',
    content: 'React Server Components represent a paradigm shift in how we build React applications...',
    date: 'December 1, 2023',
    readingTime: '7 min read',
    author: 'Jane Smith',
    featured: true
  },
  {
    id: '3',
    slug: 'optimizing-performance-in-react',
    title: 'Optimizing Performance in React Applications',
    excerpt: 'Learn techniques to improve the performance of your React applications.',
    content: 'Performance optimization is crucial for providing a smooth user experience in React applications...',
    date: 'December 15, 2023',
    readingTime: '10 min read',
    author: 'Alex Johnson'
  },
  {
    id: '4',
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices for 2024',
    excerpt: 'Stay ahead with the latest TypeScript best practices for modern web development.',
    content: 'TypeScript continues to evolve, and keeping up with best practices can help you write better code...',
    date: 'January 5, 2024',
    readingTime: '8 min read',
    author: 'Sarah Williams'
  },
  {
    id: '5',
    slug: 'building-accessible-uis',
    title: 'Building Accessible UIs with React',
    excerpt: 'Learn how to create accessible user interfaces using React and modern accessibility standards.',
    content: 'Accessibility is a critical aspect of web development that ensures your applications can be used by everyone...',
    date: 'January 20, 2024',
    readingTime: '6 min read',
    author: 'Michael Brown'
  }
];

/**
 * Get all blog posts
 */
export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

/**
 * Get a blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Get a blog post by ID
 */
export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id);
} 