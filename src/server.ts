import app from "./app";


import mongoose from "mongoose";
import config from "./app/config";

main().catch(err => console.log(err));

async function main() {
 try{
    await mongoose.connect(config.database_url as string);
    app.listen(config, () => {
      console.log(`The Server is Running ${config.port}`)
    })
 }catch(err){
    console.log(err)
 }
}