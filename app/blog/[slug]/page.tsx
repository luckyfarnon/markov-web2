import { notFound } from 'next/navigation'
import { getBlogPostBySlug } from '@/lib/blog'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

// Updated server component with correct params typing for Next.js 15
export default async function BlogPostPage({
  params
}: {
  params: { slug: string }
}) {
  const post = getBlogPostBySlug(params.slug)
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
        <p className="mb-8">The blog post you are looking for could not be found.</p>
        <Button>
          <Link href="/blog">Return to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link 
        href="/blog" 
        className="inline-flex items-center mb-6 text-blue-600 hover:text-blue-800"
      >
        ← Back to all posts
      </Link>
      <article>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-8">
          {post.date} • {post.readingTime}
        </p>
        <div className="prose max-w-none">
          {post.content}
        </div>
      </article>
    </div>
  )
} 