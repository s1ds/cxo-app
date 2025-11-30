-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. USERS TABLE
-- Extends the default auth.users table
create table public.users (
  id uuid references auth.users not null primary key,
  email text unique not null,
  full_name text,
  industry text,
  role text,
  subscription_tier text check (subscription_tier in ('Starter', 'Professional', 'Executive')) default 'Starter',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. ARTICLES TABLE
-- Stores the content
create table public.articles (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  summary_bullets text[] default '{}', -- Array of strings for bullets
  full_text text,
  source_url text,
  vertical_tag text,
  published_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. USER_FEEDS TABLE
-- Connects Users to Articles (Many-to-Many with state)
create table public.user_feeds (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  article_id uuid references public.articles(id) on delete cascade not null,
  is_read boolean default false,
  is_saved boolean default false,
  interacted_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, article_id)
);

-- 4. CHAT_LOGS TABLE
-- History for 'Ask Anything'
create table public.chat_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  query text not null,
  response text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- ROW LEVEL SECURITY (RLS)

-- Enable RLS on all tables
alter table public.users enable row level security;
alter table public.articles enable row level security;
alter table public.user_feeds enable row level security;
alter table public.chat_logs enable row level security;

-- USERS POLICIES
-- Users can view their own profile
create policy "Users can view own profile" on public.users
  for select using (auth.uid() = id);
-- Users can update their own profile
create policy "Users can update own profile" on public.users
  for update using (auth.uid() = id);

-- ARTICLES POLICIES
-- Articles are public to all authenticated users (assuming shared content model)
create policy "Articles are viewable by all authenticated users" on public.articles
  for select using (auth.role() = 'authenticated');
-- Only service_role (admin) can insert/update articles (implicit default deny for others)

-- USER_FEEDS POLICIES
-- Users can view their own feed entries
create policy "Users can view own feed" on public.user_feeds
  for select using (auth.uid() = user_id);
-- Users can update their own feed entries (e.g. mark read/saved)
create policy "Users can update own feed" on public.user_feeds
  for update using (auth.uid() = user_id);
-- Users can insert into their own feed (if applicable, or system does it)
create policy "Users can insert into own feed" on public.user_feeds
  for insert with check (auth.uid() = user_id);

-- CHAT_LOGS POLICIES
-- Users can view their own chat history
create policy "Users can view own chat logs" on public.chat_logs
  for select using (auth.uid() = user_id);
-- Users can insert their own chat logs
create policy "Users can insert own chat logs" on public.chat_logs
  for insert with check (auth.uid() = user_id);

-- TRIGGER FOR NEW USERS
-- Automatically create a public.users entry when a new auth.users is created
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
