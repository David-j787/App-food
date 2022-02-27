import axios from 'axios';


export function getRecipes(){
    return async function(dispatch){
        try{
            let json = await axios.get('/recipes', {
            });
            return dispatch({
                type:  'GET_RECIPES',
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getRecipeName(name){
    return async function(dispatch){
        try{
            let json = await axios.get('/recipes?name='+ name, {
            });
            return dispatch({
                type:  'GET_RECIPES_NAME',
                payload: json.data
            })
        }catch(error){
            console.log(error)
        }
    }
}

export function getRecipesByDiet(payload){
    return {
        type: 'GET_RECIPES_BY_DIET',
        payload
    }
}

export function orderSort(payload){
    return {
        type: 'ORDER_SORT',
        payload
    }
}

export function orderPerScore(payload){
    return{
        type: 'ORDER_SCORE',
        payload
    }
}

export function getDiets(){
    return async function(dispatch){
        let info = await axios.get('/types', {

        });
        return dispatch({
            type: 'GET_DIETS',
            payload: info.data
        })
    }
}

export function addRecipe(payload){
    return async function(dispatch){
        const response = await axios.post('/recipes', payload)
        console.log(response);
        return response;
    }
}

export function getDetail(id){
    return async function(dispatch){
        try {
            let json = await axios.get('/recipes/'+ id);
            return dispatch({
                type: 'GET_DETAIL',
                payload: json.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}