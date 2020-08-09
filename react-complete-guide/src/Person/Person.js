import React from 'react';  // This needs to be imported as the JSX (html tag for understanding here) are compiled to React.creatElement from this
// Here in js we can write function in following way
/*
funtion person (){
    return <h2></h2>
}
 or 
 var person = function(){

    return <h2></h2>
 }

 or 
 const person = function(){  // const here to make person objet as const as we will not change the object of person function.

    return <h2></h2>
 }

 but in React js the recommaned format of writing function is using ES6 format see below.
 const person = () => {  // () here for passing parameters like if we need to(num1,num2)
     return <h2></h2> 
 }
const person = (num1,num2) => {  
     return <h2></h2> 
 }

*/
import './Person.css'
const person = (props) =>{
return (
    <div className="Person">
        {/* <p>I am a Person and I am {Math.floor(Math.random()*30)}</p> */}
        <p onClick={props.click}>I am  {props.name} and I am {props.age} years old</p> 
        <p>{props.children}</p>  
        <input type="text" onChange={props.changed} value={props.name}></input>
        </div>// using configurable properties. Properties are getting passed from where component Person used. App.js in our case
        // props.children will print whaterver passed in opening and closing bracket of Person from App.js. instead of <p> any html tag can be used here for children
        // note the {props.click} here the property click (any name can be given from where it passed) in which the reference of switchNameHandler is passed from App.js will call the switchNameHandle method
        // of App.js component
);

}

export default person; // By using default with export, when we will import Person.js class in other js class it will only import person function and we can be use that only. In case we have two function will can give any name instead of default.
// this will also come as soon as we will move ahead

// for first instance we will be importing this in the App.js component
// content in {} will be interprted as java script code and not simple text. We can create our custom function and call them in {}
// props here are passed attributes only from the calling js.

// For two way binding Onchange is sending value from Person.js to App.js and props.name is receiving value from App.js. So when input change in text bos will passed throguh a method to
// App.js and send back to Person.js to display in text box. 
// If value is passed in input type text then onChange must be called else the value in inout text can't be change or we will not able towriteanything in text. 
// So in App.js we are calling changed in one person tag but not in one. So we will be able to type in only ine inout text.

