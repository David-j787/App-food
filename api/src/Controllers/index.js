const { v4: uuidv4 } = require('uuid');
const {Diet} = require('../models/Diet.js');

class ModelCrud {
    constructor(model){
        this.model = model
    }

    
    // getById = async (req, res, next) => {
    //     const {id} = req.params;
    //     return await this.model.findByPk(id)
    //         .then((result) => res.send(result))
    //         .catch((error) => next(error));
    // }
    
    // addRecipe = async (req, res, next) => {
    //     const {
    //         name,
    //         img,
    //         resume,
    //         score,
    //         HS,
    //         steps,
    //         diets
    //     } = req.body;
    
    //     let recipeCreated = await Recipe.create({           
    //         id: uuidv4(),
    //         name,
    //         img,
    //         resume,
    //         score,
    //         HS,
    //         steps
    //     })
        
    //     let dietsDB = await Diet.findAll({
    //         where: {
    //             name: diets
    //         }
    //     })
    //     return await recipeCreated.addDiet(dietsDB)
    //     .then(() => res.send('Created succesfully'))
    //     .catch((error) => next(error));
    // }
}  

module.exports = ModelCrud;