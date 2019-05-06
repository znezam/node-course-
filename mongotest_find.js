// const MongoClient = require(`mongodb`).MongoClient;
const {MongoClient, ObjectID} = require(`mongodb`);

const password = 'Zaid2003!';
const uri = `mongodb+srv://Alt:${password}@first-cluster-t5bgj.mongodb.net/test?retryWrites=true`;

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  client.db("accounts").collection('users').find({
    _id: new ObjectID('5ccef8de85cc3a20149495f6')
  }).toArray().then(docs => {
    console.log(docs);
  });


  // client.close();
});