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

  get_sales() {
    const stmt: Statement = this.db.prepare('SELECT * FROM Sales LIMIT 10');
    return stmt.all();
  }

  get_table_items(table_name: String, start_idx = undefined, range = 0) {
    let stmt: Statement;
    if (start_idx >= 0) {
      stmt = this.db.prepare(
        `SELECT * FROM ${table_name} WHERE ID BETWEEN ${start_idx} AND ${
          start_idx + range
        }`
      );
    } else {
      stmt = this.db.prepare(`SELECT * FROM ${table_name} LIMIT 20`);
    }

    return stmt.all();
  }

  get_category_quantities() {
    const stmt: Statement = this.db.prepare(
      `SELECT Category, SUM(Quantity) as Quantity
      FROM Products
      GROUP BY Category`
    );

    return stmt.all();
  }

  get_city_profits() {
    const stmt: Statement = this.db.prepare(
      `SELECT L.City AS City, P.Category AS Category, SUM(S.Profit) AS Profit
       FROM Locations AS L
       JOIN Products AS P
       ON L.Product_ID = P.ID
       JOIN Sales AS S
       ON P.ID = S.Product_ID
       GROUP BY City, Category
       ORDER BY City
       LIMIT 10`
    );
  }
}
