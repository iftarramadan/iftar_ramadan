const express = require('express')
const router =  express.Router()


const {retrive,retriveOne,created,updated,deleted}=require('../mongoDb/index.js')




router.get('/getAll',retrive);
router.get('/:name',retriveOne);
router.post('/add',created);
router.put('/:name',updated);
router.delete('/:name',deleted);


module.exports = router