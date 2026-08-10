-- Supabase 프로젝트의 SQL Editor에 붙여넣고 실행하세요.

create table if not exists public.estimates (
  user_id uuid primary key references auth.users (id) on delete cascade,
  pyeong text,
  bathroom_count int,
  profile_name text,
  selections jsonb,
  updated_at timestamptz default now()
);

alter table public.estimates enable row level security;

create policy "Users can view own estimate"
  on public.estimates for select
  using (auth.uid() = user_id);

create policy "Users can insert own estimate"
  on public.estimates for insert
  with check (auth.uid() = user_id);

create policy "Users can update own estimate"
  on public.estimates for update
  using (auth.uid() = user_id);
