import React, { useState } from 'react'
import PropTypes from "prop-types";


export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputvalue] = useState(""); //sin las comillas queda como undefined y da error
    const handleInputChange= (e) => {
        console.log(e.target.value);
        setInputvalue(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length > 2 ){
            setCategories(cats=>[inputValue,...cats, ]);
            setInputvalue("");

        }

        //console.log("submit Hecho")
        


    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={ handleInputChange}
                placeholder="Escribe lo que buscas"
            />            
        </form>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
