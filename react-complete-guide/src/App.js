import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person' ; // We omit the .js when importing. Note the name Person is started with upper case P. becuae in react keyword starting with lower case are for kind of 
// reserved for React . see below return, div, h1 etc.
class App extends Component {
  // We can defined properties like 
  // var1="Jitendra", var2="Mohan"
  
  state ={ // in here also we can use any type of properties, currently we using array and may be adding other properties as we will progress

    Person:[{name:"max",age:26},
            {name:"jitu",age:32}      // we will us these properties in below in person   
  ],
  OtherState:"Some other state"
  }

  swithcNameHandler=()=>{
    //    console.log('button clicked')
    // Do not this: this.state.Person[0].name="change name"
    // do this to change state
    // change perosn only in state and not the otherState
    this.setState({
      Person:[
        {name:"maxmillian",age:27},
        {name:"jitu_g",age:31}
      ]
    })
  }
  swithcNameHandler1=(NewName)=>{
  
    this.setState({
      Person:[
        {name:NewName,age:27},
        {name:"jitu_g",age:31}
      ]
    })
  }
  
  nameChangedHandler=(event)=>{
    this.setState({
      Person:[
        {name:"Max",age:27},
        {name:event.target.value,age:31}
      ]
    })
  }
  render() {
    // inline styling for we used for buttons
    const button_style={
      backgorundColor:'White',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      margin:'0 16px auto'
    }
      return (
        <div className="App">
         <h1>Hi, I am first react for jitendra</h1>
         <p>This is really working</p>
         <button style={button_style} onClick={this.swithcNameHandler}>Switch Name</button> 
         <button style={button_style} onClick={this.swithcNameHandler1.bind(this,'Jitendra')}>Switch Name1</button>

         <Person name={this.state.Person[0].name}  
         age={this.state.Person[0].age}
         click={this.swithcNameHandler}
         > My Hobbies: Cricket</Person> 

         <Person name={this.state.Person[1].name}  
         age={this.state.Person[1].age}
         click={this.swithcNameHandler1.bind(this,'Mohan')}
         changed={this.nameChangedHandler}> My Hobbies: Fotball</Person>
        </div>
      );
    }
}
/* 
1. name and age are as attributes of person component
2. Notice the onClick event of Button for switch name. In which we have not put () after this.swithcNameHandler as we do in calling method. if we will do that that function will get called 
    as soon as the DOM loaded. hence don't put paranthesis with method calls
3. Note in one of the Person tag click is used to pass the reference of swithcNameHandle function so that this function can be invoked from paragraph in Person.js. 
    Name click can be anything as that is property name
4. PAssing/binding parameter to function. see the calling of swithcNameHandler1 in button 2 also into second tag of Person.
*/
export default App;

// Notes:
// For two way binding OnChange is sending value from Person.js to App.js and props.name is receiving value from App.js. So when input change in text bos will passed throguh a method to
// App.js and send back to Person.js to display in text box. 
// If value is passed in input type text then onChange must be called else the value in input text can't be change or we will not able to write nything in text. 
// So in App.js we are calling changed in one person tag but not in one. So we will be able to type in only ine inout text.