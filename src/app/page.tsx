import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            Bucharest School Search
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/schools" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Schools
            </Link>
            <Link href="/map" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Map View
            </Link>
            <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>
          <Link href="/schools" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-soft">
            Start Searching
          </Link>
        </div>
      </nav>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden section-padding bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-blue-950/20 dark:via-background dark:to-background">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold mb-6 tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                New: 2026 Evaluation Data
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground mb-8 text-balance leading-[1.1]">
                Find the perfect <span className="text-primary italic">educational path</span> in Bucharest
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Empowering parents with comprehensive data, verified reviews, and proximity-based search to make the most important decision for their child&apos;s future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/schools" className="h-14 px-10 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md-soft flex items-center justify-center text-lg">
                  Browse Schools
                </Link>
                <Link href="/map" className="h-14 px-10 rounded-xl border border-border bg-background text-foreground font-bold hover:bg-muted transition-colors flex items-center justify-center text-lg">
                  Explore Map
                </Link>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full pointer-events-none hidden lg:block">
            <div className="relative w-full h-full">
              <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl delay-700 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding border-t border-border bg-slate-50/50 dark:bg-slate-950/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Why use our platform?</h2>
              <p className="text-muted-foreground">We collect and verify data from multiple official and community sources to give you the clearest picture possible.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Performance Data",
                  desc: "Detailed results from 'Evaluarea Națională' and 'Bacalaureat' over the last 5 years.",
                  icon: "📊"
                },
                {
                  title: "Verified Reviews",
                  desc: "Read honest feedback from parents and students currently enrolled in the schools.",
                  icon: "💬"
                },
                {
                  title: "Smart Filtering",
                  desc: "Find schools by sector, proximity to metro, or specific educational programs.",
                  icon: "🔍"
                }
              ].map((f, i) => (
                <div key={i} className="bg-background p-8 rounded-2xl border border-border shadow-soft hover:shadow-md-soft transition-all hover:-translate-y-1">
                  <div className="text-4xl mb-6">{f.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 px-6 bg-background">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-primary font-bold text-lg">Bucharest School Search</div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground transition-colors">Contact</Link>
          </div>
          <div className="text-sm text-muted-foreground">
            &copy; 2026 Bucharest School Search. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
