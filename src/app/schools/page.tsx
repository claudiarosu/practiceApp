import { MOCK_SCHOOLS } from "@/lib/mock-data";
import Link from "next/link";
import { SectorFilter } from "@/components/filters/SectorFilter";
import { Suspense } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SchoolsPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const sectorFilter = typeof searchParams.sector === 'string' ? parseInt(searchParams.sector) : undefined;

  const schools = sectorFilter 
    ? MOCK_SCHOOLS.filter(s => s.sector === sectorFilter)
    : MOCK_SCHOOLS;

  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-200/50 dark:border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-primary">
            Bucharest School Search
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/map" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Map View
            </Link>
            <div className="h-4 w-px bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                JD
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-72 space-y-10">
            <div className="sticky top-32">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="text-primary">🔍</span> Filters
              </h3>
              
              <div className="space-y-8 p-6 bg-background rounded-2xl border border-border shadow-soft">
                <Suspense fallback={<div className="animate-pulse h-20 bg-muted rounded-lg" />}>
                  <SectorFilter />
                </Suspense>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold text-foreground">School Type</label>
                  <div className="space-y-2">
                    {['Public', 'Private', 'International'].map((type) => (
                      <label key={type} className="flex items-center gap-3 group cursor-pointer">
                        <div className="w-5 h-5 rounded border border-border group-hover:border-primary transition-colors flex items-center justify-center">
                          <div className="w-2.5 h-2.5 rounded-sm bg-primary opacity-0 group-hover:opacity-20 transition-opacity" />
                        </div>
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <button className="w-full py-2.5 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                    Reset All Filters
                  </button>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">Pro Tip</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Schools near metro stations usually have higher demand. Consider checking transport links.
                </p>
              </div>
            </div>
          </aside>

          {/* School List */}
          <section className="flex-1 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {schools.length} {schools.length === 1 ? 'School' : 'Schools'}
                  {sectorFilter && <span className="text-primary font-normal"> in Sector {sectorFilter}</span>}
                </h1>
                <p className="text-muted-foreground mt-1">Showing all matching institutions in Bucharest</p>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <select className="bg-background border border-border rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none">
                  <option>Top Rated</option>
                  <option>Performance</option>
                  <option>Distance</option>
                </select>
              </div>
            </div>

            <div className="grid gap-6">
              {schools.length > 0 ? (
                schools.map((school) => (
                  <div key={school.id} className="group bg-background p-8 rounded-2xl border border-border shadow-soft hover:shadow-md-soft hover:-translate-y-0.5 transition-all">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="px-2 py-0.5 rounded-md bg-muted text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                            Sector {school.sector}
                          </span>
                          <span className="w-1 h-1 rounded-full bg-border" />
                          <span className="text-xs font-medium text-primary">
                            {school.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {school.name}
                        </h3>
                        <p className="text-muted-foreground text-sm flex items-center gap-1.5 mb-6">
                          <span>📍</span> {school.address}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {school.levels.map(level => (
                            <span key={level} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold border border-primary/10">
                              {level.replace('_', ' ')}
                            </span>
                          ))}
                          {school.nearMetro && (
                            <span className="px-3 py-1 rounded-full bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 text-xs font-bold border border-green-100 dark:border-green-900/30 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                              Near Metro
                            </span>
                          )}
                        </div>
                      </div>

                      {school.avgEvalNationala && (
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-border text-center min-w-[140px]">
                          <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Performance</div>
                          <div className="text-3xl font-black text-primary mb-1">{school.avgEvalNationala}</div>
                          <div className="text-[10px] text-muted-foreground">Avg. Grade</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-8 mt-8 border-t border-border">
                      <div className="flex items-center gap-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted flex items-center justify-center text-[10px] font-bold overflow-hidden">
                              <span className="opacity-40">👤</span>
                            </div>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">12+ recent parent reviews</span>
                      </div>
                      
                      <button className="flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors">
                        Detailed Profile
                        <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-32 bg-background rounded-3xl border-2 border-dashed border-border">
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-xl font-bold mb-2">No matching schools</h3>
                  <p className="text-muted-foreground mb-8">Try adjusting your filters to see more results.</p>
                  <Link href="/schools" className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity">
                    Clear all filters
                  </Link>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
