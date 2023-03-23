const express = require('express');
const cors =require('cors');
const path = require('path');
const router = require('../route/index.js')
const db = require('../mongodb/product.js')
const app=express();
const port=3000


app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())


app.use('/api/food',router)











app.listen(port,()=>{
    console.log("listen on port "+port);
})