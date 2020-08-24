import React, {Component} from 'react';  // This needs to be imported as the JSX (html tag for understanding here) are compiled to React.creatElement from this
import './Person.css'
// import Radium from 'radium'  commented as now using styed components
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
    constructor(props)
    {
        super(props);
        this.inputElementRef = React.createRef(); // this is second way of setting property for ref keyword.
    }
    componentDidMount(){
        //this.inputElement.focus(); -- so this is the one way of approach of setting propert inputElement(propery name can be anything) to focus
        this.inputElementRef.current.focus(); // second way of setting property which is created as ref in constructor
    }
render (){
    // console.log('Person.js component rendring....');
    // return (<StyledDev>
    //     <p onClick={this.props.click}>I am  {this.props.name} and I am {this.props.age} years old</p>  
    //     <p>{this.props.children}</p>  
    //     <input type="text" onChange={this.props.changed} value={this.props.name}></input>
    //     </StyledDev>
    // );

    return [<p key ="Element1" onClick={this.props.click}>I am  {this.props.name} and I am {this.props.age} years old</p>,
        <p key ="Element2">{this.props.children}</p>,
        <input type="text" 
        //ref = {(inputEl)=>{this.inputElement=inputEl}} --- this is the one way of doing, the below one is where we are setting the property using constructor.
        ref={this.inputElementRef}
        key ="Element3" 
        onChange={this.props.changed} 
        value={this.props.name}></input>
        ]; // Returning multiple JSX element in an array instead of wrapping in a single main root element
};

}
// export default person; // Changed back to below as need to wrap in radium
//export default Radium(person) ; changed back to normal as we are now using styled-components for css styling

Person.propTypes ={
click: PropTypes.func,
changed: PropTypes.func,
name:PropTypes.string,
age:PropTypes.number
}; // If string like '26' or 'ds' is passed for age a warning can be seen in the developer tool of browser.
export default Person;

// props in class based component are called using this keyword this.props