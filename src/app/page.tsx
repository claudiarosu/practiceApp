import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <header className="w-full py-6 px-8 bg-white border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          Bucharest School Search
        </h1>
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full text-center space-y-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
            Find the best school for your child in Bucharest
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400">
            Compare performance metrics, read verified parent reviews, and find schools near you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/schools" className="h-12 px-8 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 flex items-center justify-center">
              Start Searching
            </Link>
            <Link href="/map" className="h-12 px-8 rounded-lg border border-zinc-300 text-zinc-700 font-medium hover:bg-zinc-100 transition-colors dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-900 flex items-center justify-center">
              View Map
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-8 px-8 border-t border-zinc-200 dark:border-zinc-800 text-center text-zinc-500 dark:text-zinc-400">
        <p>&copy; 2026 Bucharest School Search. All rights reserved.</p>
      </footer>
    </div>
  );
}
