const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/Iftar-ramadan').then(()=>{console.log('connected')}).catch((err)=>{console.log(err)})
const nour = mongoose.connection;


const productSchema = mongoose.Schema({
    name: String,
    description: String,
    imageUrl: String,
    price:String,
    category: {
        type: String,
        enum: ["dishes", "dessert && snack"]
      }
  });

  
  
const Ramadan = mongoose.model("Ramadan", productSchema);

const getAll = ()=>{
  return Ramadan.find({})
}
const getOne =(obj)=>{
  return Ramadan.findOne(obj)
}
const updateOne=(obj)=>{
  return Ramadan.updateOne(obj)
}
const createOne=(obj)=>{
  return Ramadan.collection.insertOne(obj)
}
const deleteOne=(name)=>{
return Ramadan.deleteOne(name)
}




module.exports = {
  nour,
  Ramadan,
  getAll,
  getOne,
  updateOne,
  createOne,
  deleteOne
}