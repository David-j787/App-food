
const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    detail: []
}


function rootReducer(state = initialState, action){
    if(action.type === 'GET_RECIPES'){
        return{
            ...state,
            recipes: action.payload,
            allRecipes: action.payload
        }
    }
    else if(action.type === 'GET_RECIPES_NAME'){
        return{
            ...state,
            recipes: action.payload
        }
    }
    else if(action.type === 'GET_RECIPES_BY_DIET'){
        const allRecipes = state.allRecipes;
        
        const dietFiltered = action.payload === '' ? allRecipes : allRecipes.filter(el => el.diets.includes(action.payload))
        return{
            ...state,
            recipes: dietFiltered
        }
    }
    else if(action.type === 'ORDER_SORT'){
        const arregloOrden = action.payload === 'ascendente' ?
        state.recipes.sort(function (a, b) {
            if(a.name > b.name){
                return 1;
            }
            if(b.name > a.name){
                return -1
            }
            return 0
        }) :
        state.recipes.sort(function (a, b) {
            if(a.name > b.name){
                return -1;
            }
            if(b.name > a.name){
                return 1;
            }
            return 0
        })
        return{
            ...state,
            recipes: arregloOrden
        }
    }
    else if(action.type === 'ORDER_SCORE'){
        const arregloScore = action.payload === 'menormayor' ?
        state.recipes.sort(function (a, b) {
            if(a.HS > b.HS){
                return 1;
            }
            if(b.HS > a.HS){
                return -1;
            }
            return 0;
        }) :
        state.recipes.sort(function (a, b) {
            if(a.HS > b.HS){
                return -1;
            }
            if(b.HS > a.HS){
                return 1;
            }
            return 0;
        })
        return{
            ...state,
            recipes: arregloScore
        }
    }
    else if(action.type === 'GET_DIETS'){
        return{
            ...state,
            diets: action.payload
        }
    }
    else if(action.type === 'ADD_RECIPE'){
        return{
            ...state
        }
    }
    else if(action.type === 'GET_DETAIL'){
        return{
            ...state,
            detail: action.payload
        }
    }
    else{
        return{
            ...state
        }
    }
}

export default rootReducer;