const mongoose = require('mongoose');

const URI = 'mongodb+srv://ricardo:ricardo@rick1.ykj3l.mongodb.net/mongodb?retryWrites=true&w=majority';


const connectDB = async ()=> {
  await mongoose.connect(URI, {
      useUnifiedTopology: true, 
      useNewUrlParser: true
    });

  console.log('Banco de dados conectado!!');
};

module.exports = connectDB;



