# CXO Knowledge Service

## Overview
This project is a full-stack application for the CXO Knowledge Service, designed to deliver automated, personalized intelligence to executives.

## Architecture

### 1. Web Platform (`/web`)
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS with "Premium Executive" aesthetic.
- **Language**: TypeScript

### 2. Mobile Platform (`/cxo-mobile`)
- **Framework**: React Native (Expo)
- **Language**: TypeScript

### 3. Backend (`/supabase`)
- **Database**: PostgreSQL (Supabase)
- **Auth**: Supabase Auth

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Web App
1. Navigate to `/web`
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`

### Mobile App
1. Navigate to `/cxo-mobile`
2. Install dependencies: `npm install`
3. Run Expo: `npx expo start`

### Database
1. Create a new project on Supabase.
2. Run the script in `/supabase/setup.sql` in the Supabase SQL Editor.
