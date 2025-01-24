import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 text-gray-900">
            Kyle's Travel Blog
          </h1>
          <p className="text-xl text-gray-600">
            Join me on my journey around the world!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured blog posts will go here */}
          {/* This is a placeholder card */}
          <div className="rounded-lg overflow-hidden shadow-lg bg-white">
            <div className="relative h-48">
              <Image
                src="/images/home/kyle_linkedin.jpg"
                alt="Travel destination"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                Latest Adventure
              </h2>
              <p className="text-gray-600">Coming soon...</p>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 text-center text-gray-600">
        <p>
          © {new Date().getFullYear()} Kyle's Travel Blog. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
