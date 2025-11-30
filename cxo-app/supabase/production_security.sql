-- PRODUCTION SECURITY POLICIES
-- Run this to secure the database for production

-- 1. Enable RLS on all tables (Idempotent)
alter table public.users enable row level security;
alter table public.articles enable row level security;
alter table public.user_feeds enable row level security;
alter table public.chat_logs enable row level security;

-- 2. Drop existing policies to ensure clean state
drop policy if exists "Users can view own profile" on public.users;
drop policy if exists "Users can update own profile" on public.users;
drop policy if exists "Articles are viewable by all authenticated users" on public.articles;
drop policy if exists "Users can view own feed" on public.user_feeds;
drop policy if exists "Users can update own feed" on public.user_feeds;
drop policy if exists "Users can insert into own feed" on public.user_feeds;
drop policy if exists "Users can view own chat logs" on public.chat_logs;
drop policy if exists "Users can insert own chat logs" on public.chat_logs;

-- 3. Define New Policies

-- USERS
-- Users can view and update their own profile
create policy "Users can view own profile" on public.users
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.users
  for update using (auth.uid() = id);

-- ARTICLES
-- Allow public SELECT access (Authenticated + Anon)
create policy "Public read access to articles" on public.articles
  for select using (true);

-- USER_FEEDS
-- Allow only the authenticated user to SELECT and UPDATE their own rows
create policy "Users can view own feed" on public.user_feeds
  for select using (auth.uid() = user_id);

create policy "Users can update own feed" on public.user_feeds
  for update using (auth.uid() = user_id);

-- Allow users to insert (if needed for saving/interactions)
create policy "Users can insert into own feed" on public.user_feeds
  for insert with check (auth.uid() = user_id);

-- CHAT_LOGS
-- Users can view and insert their own chat logs
create policy "Users can view own chat logs" on public.chat_logs
  for select using (auth.uid() = user_id);

create policy "Users can insert own chat logs" on public.chat_logs
  for insert with check (auth.uid() = user_id);

-- DELETE PROTECTION
-- No DELETE policies are defined for any table.
-- This implicitly DENIES all DELETE operations for all roles (anon, authenticated).
-- The 'service_role' (admin) bypasses RLS and can still DELETE.
