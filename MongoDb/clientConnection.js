const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'Student-Record';
const client = new MongoClient(uri);

async function main() {
  try {
    await client.connect();
    const db = client.db(dbName);
    
    const collectionName = 'my_collection';
    const collection = db.collection(collectionName);
    
    // inserted-------------------------------------------------------
    const documents = [{ name: 'Sanjay',age:22,email:"sanju@gmail.com" },{ name: 'Ram',age:21,email:"ram@gmail.com" }]; // Corrected to an array of objects
    const result = await collection.insertMany(documents);
    console.log(`${result.insertedCount} documents inserted`);

    //update-------------------------------------------------------------

    // const queryOne = { name: 'Sanjay' };
    // const updateOne = { $set: { age: 21 } };
    // const resultOne = await collection.updateOne(queryOne, updateOne);
    // console.log(`${resultOne.matchedCount} document matched, ${resultOne.modifiedCount} document modified`);
    

    // updateMany------------------------------------------------------------------------
    //  const queryMany = { age:21 };
    //  const updateMany = { $set: { genger: "male" }};
    //  const resultMany = await collection.updateMany(queryMany, updateMany);
    //  console.log(`${resultMany.matchedCount} document matched, ${resultMany.modifiedCount} document modified`);

    // // Delete one document---------------------------------------------------------------
    // const queryDeleteOne = { email:"sanju@gmail.com" };
    // const resultDeleteOne = await collection.deleteOne(queryDeleteOne);
    // console.log(`${resultDeleteOne.deletedCount} document deleted`);
    
    // // // Delete many documents------------------------------------------------------------
    // const queryDeleteMany = { age: { $lt: 25 } }; // Delete documents where age is less than 25
    // const resultDeleteMany = await collection.deleteMany(queryDeleteMany);
    // console.log(`${resultDeleteMany.deletedCount} documents deleted`);


    
    const cursor = collection.find({}); 
    
    await cursor.forEach(record => {
        console.log(record);
    });
    
  } catch (err) {
    console.error('Error:', err.stack);
  } finally {
    await client.close();
    console.log('Disconnected from MongoDB server');
  }
}

main().catch(console.error);
