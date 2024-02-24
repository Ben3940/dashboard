import Database, { Statement } from 'better-sqlite3';

export class Controller {
  private db: Database;

  constructor() {
    this.db = new Database('./server/dist/db.db');
    this.db.pragma('journal_mode = WAL');
  }

  get_products() {
    const stmt: Statement = this.db.prepare('SELECT * FROM Products LIMIT 10');
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
