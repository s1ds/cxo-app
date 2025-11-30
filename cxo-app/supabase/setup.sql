-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- USERS TABLE
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

-- CONTENT TABLE
create table public.content (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  summary text,
  body text,
  type text check (type in ('Daily Signal', 'Weekly Deep Read', 'Explainer')) not null,
  vertical text,
  source_url text,
  published_at timestamp with time zone default timezone('utc'::text, now()) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- USER PREFERENCES (Topics)
create table public.user_preferences (
  user_id uuid references public.users(id) on delete cascade not null,
  topic text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (user_id, topic)
);

-- READING HISTORY
create table public.reading_history (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.users(id) on delete cascade not null,
  content_id uuid references public.content(id) on delete cascade not null,
  read_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES
alter table public.users enable row level security;
alter table public.content enable row level security;
alter table public.user_preferences enable row level security;
alter table public.reading_history enable row level security;

create policy "Users can view their own profile" on public.users
  for select using (auth.uid() = id);

create policy "Users can update their own profile" on public.users
  for update using (auth.uid() = id);

create policy "Content is viewable by authenticated users" on public.content
  for select using (auth.role() = 'authenticated');

create policy "Users can view their own preferences" on public.user_preferences
  for select using (auth.uid() = user_id);

create policy "Users can update their own preferences" on public.user_preferences
  for all using (auth.uid() = user_id);
