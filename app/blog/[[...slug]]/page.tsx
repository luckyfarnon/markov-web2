import Link from 'next/link';

// The catch-all route pattern recommended for Next.js 15
export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return <div>Page</div>;
} 