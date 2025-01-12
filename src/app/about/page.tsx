import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/about-me.jpg" // You'll need to add this image
              alt="About me"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div>
            <p className="text-lg mb-4">
              Welcome to my travel blog! I'm [Your Name], a passionate
              traveler...
            </p>
            <p className="text-lg mb-4">
              Through this blog, I share my adventures, tips, and stories...
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
