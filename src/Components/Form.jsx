import React, { useState } from 'react'
import { validarColor, validarName } from '../utils/validaciones';
import Message from './Message';
import Card from './Card';

const Form = () => {

    const [name, setName] = useState("");
    const [color, setColor] = useState("");

    
    const onChangeName = (e) => setName(e.target.value);
    const onChangeColor = (e) => setColor(e.target.value);


    const [show, setShow]=useState(false);
    const [error, setError] = useState(false);

    

    const handleSumit=(e)=>{
        e.preventDefault();
        const isNameValid=validarName(name)
        const isColorValid=validarColor(color)
        
        isNameValid ? console.log('nombre valido'):console.log('nombre no valido')
        isColorValid ? console.log('color valido'):console.log('color no valido')
        

        if(isNameValid && isColorValid){
            setShow(true)
            setError(false)
        }else{
            setError(true)
        }

    }
        
  return (
    <div>
        {show ? (
            <Card name={name} color={color}/>
        ) :(<>
            <h1>Elige un color</h1>
            <form onSubmit={handleSumit}>
            
            <label>Nombre: </label>
            <input
            type="text"
            value={name}
            onChange={onChangeName}
            />
            <label>Color: </label>
            <input
            type="text"
            value={color}
            onChange={onChangeColor}
            />
            <button>Ingresar Informacion</button>
            </form></>)}
        {error && (
            <h4 style={{ color: "red" }}>Por favor chequea que la información sea correcta</h4>
        )}
    </div>
  )
}

export default Form
