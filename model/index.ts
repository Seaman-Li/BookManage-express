import bookSchema from "./bookModel";
import userSchema from "./userModel";

const mongoose = require('mongoose');
var uri =
  'mongodb://root:root@ac-cfwx5aj-shard-00-00.qktlz8d.mongodb.net:27017,ac-cfwx5aj-shard-00-01.qktlz8d.mongodb.net:27017,ac-cfwx5aj-shard-00-02.qktlz8d.mongodb.net:27017/?ssl=true&replicaSet=atlas-c9x2xc-shard-0&authSource=admin&retryWrites=true&w=majority&appName=bookManagement'
async function main() {
  mongoose.connect(uri);
}

main()
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.log(err);
  });


  const User = mongoose.model('User', userSchema);
  const Book = mongoose.model('Book', bookSchema);

  export {User,Book};