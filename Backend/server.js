
const app=require("./app")
const cloudinary = require("cloudinary");
// const dotenv=require("dotenv");

const connectDatabase=require("./db/Database.js");
//handling uncaught Exception
process.on("uncaughtException",(err)=>{
  console.log(`Error:${err.message}`);
  console.log(`Shuttig down the server forHandling uncaught Exception`);
})
//config==============
// config
if(process.env.NODE_ENV!=="PRODUCTION"){
require("dotenv").config({
    path:"backend/config/.env"
})}

//connect mongodb call just
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//  create server ================
const server= app.listen(process.env.PORT,()=>{
  console.log(`server in running on http://localhost:${process.env.PORT}`);
})


//unhandle promis rejection

process.on("unhandledRejection",(err)=>{
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down the server due ro unhandle promise rejection`);
  server.close(()=>{
    process.exit(1);
  });
});