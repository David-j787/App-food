import React, { useState } from "react";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getRecipes, getRecipesByDiet, orderSort, orderPerScore } from "../../Actions";
import { Link } from 'react-router-dom'
import RecipeCard from "../RecipeCard/RecipeCard";
import Paginado from "../Paginado/Paginado";
import SearchBar from "../SearchBar/SearchBar.jsx";
import './home.css'


export default function HomePage(){
    const dispatch =  useDispatch()
    
    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])
    
    const allRecipes = useSelector((state) => state.recipes);
    const[orden, setOrden] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [recipesPerPage, setRecipesPerPage] = useState(9);
    const indexOfLastRecipe = currentPage * recipesPerPage;
    const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
    const currentRecipes = allRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
    

    
    const paginado = (pageNumber) => {
            setCurrentPage(pageNumber)
    }


    function handleReset(e){
        e.preventDefault()
        dispatch(getRecipes())
    }
    
    function handleFilterDiet(e){

        dispatch(getRecipesByDiet(e.target.value))
    }

    function handleSort(e){
        e.preventDefault();
        dispatch(orderSort(e.target.value));
        setCurrentPage(1);
        setOrden(e.target.value);
    }

    function handleScore(e){
        e.preventDefault();
        dispatch(orderPerScore(e.target.value));
        setCurrentPage(1);
        setOrden(e.target.value);
        console.log(e);
    }

    return (
        <div className='all'>

        <div className='odrdenamientos'>

        <h1  className='principal'>Foods</h1>
        <SearchBar className='principal'/>


        <div className= 'filtros'>
        <Link to = '/add'>
            <button  id = 'add'>Add</button>
        </Link>


        <select className='score' className='orders' onChange={e => handleScore(e)}>
            <option selected>Order Healthscore</option>
            <option value="mayormenor">Higher to Lower</option>
            <option value="menormayor">Lower to Higher</option>
        </select>


        <select className= 'ordenamiento' className='orders' onChange={e => handleSort(e)}>
            <option selected>Order by Name</option>
            <option value="ascendente">A-Z</option>
            <option value="descendente">Z-A</option>
        </select>


        <select className='xdietas' className='orders' onChange={e => handleFilterDiet(e)}>
            <option selected>Order by Dites</option>
            <option value='gluten free'>Gluten Free</option>
            <option value='dairy free'>Dairy Free</option>
            <option value='lacto ovo vegetarian'>Lacto-Ovo-Vegetarian</option>
            <option value='fodmap friendly'>FODMAP</option>
            <option value='vegan'>Vegan</option>
            <option value='pescatarian'>Pescetarian</option>
            <option value= 'paleolithic'>Paleolithic</option>
            <option value='primal'>Primal</option>
            {/* <option value='ketogenic'>Keto</option> */}
            {/* <option value='vegetarian'>Vegetariano</option> */}
            {/* <option value='lacto vegetarian'>Lacto-Vegetariano</option> */}
        </select>

        <button className='orders' onClick={e => handleReset(e)}>Reset filters </button>
            </div>

        </div>
        
        {
            currentRecipes?.map(el => {
                return( <fragment>                
                <RecipeCard
                   id = {el.id}
                   name={el.name}
                   img={el.img}
                   diets = {el.diets}
                   />                  
                </fragment>

                )
            })
        }
        <div className='pag'>
        <Paginado 
        recipesPerPage = {recipesPerPage}
        allRecipes = {allRecipes.length}
        paginado = {paginado}
        
        />
        </div>
        </div>
    )
}