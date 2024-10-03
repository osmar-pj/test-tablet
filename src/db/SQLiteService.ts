// db/SQLiteService.ts
import {
  CapacitorSQLite,
  SQLiteDBConnection,
} from "@capacitor-community/sqlite";

class SQLiteService {
  private db: SQLiteDBConnection | any = null;

  async initDB() {
    // Crear conexión a la base de datos
    await CapacitorSQLite.createConnection({
      database: "mydatabase.db",
    });

    // Obtener la conexión
    this.db = await CapacitorSQLite.isDatabase({ database: "mydatabase.db" });

    // Crear la tabla
    await this.createTable();
  }

  async createTable() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS my_table (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        value TEXT
      )
    `;
    await this.db?.execute(createTableQuery);
  }

  async addData(name: string, value: string) {
    const insertQuery = `INSERT INTO my_table (name, value) VALUES (?, ?)`;
    await this.db?.run(insertQuery, [name, value]);
  }

  async getData() {
    const selectQuery = `SELECT * FROM my_table`;
    const result = await this.db?.query(selectQuery);
    return result?.values || [];
  }

  async closeDB() {
    if (this.db) {
      await this.db.close();
      this.db = null;
    }
  }
}

const sqliteService = new SQLiteService();
export default sqliteService;
