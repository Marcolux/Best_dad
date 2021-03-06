const models = require('../models')

const favJokesController = {}

favJokesController.createJoke = async (req,res)=>{

    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.id
            }
        })
        
        const joke = await user.createFav_dad_joke({
            content:req.body.joke
        }) 
        
      
        res.json(joke)
    }

    catch(err){
        res.json(err)
    }
}

favJokesController.getJokes = async (req,res)=>{

    try{
        const user = await models.user.findOne({
            where:{
                id:req.params.id
            }
        })
        
        const allJokes = await user.getFav_dad_jokes()        
      
        res.json(allJokes)
    }

    catch(err){
        res.json(err)
    }
}

favJokesController.deleteJoke = async (req,res)=>{

    try{
        const joke = await models.fav_dad_joke.findOne({
            where:{id:req.params.id}
        })   
        const removeJoke = await joke.destroy()
        
        res.json(removeJoke)
    }


    catch(err){
        res.json(err)
    }
}

module.exports = favJokesController