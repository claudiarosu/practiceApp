import prisma from "@/lib/prisma";
import { MOCK_SCHOOLS } from "@/lib/mock-data";
import Link from "next/link";
import { SectorFilter } from "@/components/filters/SectorFilter";
import { Suspense } from "react";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function SchoolsPage(props: { searchParams: SearchParams }) {
  const searchParams = await props.searchParams;
  const sectorFilter = typeof searchParams.sector === 'string' ? parseInt(searchParams.sector) : undefined;

  // In a real app with a DB, we would do:
  // const schools = await prisma.school.findMany({
  //   where: {
  //     ...(sectorFilter ? { sector: sectorFilter } : {}),
  //   },
  // });

  // For simulation/mock purposes:
  const schools = sectorFilter 
    ? MOCK_SCHOOLS.filter(s => s.sector === sectorFilter)
    : MOCK_SCHOOLS;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <header className="w-full py-6 px-8 bg-white border-b border-zinc-200 dark:bg-zinc-950 dark:border-zinc-800">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-white hover:opacity-80 transition-opacity">
            Bucharest School Search
          </Link>
          <div className="flex gap-4">
            <Link href="/map" className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              Map View
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 dark:text-white">Filters</h3>
              <div className="space-y-4">
                <Suspense fallback={<div>Loading filters...</div>}>
                  <SectorFilter />
                </Suspense>
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">School Type</label>
                  <select className="w-full p-2 rounded-md border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white" disabled>
                    <option value="">All Types (Coming Soon)</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* School List */}
          <section className="flex-1 space-y-6">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-bold dark:text-white">
                {schools.length} {schools.length === 1 ? 'School' : 'Schools'} Found
                {sectorFilter && <span className="text-zinc-500 font-normal text-lg"> in Sector {sectorFilter}</span>}
              </h2>
            </div>

            <div className="grid gap-6">
              {schools.length > 0 ? (
                schools.map((school) => (
                  <div key={school.id} className="bg-white dark:bg-zinc-950 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{school.name}</h3>
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">{school.address} • Sector {school.sector}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xs font-medium border border-zinc-200 dark:border-zinc-800">
                            {school.type}
                          </span>
                          {school.levels.map(level => (
                            <span key={level} className="px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-medium border border-blue-100 dark:border-blue-900/30">
                              {level.replace('_', ' ')}
                            </span>
                          ))}
                        </div>
                      </div>
                      {school.avgEvalNationala && (
                        <div className="text-right">
                          <div className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Avg. Grade</div>
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{school.avgEvalNationala}</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="flex gap-4">
                        {school.nearMetro && (
                          <span className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                            <span className="w-2 h-2 rounded-full bg-green-600 dark:bg-green-400" />
                            Near Metro
                          </span>
                        )}
                      </div>
                      <button className="text-sm font-semibold text-zinc-900 dark:text-white hover:underline">
                        View Details →
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-20 bg-white dark:bg-zinc-950 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800">
                  <p className="text-zinc-500 dark:text-zinc-400 text-lg">No schools found in this sector.</p>
                  <Link href="/schools" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">
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
