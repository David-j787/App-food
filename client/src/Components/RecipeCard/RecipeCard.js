import React from "react";
import './RecipeCard.css'
import { Link } from "react-router-dom";

export default function RecipeCard({id, name, img, diets}){


    if(id.length > 9){
        return ( 
            <>
            <Link to = {'/home/' + id}>
            <div className='cards'>       
                <img src={img} alt={img} className='img' ></img>
                <h2 className='names'>{name}</h2>
                <p className='names'>{diets?.map(el => el.name[0].toUpperCase()+ el.name.slice(1) + ', ')}</p>
            </div>
            </Link>
            </>
        )
    }else{
        return ( 
            <>
            <Link to = {'/home/' + id}>
            <div className='cards'>       
                <img src={img} alt={img} className='img' ></img>
                <h2 className='names'>{name}</h2>
                <p className='names'>{diets.map(el => el[0].toUpperCase()+ el.slice(1) + ', ')}</p>
            </div>
            </Link>
            </>
        )
    }
}