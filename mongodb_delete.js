// const MongoClient = require(`mongodb`).MongoClient;
const {MongoClient, ObjectID} = require(`mongodb`);

const password = 'Zaid2003!';
const uri = `mongodb+srv://Alt:${password}@first-cluster-t5bgj.mongodb.net/test?retryWrites=true`;

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  // client.close();
  const users = client.db('accounts').collection('users');
  users.findOneAndDelete ({
      _id: new ObjectID('5cd354ccaac7d7394c49254d')
  }).then((suc) => {
      console.log('Success ' + JSON.stringify(suc.value._id));
  }, (err) => {
      // console.log(err);
  });


});