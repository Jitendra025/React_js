import React, {Component} from 'react';  // This needs to be imported as the JSX (html tag for understanding here) are compiled to React.creatElement from this
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
class Person extends Component{
render (){
    console.log('Person.js component rendring....');
    return (<StyledDev>
        <p onClick={this.props.click}>I am  {this.props.name} and I am {this.props.age} years old</p>  
        <p>{this.props.children}</p>  
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
        </StyledDev>
    );
};

}
// export default person; // Changed back to below as need to wrap in radium
//export default Radium(person) ; changed back to normal as we are now using styled-components for css styling

export default Person;

// props in class based component are called using this keyword this.props