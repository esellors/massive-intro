CREATE TABLE inventory (
  inventory_id SERIAL PRIMARY KEY,
  item_name TEXT NOT NULL,
  item_desc TEXT NOT NULL,
  item_count INTEGER NOT NULL,
  item_added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);