// db/SQLiteService.ts
import { CapacitorSQLite } from "@capacitor-community/sqlite";

class SQLiteService {
  async initDB() {
    try {
      let result = await CapacitorSQLite.isDBExists({ database: "undis.db" });
      if (result?.result) {
        return "exists DB";
      }
      await CapacitorSQLite.createConnection({
        database: "undis.db",
        // databasePath: 'undis.db',
      });
      await CapacitorSQLite.open({ database: "undis.db" }); // Abrir la conexión

      // CREAR TABLE
      await this.createTable();
      return "connected";
    } catch (error: any) {
      return error.message;
    }
  }

  async createTable() {
    await CapacitorSQLite.execute({
      database: "undis.db",
      statements:
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, value TEXT)",
    });
  }

  async addData(name: string, value: string) {
    await CapacitorSQLite.query({
      database: "undis.db",
      statement: "INSERT INTO users (name, value) VALUES (?, ?)",
      values: [name, value],
    });
  }

  async getData() {
    let result: any = await CapacitorSQLite.query({
      database: "undis.db",
      statement: "SELECT * FROM users order by id desc limit 5",
      values: [],
    });
    return result.values;
  }

  async closeDB() {
    if (await CapacitorSQLite.isDBOpen({ database: "undis.db" })) {
      await CapacitorSQLite.close({ database: "undis.db" });
    }
  }
}

const sqliteService = new SQLiteService();
export default sqliteService;
