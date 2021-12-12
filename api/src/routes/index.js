const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { v4: uuidv4 } = require('uuid');
const {Recipe, Diet} = require('../db.js')
const RecipeController = require('../Controllers/Recipe.js')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/recipes', RecipeController.getRecipes)

router.get('/recipes/:id', RecipeController.getById);

router.get('/types', async (req, res, next) => {
    const diets =  await Diet.findAll();
    res.json(diets);
});

router.post('/recipes', async (req, res, next) => {
    const {
        name,
        img,
        resume,
        score,
        HS,
        steps,
        diets
    } = req.body;

    let recipeCreated = await Recipe.create({           
        id: uuidv4(),
        name,
        img,
        resume,
        score,
        HS,
        steps
    })
    
    let dietsDB = await Diet.findAll({
        where: {
            name: diets
        }
    })
    return await recipeCreated.addDiet(dietsDB)
    .then(() => res.send('Created succesfully'))
    .catch((error) => next(error));
});

module.exports = router;
