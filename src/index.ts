import express from "express";
import { Sequelize } from "sequelize-typescript";
import "dotenv/config";
import routes from "./routes/routes";

const app = express();

app.use("/api", routes)
app.use(express.json())
const port= 4000;

const sequelize= new Sequelize({
   host: "localhost",
   port: 5432,
   database: "linkstorage",
   username: process.env.USERNAME,
   password: "postgres",
   dialect: "postgres"
});

app.listen(port, ()=>{
   console.log(`listening on port ${port}` );
   try{
      sequelize.addModels([]);
      sequelize.sync({force: false});
      console.log("databases conected successfully");
   } catch (e){
      console.log(e);
   }
});


