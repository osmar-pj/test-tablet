import React, { useEffect, useState } from 'react';
import { CapacitorSQLite, capSQLiteValues } from '@capacitor-community/sqlite';
import { Network } from '@capacitor/network';
import sqliteService from './db/SQLiteService';



const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [isDatabase, setIsDB]:any = useState();
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [errores, setError]:any = useState();
  const [sendBack, setSendBack]:any = useState();

  // const [db, setDb]: SQLiteDBConnection | null = null;
  useEffect(() => {

    // Network
    const checkNetworkStatus = async () => {
      const status = await Network.getStatus();
      setIsOnline(status.connected);
    };

    checkNetworkStatus(); // Verifica el estado de la red al iniciar

    //DB
    const initializeDB = async () => {
      // Crear conexión a la base de datos
      // setIsDB(JSON.stringify('creando'));
      // await CapacitorSQLite.createConnection({
      //   database: 'undis.db',
      //   // databasePath: 'undis.db',
      // });
      // await CapacitorSQLite.open({database:'undis.db'}); // Abrir la conexión
      // setIsDB(JSON.stringify('abierto'));
      // await CapacitorSQLite.execute({database: 'undis.db', statements: 'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, value TEXT)'});
      // setIsDB(JSON.stringify('creado'));
      // const sqliteConnection = new SQLiteConnection(CapacitorSQLite);
      // let db = await sqliteConnection.createConnection('test.db', false, 'no-encryption', 1,false);
      // await db.isDBOpen()
      // setIsDB(JSON.stringify(db));
      let resDB = await sqliteService.initDB()
      setIsDB(resDB);
      // Crear tabla si no existe
    };
    initializeDB();

    checkNetworkStatus(); // Verifica el estado de la red al iniciar

    const unsubscribe = Network.addListener('networkStatusChange', (status) => {
      setIsOnline(status.connected); // Actualiza el estado al cambiar la red
    });
  }, []);
  const sendDataToBackend = async () => {
    if (isOnline) {
      try {
        setError('');
        setSendBack('ENVIANDO DATOS AL BACK');
        let res:any = await fetch('https://kkknb499-3000.brs.devtunnels.ms/api/check-list',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({status:true, data}),
        })
        if (!res.ok) {
          setError({name: 'error', value: JSON.stringify('ERROR EN EL FETCH')});
        }
        const json = await res.json()
        setSendBack(JSON.stringify(json));
      } catch (error:any) {
        setError({name: 'error', value: JSON.stringify(error.message)});
      }
      // Aquí puedes enviar los datos al backend
    } else {
      setSendBack('');
      setError('NO HAY CONEXION A INTERNET');
    }
  }
  const addData = async () => {
      // Aquí puedes crear tablas o insertar datos
    try {
      // let res = await CapacitorSQLite.query({database: 'undis.db', statement: 'INSERT INTO users (name, value) VALUES (?, ?)', values: ['nombre', 'valor']});
      await sqliteService.addData('nombre', 'valor');
        // , values: ['nombre', 'valor']});
      // setSendBack(JSON.stringify(res.values));
      // await db.run('INSERT INTO users (name, value) VALUES (?, ?)', ['nombre', 'valor']);
      // let result:any = await CapacitorSQLite.query({database: 'undis.db', statement: 'SELECT * FROM users order by id desc limit 5',values: []});
      let result = await sqliteService.getData()
      // setSendBack('');
      setError('');

      setData(result);
    } catch (error:any) {
      setError({name: 'error', value: JSON.stringify(error.message)});
    }
    // setData([JSON.stringify(result.changes)]);
    // const result:any = await db.query('SELECT * FROM users');      
  };

  return (
    <div>
      <h1>TEST UNDIS</h1>
      <div>{isOnline ? 'Conectado' : 'Desconectado'}</div>
      <div>"DB"{isDatabase}"DB"</div>
      <button onClick={addData}>Agregar Data</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
      <div style={{color:'red', fontWeight:'bolder'}}>{errores}</div>
      <div style={{color:'blue', fontWeight:'bolder'}}>{sendBack}</div>
      <button onClick={sendDataToBackend}>Enviar al back</button>

    </div>
  );
};

export default App;