-- Payment proofs linked to invoice + customer phone
alter table orders add column if not exists pay_verified boolean not null default false;
alter table orders add column if not exists pay_verified_at timestamptz;

create table if not exists receipts (
  id text primary key,
  order_id text not null,
  customer_id text not null,
  phone text not null,
  filename text not null,
  mime text not null,
  bytes integer not null,
  data_b64 text not null,
  created_at timestamptz not null default now()
);

create index if not exists receipts_order_idx on receipts (order_id);
create index if not exists receipts_phone_idx on receipts (phone);
create index if not exists receipts_created_idx on receipts (created_at desc);
create index if not exists orders_pay_verified_idx on orders (pay_verified);
