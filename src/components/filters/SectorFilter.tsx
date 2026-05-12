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
    <div>
      <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">Sector</label>
      <select 
        value={currentSector}
        onChange={(e) => handleSectorChange(e.target.value)}
        className="w-full p-2 rounded-md border border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
      >
        <option value="">All Sectors</option>
        {[1, 2, 3, 4, 5, 6].map((s) => (
          <option key={s} value={s.toString()}>Sector {s}</option>
        ))}
      </select>
    </div>
  );
}
