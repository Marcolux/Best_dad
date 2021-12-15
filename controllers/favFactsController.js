const models = require('../models')

const favFactsController = {}

favFactsController.createFact = async (req,res)=>{

    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.id
            }
        })
        
        const fact = await user.createFav_fun_fact({
            content:req.body.content
        }) 
        
    
        res.json(fact)
    }

    catch(err){
        res.json(err)
    }
}

favFactsController.getFacts = async (req,res)=>{

    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.id
            }
        })
        
        const allFacts = await user.getFav_fun_facts()        
      
        res.json(allFacts)
    }

    catch(err){
        res.json(err)
    }
}

favFactsController.deleteFacts = async (req,res)=>{

    try{
        const deleteFacts = await models.fav_fun_fact.destroy({
            where:{id:req.body.id}
        })     
        res.json(deleteFacts)
    }

    catch(err){
        res.json(err)
    }
}




module.exports = favFactsController