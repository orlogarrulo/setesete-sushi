-- Sete Sete operations: orders, tracking, CRM (unowned restaurant rows)
create table if not exists customers (
  id text primary key,
  phone text not null unique,
  name text not null,
  zone text not null default '',
  notes text not null default '',
  tags text not null default '[]',
  created_at timestamptz not null default now(),
  last_order_at timestamptz
);

create table if not exists orders (
  id text primary key,
  track_token text not null unique,
  customer_id text not null,
  customer_name text not null,
  phone text not null,
  address text not null,
  zone text not null,
  origin_lat double precision not null,
  origin_lng double precision not null,
  dest_lat double precision not null,
  dest_lng double precision not null,
  notes text not null default '',
  pay text not null,
  receipt_name text,
  status text not null,
  total integer not null,
  items_json text not null,
  eta_min integer not null default 35,
  courier_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  dispatched_at timestamptz,
  delivered_at timestamptz
);

create table if not exists order_events (
  id serial primary key,
  order_id text not null,
  status text not null,
  note text not null default '',
  created_at timestamptz not null default now()
);

create table if not exists crm_notes (
  id serial primary key,
  customer_id text not null,
  body text not null,
  author text not null default 'Casa',
  created_at timestamptz not null default now()
);

create index if not exists orders_status_idx on orders (status);
create index if not exists orders_customer_idx on orders (customer_id);
create index if not exists orders_created_idx on orders (created_at desc);
create index if not exists orders_token_idx on orders (track_token);
create index if not exists order_events_order_idx on order_events (order_id);
create index if not exists crm_notes_customer_idx on crm_notes (customer_id);
