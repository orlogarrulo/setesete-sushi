-- Unique rider link, distinct from the public tracking token
alter table orders add column if not exists rider_token text;
create unique index if not exists orders_rider_idx on orders (rider_token);
