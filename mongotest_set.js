// const MongoClient = require(`mongodb`).MongoClient;
const {MongoClient, ObjectID} = require(`mongodb`);

const password = 'Zaid2003!';
const uri = `mongodb+srv://Alt:${password}@first-cluster-t5bgj.mongodb.net/test?retryWrites=true`;

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  
  const users = client.db("accounts").collection('users');

//   users.insertOne({
//       username: 'Hasdasdasdi',
//       password: 'asdasd',
//       admin: 'asd'
//   }, (err, result) => {
//       if (err) {
//           return console.log('Unable to add user' + err);
//       }

//       console.log(result.ops[0]._id.getTimestamp());

//   });
 
  users.insertOne({
    name : 'ZAIDDY'
  });

  console.log('Setup completed.');

  client.close();
});