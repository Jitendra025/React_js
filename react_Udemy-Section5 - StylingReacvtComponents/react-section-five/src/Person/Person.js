import React from 'react';  // This needs to be imported as the JSX (html tag for understanding here) are compiled to React.creatElement from this
import './Person.css'
// import Radium from 'radium'  commented as now using styed components
import styled from 'styled-components';
const StyledDev= styled.div`
    width:60%;
    margin:16px auto;
    border:1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding:16px;
    text-align:center;
    @media (min-width:500px) {
      width:450px;
  } 
`; // Div element with inline css using styled-components
const person = (props) =>{
    // const style = {
    //         '@media(min-width:500px)':{ // this tag will fix the width of Person tag  as 450px if the width fo browser is 500px or more 
    //             width:'450px'
    //         }

    // }  -----------------Commented as same style is added in thre styled component div
return (
    // <div className="Person" style={style}> 
    <StyledDev>
    {/* style attribute will override the classNAme attribute, but if the width of browser is less tha 500pc the classNAme  class will take over due to condition in media query attribute */}
        <p onClick={props.click}>I am  {props.name} and I am {props.age} years old</p> 
        <p>{props.children}</p>  
        <input type="text" onChange={props.changed} value={props.name}></input>
        {/* // </div> */}
        </StyledDev>
);

}
// export default person; // Changed back to below as need to wrap in radium
//export default Radium(person) ; changed back to normal as we are now using styled-components for css styling

export default person;
