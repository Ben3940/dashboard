import Database, { Statement } from 'better-sqlite3';

export class Controller {
  private db: Database;

  constructor() {
    this.db = new Database('./server/dist/db.db');
    this.db.pragma('journal_mode = WAL');
  }

  get_locations() {
    const stmt: Statement = this.db.prepare('SELECT * FROM Locations LIMIT 10');
    return stmt.all();
  }
}
