import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail, getDiets} from '../../Actions';
import { useEffect } from "react";
import { useParams } from "react-router";
import './Details.css'

export default function Detail(){
    const {id} = useParams();
    const dispatch = useDispatch();
    const recipe = useSelector((state) => state.detail);
    var array = [];
    array.push(id);
    console.log(array)

    useEffect(() => {
        dispatch(getDetail(id));
    }, [dispatch]);


    if(id.length > 9 ){

        return (
            <div className='componente'>

                <Link to='/home'><button>Back</button></Link>
                         
                <h1 className = 'name-detail'>{recipe.name}</h1>
                <img className ='img-detail' src={recipe.img} />
                <h2 className= 'score-detail'>Score: {recipe.score}</h2>
                <h2 className='HS-detail'>HealthScore: {recipe.HS}</h2>
                <h1 className='steps-detail'>Steps:</h1>
                <h1 className='diet-detail'>Diet(s): {recipe.diets?.map(el => el.name[0].toUpperCase()+ el.name.slice(1)) + ' '}</h1>
                <p className='steps-detail'>{recipe.steps}</p>
                <h1 className='resumen'>Summary: </h1>
                <p className='resumen'>{recipe.resume}</p>
            </div>    
        )
    }else {
        return (
            <div className='componente'>

                <Link to='/home'><button>Back</button></Link>
                         
                <h1 className= 'name-detail'>{recipe.name}</h1>
                <img className='img-detail'src={recipe.img} />
                <div className='bottom-card'>

                    <h2 className= 'score-detail'>Score: {recipe.score}</h2>
                    <h2 className='HS-detail'>HealthScore: {recipe.HS}</h2>
                    <h2 className='types'>Dish Type(s): {recipe.dishTypes}</h2>
                    <h1 className='diet-detail'>Diet(s): {recipe.diets}</h1>
                    <h1 className='steps-detail'>Steps:</h1>
                    <p className='steps-detail'>{recipe.steps}</p>
                    <h1 className='resumen'>Summary: </h1>
                    <p className='resumen'>{recipe.resume}</p>

                </div>
            </div>    
        )
    }


}