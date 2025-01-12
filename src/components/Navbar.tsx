import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              Wanderlust Chronicles
            </Link>
          </div>

          <div className="flex items-center space-x-8">
            <Link href="/" className="hover:text-gray-600">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/blog" className="hover:text-gray-600">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
