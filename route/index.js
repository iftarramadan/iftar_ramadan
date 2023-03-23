const express = require('express')
const router =  express.Router()


const product =require('../controller/product.js')




router.get('/getAll',product.getAll);
router.get('/:name',product.getOne);
router.post('/add',product.createOne);
router.put('/:name',product.updateOne);
router.delete('/:name',product.deleteOne);

 
module.exports = router    