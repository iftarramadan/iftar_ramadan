const product= require('../mongodb/product.js');




    const getAll=(req,res)=>{
product.getAll().then((result)=>{
    res.status(200).send(result)
}).catch((err)=>{
    res.status(500).send(err)
})
    }

    const getOne=(req,res)=>{
        product.getOne(req.params.name).then((result)=>{
            res.status(200).send(result)
        }).catch((err)=>{
            res.status(500).send(err)
        })
    }

    const updateOne=(req,res)=>{
        product.updateOne(req.params.name,req.body).then((result)=>{
            res.status(200).send(result)
        }).catch((err)=>{
            res.status(500).send(err)
        })
    }
 
    const createOne=(req,res)=>{
        product.createOne(req.body).then((result)=>{
            res.status(200).json(result)
        }).catch((err)=>{
            res.status(500).json(err)
        })
    }

    const deleteOne=(req,res)=>{
        product.deleteOne(req.params.name).then((result)=>{
            res.status(200).send(result)
        }).catch((err)=>{
            res.status(500).send(err)
        })
    }

    module.exports= {
        getAll,
        getOne,
        updateOne,
        createOne,
        deleteOne
    }