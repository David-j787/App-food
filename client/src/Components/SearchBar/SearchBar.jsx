import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getRecipeName } from "../../Actions";
import './SearchBar.css'


export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(name)
    }

    function handleSumbit(e){
        e.preventDefault()
        dispatch(getRecipeName(name));
    }


    return(
        <span className='barra'>
            <input type='text'
             placeholder='Buscar receta...'
             onChange={(e) => handleInputChange(e)}
             />
            <button type='submit' id='cursor' onClick= {(e) => handleSumbit(e)}>Buscar</button>
        </span>
    )



}

