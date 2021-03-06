const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017/';
const dbname = 'kevindb';

MongoClient.connect(url, (err,client) =>{
 assert.equal(err,null);

  console.log('Connected correctly to server');

  const db = client.db(dbname);
  const collection = db.collection("tabela");

  collection.insertOne({"name": "Uthappizza", "description": "test"},(err, result) => {

    assert.equal(err,null);
    console.log("After Insert:\n");
    console.log(result.ops);

    collection.find({}).toArray((err, docs) =>  {
          assert.equal(err,null);

            console.log("Found:\n");
            console.log(docs);

            db.dropCollection("tabela", (err, result) => {
                assert.equal(err,null);

                client.close();
            });

    })

});

});
