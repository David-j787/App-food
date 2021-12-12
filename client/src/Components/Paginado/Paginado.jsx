import React from "react";
import './Paginado.css'


export default function Paginado({ recipesPerPage, allRecipes, paginado }) {
    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(allRecipes / recipesPerPage); i++) {
        pageNumbers.push(i)

    }


    return (
        <nav>
            <ul>
                {
                    pageNumbers?.map((number) => {
                        return <div className='numeritos'>
                            <button   id='boton' onClick={() => paginado(number)}>{number}</button>
                        </div>
                    })
                }
            </ul>
        </nav>
    )
}