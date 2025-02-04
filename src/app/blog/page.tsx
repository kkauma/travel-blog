import Image from "next/image";

export default function Blog() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-12">Travel Stories</h1>

        <div className="grid grid-cols-1 gap-12">
          {/* This is a placeholder blog post */}
          <article className="border-b border-gray-200 pb-12">
            <div className="relative h-[400px] mb-6">
              <Image
                src="/images/blog/Kyle_Katherine_Maui_Cruise.jpg" // You'll need to add this image
                alt="Blog post"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4">Sailing in Santorini</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Santorini was one of our favorite places we've visited, and is a
              trip we won't forget!
            </p>
            <button className="text-blue-600 dark:text-blue-400 font-semibold">
              Read more →
            </button>
          </article>
        </div>
      </main>
    </div>
  );
}
