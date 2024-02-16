let express = require('express')
let mongodb = require('mongodb')
let client = mongodb.MongoClient;

let Register =express.Router().get('/',(req,res)=>{
    client.connect("mongodb://localhost:27017/wonderla",(err,db)=>{
        if(err){
            throw err
        }
        else{
            db.collection("Register").find({}).toArray((err,result)=>{
                if(err){
                    throw err
                }
                else{
                    res.send(result)
                }
            })
        }
    })
})
module.exports = Register;
