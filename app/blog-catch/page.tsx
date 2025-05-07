import Link from 'next/link';

// This approach uses query parameters instead of dynamic routes
export default function BlogCatchPage({
  searchParams,
}: {
  searchParams: { slug?: string };
}) {
  const slug = searchParams.slug;

  // If no slug provided, show a message
  if (!slug) {
    return (
      <div className="p-4">
        <h1>Blog Catch-All Page</h1>
        <p>Please provide a slug as a query parameter.</p>
        <p>Example: <code>/blog-catch?slug=my-post</code></p>
        <Link href="/blog">Back to Blog</Link>
      </div>
    );
  }

  // Display the blog post for the requested slug
  return (
    <div className="p-4">
      <h1>Blog Post: {slug}</h1>
      <p>Content for {slug}</p>
      <Link href="/blog">Back to Blog</Link>
    </div>
  );
} 