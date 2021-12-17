const models = require('../models')

const userController = {}

userController.createUser = async (req,res) =>{
 try{
     const newUser = await models.user.create({
         name: req.body.name,
         email:req.body.email,
         password:req.body.password,
         zodiac_sign:req.body.sign
     })

     res.json({newUser})

 }
 catch(err){
res.json(err)

 }

}

userController.login = async (req, res) => {
    try{
        const user = await models.user.findOne({
            where: { email: req.body.email }
        })
        if(user.password === req.body.password) {
            res.json({user})
        } 
    }catch (err) {
        console.log(err)
    }
}


userController.deleteUser = async (req, res) => {
    try{
        const deleteUser = await models.user.destroy({
            where: { id: req.params.id }
        })
        res.json(deleteUser) 
    }catch (err) {
        console.log(err)
    }
}

userController.verifyUser = async (req, res) => {
    try{
        const user = await models.user.findOne({
            where: { id: req.headers.authorization }
          })
        if (user) {
            res.json({user})
        }
    }catch (err) {
        res.json({err})
    }
}

userController.updateUser = async (req,res) =>{
    try{
        const newUser = await models.user.findOne({
            where:{
                id:req.params.id
            }

            
        })
        
        const updateUserInfo = await newUser.update({
            name: req.body.name,
            zodiac_sign:req.body.zodiac_sign
            
        })
        res.json({updateUserInfo})
   
    }
    catch(err){
   res.json(err)
   
    }
   
   }

module.exports = userController