import React, { useEffect, useState } from 'react';
import { CapacitorSQLite, capSQLiteValues, SQLiteDBConnection } from '@capacitor-community/sqlite';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isDatabase, setIsDB]:any = useState();

  useEffect(() => {
    const initializeDB = async () => {
      // Crear conexión a la base de datos
      setIsDB(JSON.stringify('creando'));
      await CapacitorSQLite.createConnection({
        database: 'undis.db',
        // databasePath: 'undis.db',
      });
      setIsDB(JSON.stringify('creado'));
      // await database.open(); // Abrir la conexión
      await CapacitorSQLite.query({database: 'undis.db', statement: 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, value TEXT)'});
      // Crear tabla si no existe
      setIsDB(JSON.stringify('abierto'));
    };

    initializeDB();

  }, []);
  const addData = async () => {
      // Aquí puedes crear tablas o insertar datos
    fetch('http://192.168.100.12:3000/api/check-list',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
        status:true,
      }),
    })
    setData([{name: 'nombre', value: 'valor'}]);
    setTimeout(() => {
      setData([]);
    }, 1000);
    await new Promise(res => setTimeout(res, 2000));
    await CapacitorSQLite.query({database: 'undis.db', statement: 'INSERT INTO users (name, value) VALUES (?, ?)', values: ['nombre', 'valor']});
    // await db.run('INSERT INTO users (name, value) VALUES (?, ?)', ['nombre', 'valor']);
    let result:capSQLiteValues = await CapacitorSQLite.query({database: 'undis.db', statement: 'SELECT * FROM users'});
    setData([result.values]);
    // const result:any = await db.query('SELECT * FROM users');      
  };

  return (
    <div>
      <h1>TEST UNDIS</h1>
      <div>"DB"{isDatabase}"DB"</div>
      <button onClick={addData}>Agregar Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>

    </div>
  );
};

export default App;