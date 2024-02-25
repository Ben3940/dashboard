import Database, { Statement } from 'better-sqlite3';

export class Controller {
  private db: Database;

  constructor() {
    this.db = new Database('./server/dist/db.db');
    this.db.pragma('journal_mode = WAL');
  }

  get_products(start_idx = undefined, range = 0) {
    let stmt: Statement;
    if (start_idx >= 0) {
      stmt = this.db.prepare(
        `SELECT * FROM Products WHERE ID BETWEEN ${start_idx} AND ${
          start_idx + range
        }`
      );
    } else {
      stmt = this.db.prepare('SELECT * FROM Products');
    }
    return stmt.all();
  }

  get_locations() {
    const stmt: Statement = this.db.prepare('SELECT * FROM Locations LIMIT 10');
    return stmt.all();
  }

  get_sales() {
    const stmt: Statement = this.db.prepare('SELECT * FROM Sales LIMIT 10');
    return stmt.all();
  }
}