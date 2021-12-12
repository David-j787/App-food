import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addRecipe, getDiets } from "../../Actions/index";
import { useSelector, useDispatch } from "react-redux";
import './addRecipe.css'

function control(input){
    let error = {};
    if(!input.name){
        error.name = 'A name is required!'
    }
    else if(!input.resume){
        error.resume = 'A resume is required!'
    }
    else if(!input.img){
        error.img = 'A image is required!'
    }
    return error;
}

export default function RecipeCreated(){
    const dispatch = useDispatch();
    const diets = useSelector((state)=> state.diets);
    const [errors, setErrors] = useState({});
 

    const [input, setInput] = useState({
        name: '',
        resume: '',
        img: '',
        score: '',
        HS: '',
        steps: '',
        diets: []
    })
    
    function handleInputsChange(e){
        setInput({
            ...input,
            [e.target.name] : e.target.value
        })
        setErrors(control({
            ...input,
            [e.target.name] : e.target.value
        })
        )
    }

    function handleSelectDiet(e){
        setInput({
            ...input,
            diets: [...input.diets, e.target.value]
        })
        console.log(input.diets)
    }

    function handleSumbit(e){
        e.preventDefault();
        console.log(input)
        if(input.name && input.resume && input.img){
            
            dispatch(addRecipe(input));
            alert('Recipe created succesfully!');
            setInput({
                name: '',
            resume: '',
            img: '',
            score: '',
            HS: '',
            steps: '',
            diets: []
            })
        }else{
            alert('Please, complete the data')
        }

  
    }

    function handleDelete(el){
        setInput({
            ...input,
            diets: input.diets.filter(diet => diet !== el)
        })
    }

    useEffect(() => {
        dispatch(getDiets());
    }, [dispatch]);

    return (
        <div className= 'todo'>
            <Link to='/home'>
                <button>Back</button>
            </Link>
        <div className= 'data'>

            <h1>Complete the Data</h1>

            <form onSubmit= {e => handleSumbit(e)}>
                <div>
                    <label className = 'titulo'>Name</label>
                    <input className='inputs' type="text" value={input.name} name='name'
                    onChange={(e) =>handleInputsChange(e)}/>
                    {
                        errors.name &&(
                            <p className='error'>{errors.name}</p>
                        )
                    }
                </div>
                <div>
                    <label className = 'titulo'>Resume</label>
                    <input className='inputs' type="text" value={input.resume} name='resume'
                    onChange={(e) =>handleInputsChange(e)}/>
                     {
                        errors.resume &&(
                            <p className='error'>{errors.resume}</p>
                        )
                    }
                </div>
                <div>
                    <label className = 'titulo'>Image's urls</label>
                    <input className='inputs' type="text" value={input.img} name='img'
                    onChange={(e) =>handleInputsChange(e)}/>
                     {
                        errors.img &&(
                            <p className='error'>{errors.img}</p>
                        )
                    }
                </div>
                <div>
                    <label className = 'titulo'>Score</label>
                    <input className='inputs' type="text" value={input.score} name='score'
                    onChange={(e) =>handleInputsChange(e)}/>
                </div>
                <div>
                    <label className = 'titulo'>Healthscore</label>
                    <input className='inputs' type="text" value={input.HS} name='HS' 
                    onChange={(e) =>handleInputsChange(e)}/>
                </div>
                <div>
                    <label className = 'titulo'>Steps</label>
                    <input className='inputs'type="text" value={input.steps} name='steps' 
                    onChange={(e) =>handleInputsChange(e)}/>
                </div>
                <select onChange={(e) => handleSelectDiet(e)}>
                    {
                        diets.map((dieta) => {
                            return (
                            <option value={dieta.name}>{dieta.name[0].toUpperCase()+ dieta.name.slice(1)}</option>
                        )
                        })
                    }
                </select>
                    
                    

                    <button type='submit'>¡ADD!</button>
                
            </form>
                    {input.diets.map(el => {
                        return <span className='diets'>

                        <span>{el[0].toUpperCase()+ el.slice(1)}</span>
                        <button onClick={() => handleDelete(el)}>x</button>

                        </span>
                    })}
        </div>

                    
        </div>
    )




}
