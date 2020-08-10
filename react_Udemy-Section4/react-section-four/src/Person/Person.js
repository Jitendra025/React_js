import React from 'react';  // This needs to be imported as the JSX (html tag for understanding here) are compiled to React.creatElement from this
import './Person.css'
const person = (props) =>{
return (
    <div className="Person">
        <p onClick={props.click}>I am  {props.name} and I am {props.age} years old</p> 
        <p>{props.children}</p>  
        <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
);

}

export default person; 

