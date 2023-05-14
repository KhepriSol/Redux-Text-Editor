import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//creating a connection, specifying privileges, opening the store, adding content, and confirming the request.
export const putDb = async (content)  => {
  console.log('PUT DataBase');
  const contactDb = await openDB('jate', 1);
  const tx = contactDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

 
    // create a connection to the desired database and version, create a new transaction with the necessary privileges, open the object store, and use the .getAll() method to retrieve all data. 
  export const getDb = async () => {
    console.log('GET from the database');
    const contactDb = await openDB('jate', 1);
    const tx = contactDb.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');
    const request = store.getAll();
    const result = await request;
    console.log('result.value', result);
    return result?.value;
  };
