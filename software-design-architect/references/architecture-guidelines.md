# Web Architecture Guidelines

## Tech Stack Recommendations
- **Frontend:** React (with TypeScript) for interactive maps and filtering. Use Next.js if SEO is a priority (crucial for school discovery).
- **Backend:** Node.js with Express or Fastify.
- **Database:** 
    - PostgreSQL for structured school data and complex filtering.
    - MongoDB if school details are highly variable/document-like.
    - PostGIS extension for geographic proximity searches ("schools near me").

## Key Features Design
- **Search & Filter:** faceted search (by sector, type, rating, price for private).
- **Map Integration:** Leaflet or Google Maps for visualizing school locations.
- **User Reviews:** Authenticated reviews from verified parents.
- **Comparison Engine:** Side-by-side comparison of 2-3 schools.

## Performance & Scalability
- **Caching:** Use Redis for frequent searches.
- **Images:** Optimize school photos via a CDN.
- **SEO:** Structured data (Schema.org) for `School` entities.
