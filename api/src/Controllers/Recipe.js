const {Recipe, Diet} = require('../db.js');
const ModelCrud = require('./index.js');
const axios = require('axios');
const {
    API_KEYY
  } = process.env;

class RecipeModel extends ModelCrud{
    constructor(model){
        super(model)
    }

    getRecipes = async (req, res, next) => {
        let {name} = req.query;
        let ApiRecipes;
        let myRecipes;
        if(name){
            let Api = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&query=${name}&number=99&apiKey=${API_KEYY}`));
            ApiRecipes = Api.data.results.map(recipe => {
                return{
                    id: recipe.id,
                    name: recipe.title,
                    img: recipe.image,
                    diets: recipe.diets,
                    HS: recipe.healthScore
                }
            })
            myRecipes = await this.model.findAll({
                where:{
                    name
                }
            })
            const allRecipes = [...myRecipes,...ApiRecipes ]
            res.send(allRecipes)
        }else{
            myRecipes = await this.model.findAll({
                include: Diet
            })
            let Api = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=99&apiKey=${API_KEYY}`));
            ApiRecipes = Api.data.results.map(recipe => {
                return{
                    id: recipe.id,
                    name: recipe.title,
                    img: recipe.image,
                    diets: recipe.diets,
                    HS: recipe.healthScore
                }
            })
            const allRecipes = [...myRecipes,...ApiRecipes ]
            res.send(allRecipes)    
        
        }        
    }
    
    getById = async (req, res, next) => {
        let {id} = req.params; 
        try{
            if(id > 0){
                console.log('llegue0')
                var apirecipe = await axios.get(`https://api.spoonacular.com/recipes/${Number(id)}/information?apiKey=${API_KEYY}`);
                return res.json({
                    id: apirecipe.data.id,
                    name: apirecipe.data.title,
                    resume: apirecipe.data.summary.replace(/<[^>]*>?/g, ""),
                    img: apirecipe.data.image,
                    score: apirecipe.data.spoonacularScore,
                    HS: apirecipe.data.healthScore,
                    diets: apirecipe.data.diets.map(el => el[0].toUpperCase() + el.slice(1) + ' '),
                    steps: apirecipe.data.analyzedInstructions.map(el => el.steps.map(e => e.step)),
                    dishTypes: apirecipe.data.dishTypes.map(el => el[0].toUpperCase() + el.slice(1) + ' ')
                })
            } 
            else {
                console.log('llegue1')
                return await this.model.findByPk(id, {
                    include: Diet
                })
                .then((recipe) => res.send(recipe))
            }
        } catch(error){
            next(new Error(`Error:${error.message}`))
        }
    } 
}


const RecipeController = new RecipeModel(Recipe);

module.exports = RecipeController;