const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = 8000;
const path = require("path");
const ejsmate = require("ejs-mate");
const listingschema = require("./models/schema.js");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.engine('ejs', ejsmate);
app.use(express.urlencoded({extended: true}));
const mongo_url="mongodb://127.0.0.1:27017/doctorfriend";

main().then(()=>{
    console.log("connected to db");
  }).catch((err)=>{
   console.log(err);
  })
  async function main(){
      await mongoose.connect(mongo_url);
  };

app.listen(route,(req,res)=>{
    console.log("server is listening");
})
app.get("/",(req,res)=>{
    // res.send("working on it");
    res.render("listing/index.ejs");
});
app.get("/home",(req,res)=>{
    res.render("listing/home.ejs");
})

app.get("/home/booking",(req,res)=>{
    
    //  let inputed = new listingschema(req.body.params);
    //  await inputed.save();

    res.render("listing/booking");
})