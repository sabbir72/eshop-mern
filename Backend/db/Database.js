const mongoose=require('mongoose')
// const mongoClient = require("mongodb").MongoClient;
// const URL = "mongodb://127.0.0.1:27017/ecommerce";
const connectDatabase = () =>{
    mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data) =>{
        console.log(`mongodb is connected with server: ${data.connection.host}`);
    })

}

module.exports = connectDatabase


