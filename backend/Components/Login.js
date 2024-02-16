let express = require('express')
let mongodb = require('mongodb')
let client = mongodb.MongoClient;

let login = express.Router().post('/',(req,res)=>{
    client.connect("mongodb://localhost:27017/wonderla",(err,db)=>{
        if(err){
            throw err;
        }else{
            db.collection("Register").findOne((req.body),(err,result)=>{
                if(err){
                    throw err;
                }else if(result){
                    res.send("user exists")
                }else{
                    res.send("user doesnot exists");
                }
            })
        }
    })
})
module.exports = login;