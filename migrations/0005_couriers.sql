-- Motoboy roster with WhatsApp numbers
create table if not exists couriers (
  id text primary key,
  name text not null,
  phone text not null default '',
  active integer not null default 1,
  created_at timestamptz not null default now()
);

alter table orders add column if not exists courier_id text;
create index if not exists couriers_active_idx on couriers (active);
