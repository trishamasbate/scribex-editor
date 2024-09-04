import { openDB } from "idb";

// Initialize the database
const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      // Check if the "jate" object store already exists
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      // Create a new object store named "jate" with an auto-incrementing key
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Function to add content to the database
export const putDb = async (content) => {
  console.log('Put to the Database');
 
  // Open a connection to the "jate" database
  const contactDb = await openDB('jate', 1);
  // Start a new transaction with readwrite access
  const tx = contactDb.transaction('jate', 'readwrite');
  // Get the "jate" object store from the transaction
  const store = tx.objectStore('jate');
  // Put the content into the store with a fixed id of 1
  const request = store.put({id: 1, value: content});
  // Wait for the request to complete
  const result = await request;
  console.log('Saved to Database', result);
};

// Function to get or retrieve content from the database
export const getDb = async () => {
  console.log('Get to the Database');

  // Open a connection to the "jate" database
  const contactDb = await openDB('jate', 1);
  // Start a new transaction with readonly access
  const tx = contactDb.transaction('jate', 'readonly');
  // Get the "jate" object store from the transaction
  const store = tx.objectStore('jate');
  // Get the content with the fixed id of 1
  const request = store.get(1);
  // Wait for the request to complete
  const result = await request;
  console.log('result.value', result);
  // Return the value of the result, if it exists
  return result?.value;
};

// Call the initdb function to initialize the database
initdb();