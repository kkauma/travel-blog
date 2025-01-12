import Image from "next/image";
import { notFound } from "next/navigation";

// This type defines the expected parameters for the page
type BlogPostParams = {
  params: {
    slug: string;
  };
};

// This is a placeholder for your blog post data
// In a real application, you would fetch this from a CMS or database
type BlogPost = {
  title: string;
  date: string;
  location: string;
  coverImage: string;
  content: string;
};

// This function would normally fetch your blog post data
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // This is just example data - replace with your actual data fetching logic
  const dummyPost: BlogPost = {
    title: "A Weekend in Paris",
    date: "2024-03-15",
    location: "Paris, France",
    coverImage: "/blog/paris-cover.jpg", // You'll need to add this image
    content: "Your blog post content goes here...",
  };

  // Simulate a database lookup
  return dummyPost;
}

export default async function BlogPost({ params }: BlogPostParams) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pb-20">
      {/* Hero Section with Full-width Image */}
      <div className="relative w-full h-[60vh] mb-8">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            <div className="flex items-center space-x-4 text-lg">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {/* Content section with rich text formatting */}
          <p className="text-lg leading-relaxed mb-6">{post.content}</p>

          {/* Example of how to include images within the content */}
          <div className="my-12">
            <div className="relative aspect-video">
              <Image
                src="/blog/paris-detail.jpg" // You'll need to add this image
                alt="Detail shot"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
              Caption for the image goes here
            </p>
          </div>

          {/* More content sections */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Section Title</h2>
          <p className="text-lg leading-relaxed mb-6">
            More content goes here...
          </p>
        </div>

        {/* Navigation between posts */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex justify-between">
            <button className="text-blue-600 dark:text-blue-400">
              ← Previous Post
            </button>
            <button className="text-blue-600 dark:text-blue-400">
              Next Post →
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

// Generate metadata for the page
export async function generateMetadata({ params }: BlogPostParams) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Wanderlust Chronicles`,
    description: post.content.slice(0, 160), // First 160 characters as description
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 160),
      images: [post.coverImage],
    },
  };
}
