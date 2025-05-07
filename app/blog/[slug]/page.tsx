import Link from 'next/link';

// Define the params type for this dynamic route
type Params = {
  slug: string;
};

// Define the props type for the page component
type Props = {
  params: Params;
  searchParams: Record<string, string | string[] | undefined>;
};

export default function Page(props: Props) {
  const { slug } = props.params;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Post: {slug}</h1>
      <p className="mb-4">This is the content for {slug}</p>
      <Link href="/blog" className="text-blue-500 hover:underline">
        Back to blog
      </Link>
    </div>
  );
} 