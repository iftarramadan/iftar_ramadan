const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/Iftar-Ramadan";
mongoose.connect(mongoUri).then(()=>{console.log("db mongo connected")}).catch(err=>console.log(err));
const db = mongoose.connection;
const Product = require('./product.js')


const retrive = function (req, res) {
  Product.find(req.body).then((result)=>{
      res.status(200).json(result)
  }).catch((err)=>{
      console.log(err);
  })
};

const retriveOne = (req,res)=>{
  Product.findOne({name:req.params.name}).then((result)=>{
    res.status(200).send(result)
  }).catch((err)=>{
    res.status(500).send(err)
  })
};

const updated = (req,res)=>{
  Product.updateOne({name:req.params.name},req.body).then((result)=>{
    res.send(result)
  }).catch((err)=>{
    res.status(500).send(err)
  })
}

const created = (req,res)=>{
  Product.create(req.body).then((result)=>{
    res.status(200).send(result)
  }).catch((err)=>{
    res.status(500).send(err)
  })
}

const deleted = (req,res)=>{
  Product.deleteOne({name:req.params.name}).then((result)=>{
    res.send(result)
  }).catch((err)=>{
    res.status(500).send(err)
  })
}


module.exports ={
  db,
  retrive , 
  retriveOne, 
  created,
  updated ,
  deleted
} 