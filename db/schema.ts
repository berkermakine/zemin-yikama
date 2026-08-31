export const shopStateTableSql = `
CREATE TABLE IF NOT EXISTS shop_state (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TEXT NOT NULL
)`;

export const ordersTableSql = `
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer TEXT NOT NULL,
  contact TEXT NOT NULL,
  address TEXT NOT NULL,
  total REAL NOT NULL,
  status TEXT NOT NULL,
  lines_json TEXT NOT NULL,
  created_at TEXT NOT NULL
)`;

export const ordersCreatedIndexSql = `
CREATE INDEX IF NOT EXISTS idx_orders_created_at
ON orders(created_at DESC)`;
