import Link from 'next/link';

// Alternative approach using search parameters instead of dynamic routes
export default function BlogPostsPage({
  searchParams,
}: {
  searchParams: { slug?: string };
}) {
  const slug = searchParams.slug;

  // If no slug provided, show list of available posts
  if (!slug) {
    return (
      <div className="p-4">
        <h1>Blog Posts</h1>
        <ul>
          <li>
            <Link href="/blog-posts?slug=future-of-bpo-2024">
              The Future of Business Process Outsourcing in 2024
            </Link>
          </li>
          <li>
            <Link href="/blog-posts?slug=cloud-migration-benefits">
              5 Ways Cloud Migration Enhances IT Infrastructure Resilience
            </Link>
          </li>
        </ul>
        <Link href="/blog">Back to main blog</Link>
      </div>
    );
  }

  // Display the selected blog post
  return (
    <div className="p-4">
      <h1>Blog Post: {slug}</h1>
      <p>Content for {slug}</p>
      <Link href="/blog-posts">Back to posts</Link>
    </div>
  );
} 