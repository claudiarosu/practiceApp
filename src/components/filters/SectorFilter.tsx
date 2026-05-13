'use client';

import { useRouter, useSearchParams } from 'next/navigation';

export function SectorFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSector = searchParams.get('sector') || '';

  const handleSectorChange = (sector: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (sector) {
      params.set('sector', sector);
    } else {
      params.delete('sector');
    }
    router.push(`/schools?${params.toString()}`);
  };

  return (
    <div className="space-y-3">
      <label className="text-sm font-bold text-foreground block">
        Administrative Sector
      </label>
      <div className="relative group">
        <select 
          value={currentSector}
          onChange={(e) => handleSectorChange(e.target.value)}
          className="w-full h-11 bg-muted/50 border border-border rounded-xl px-4 text-sm font-medium appearance-none focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all cursor-pointer group-hover:bg-muted"
        >
          <option value="">All Bucharest Sectors</option>
          {[1, 2, 3, 4, 5, 6].map((s) => (
            <option key={s} value={s.toString()}>Sector {s}</option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground group-hover:text-primary transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
      </div>
      <p className="text-[10px] text-muted-foreground italic">
        Select a sector to see localized results.
      </p>
    </div>
  );
}
