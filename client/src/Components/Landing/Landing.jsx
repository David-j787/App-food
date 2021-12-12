import React from "react";
import { Link } from "react-router-dom";
import './Landing.css'

export default function LandingDesign(){
    return (
        <div className="allLand">
            <div id='barra'>
                <h1 id='foods'>FOODS</h1>

                <Link to='/home'>
                <button id='buttonHome'><h2>Recipes</h2></button>
                </Link>
                <Link to='/add'>
                <button id='buttonAdd'><h2>Create One</h2></button>
                </Link>

            </div>
            <img id='fondo' src="https://media.istockphoto.com/photos/salt-and-pepper-shaker-on-black-background-picture-id846000164?b=1&k=6&m=846000164&s=170667a&w=0&h=2R-Ci0NnLWXDlctvRgSr_zCYTz_VG6HR7EgSlJ4c24I=" alt='fondo' />
            <h1 className='intro'>Healthy recipes</h1>
            <h3 className="intro"> and where to find them</h3>
            <Link to='/home'><button id='start' >Let's start ➣</button></Link> 

        
        </div>
    )
}