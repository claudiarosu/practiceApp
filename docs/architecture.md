# Architecture & Tech Stack: Bucharest School Search

## Tech Stack Decisions

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Next.js 14+ (App Router)** | Excellent SEO for school names, fast performance with SSR, and integrated backend API routes. |
| **Language** | **TypeScript** | Ensures type safety for complex school metrics and user review data. |
| **Styling** | **Tailwind CSS + shadcn/ui** | Rapid UI development with accessible, modern components. |
| **Database** | **PostgreSQL (via Supabase)** | Relational data integrity; built-in support for geographic searches (PostGIS). |
| **ORM** | **Prisma** | Type-safe database queries and easy schema migrations. |
| **Authentication** | **NextAuth.js** | Seamless integration with Next.js for parent login and review verification. |
| **Maps** | **React Leaflet** | Interactive maps for Bucharest sectors without the cost of Google Maps API. |

## Refined Database Schema (Prisma)

```prisma
// This is your Prisma schema file

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum SchoolType {
  PUBLIC
  PRIVATE
  INTERNATIONAL
}

enum EducationLevel {
  KINDERGARTEN
  PRIMARY
  MIDDLE
  HIGH_SCHOOL
}

model School {
  id                String           @id @default(uuid())
  name              String
  type              SchoolType
  levels            EducationLevel[]
  sector            Int              // 1-6
  address           String
  latitude          Float?
  longitude         Float?
  website           String?
  phone             String?
  email             String?
  description       String?          @db.Text
  amenities         String[]         // e.g., ["Canteen", "After-school"]
  
  // Bucharest Specifics
  circumscription   String?          // Assigned district for public schools
  nearMetro         Boolean          @default(false)

  // Metrics (Latest year)
  avgEvalNationala  Decimal?         @db.Decimal(4, 2)
  passingRateBac    Decimal?         @db.Decimal(5, 2)
  aracipRating      String?          // e.g., "Excellent", "Good"

  reviews           Review[]
  createdAt         DateTime         @default(now())
  updatedAt         DateTime         @updatedAt
}

model Review {
  id              String   @id @default(uuid())
  schoolId        String
  school          School   @relation(fields: [schoolId], references: [id])
  userId          String
  rating          Int      // 1-5
  comment         String   @db.Text
  isVerifiedParent Boolean  @default(false)
  createdAt       DateTime @default(now())
}

model User {
  id    String @id @default(uuid())
  email String @unique
  name  String?
  role  String @default("PARENT") // PARENT, ADMIN
}
```

## Core Feature Flows
1. **The Proximity Search**: Users filter by Sector and "Near Metro" to find accessible schools.
2. **The Comparison Engine**: Side-by-side view of `avgEvalNationala` and `amenities` for selected schools.
3. **The Verified Review**: Parents log in via NextAuth to leave feedback, marked as "Verified" if they provide proof of enrollment (manual or future feature).
