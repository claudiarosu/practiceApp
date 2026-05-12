# Core Data Models

## School Entity
- `id`: UUID
- `name`: String
- `type`: Enum (Public, Private, International)
- `level`: Array (Kindergarten, Primary, Middle, High)
- `sector`: Integer (1-6)
- `address`: String
- `coordinates`: Point (Lat, Long)
- `website`: String
- `phone`: String
- `description`: Text
- `amenities`: Array (Canteen, Sports Hall, After-school, etc.)

## Metrics & Performance
- `avg_evaluarea_nationala`: Decimal
- `passing_rate_bac`: Decimal
- `aracip_rating`: String

## User Review
- `id`: UUID
- `school_id`: FK
- `user_id`: FK
- `rating`: Integer (1-5)
- `comment`: Text
- `verified_parent`: Boolean
- `created_at`: Timestamp
