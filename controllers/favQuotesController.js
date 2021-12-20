const models = require('../models')

const favQuotesController = {}

favQuotesController.createQuote = async (req,res)=>{

    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.id
            }
        })
        
        const quote = await user.createFav_quote({
            content:req.body.quote
        }) 
        
      
        res.json(quote)
    }

    catch(err){
        res.json(err)
    }
}

favQuotesController.getQuotes = async (req,res)=>{

    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.id
            }
        })
        
        const allQuotes = await user.getFav_quotes()        
      
        res.json(allQuotes)
    }

    catch(err){
        res.json(err)
    }
}

favQuotesController.deleteQuotes = async (req,res)=>{

    try{
        const quote = await models.fav_quote.findOne({
            where:{id:req.params.id}
        })   
        const removeQuote = await quote.destroy()
        
        res.json(removeQuote)
    }

    catch(err){
        res.json(err)
    }
}

module.exports = favQuotesController