import React, { Component } from 'react';
import './App.css';

import Persons from '../Components/Persons/Persons' ; // We omit the .js when importing. Note the name Person is started with upper case P. becuae in react keyword starting with lower case are for kind of 
import Cockpit from '../Components/Cockpit/Cockpit'
class App extends Component {
  constructor(props)
  {
    super(props); // Whenever add costructor we have to call super(), that invoke the costructor of Component class. Constructor can only be called/created in class based components and not in function based.
    console.log('App.js constrcutor');
  }

  // Method of component life cycle invoked soon after constructor. We here overriding this and in this we can change our state. This is same init or load method in page lif cycle in c#
  static getDerivedStateFromProps(props,state){
    console.log('App.js getDerivedStateFromProps method called',props);
    return state; // After this method in component life cycle the render method executes.
  }
  
  // This method will call after render method in lifr cycle.
  componentDidMount(){
    console.log('App.js componentDidMount method called');
  }

  shouldComponentUpdate(nextprops, nextState)
  {
      console.log('App.js shouldComponentUpdate method called on state change');
      // we can change the upcoming props like below
      // this.props=nextprops; -------------commented for this exercise and will be used when will do more deep dive.
      return true; // if we return here as false it will prevent component from change. like the click button will not work as click button changes the property of button it self and render components.
  }
  getSnapshotBeforeUpdate(preProps, preState){
      console.log('App.js getSnapshotBeforeUpdate method called on state change');
      return{message:'some snapshot'}; // we can also save the previos props and state and can use them later.
  }
  componentDidUpdate()
  {
      console.log('App.js ComponentDidUpdate method called on state change');
  } 
  state ={ 
    Person:[{id:1,name:"max",age:26},
            {id:2,name:"jitu",age:32}      
  ],
  OtherState:"Some other state",
  showPerson:true 
  }

  deletePersonHandle=(personIndex)=>{
    const person = this.state.Person.splice() 
    const person1 =[...this.state.Person] 
    person1.splice(personIndex,1) 
    this.setState({Person:person1});

  }
  
  nameChangedHandler=(event,id)=>{
    const personIndex= this.state.Person.findIndex(p=>{
      return p.id===id;
    })
    const person={
      ...this.state.Person[personIndex] // We have used ... (spread) operation to create copy that copy all the properties of Person. As Person is an array of java script object ({name, age})
                                        // So we should not directly use them as the wyll give te pointer to const person object which we should not do and creat copy.
    };
    // change name
    person.name=event.target.value;
    const persons=[...this.state.Person];
    persons[personIndex]=person;
    this.setState({
      Person:persons
    })
  }

    togglePersonHandler = () =>{
      const doesShow = this.state.showPerson_IfBlock;
      this.setState({showPerson_IfBlock:!doesShow});  // Note that whenever state change page reload/re-renders.
    }
  render() {
    // inline styling for we used for buttons
    console.log('App.js render method called')
    let person=null; // Declare person variable
    if(this.state.showPerson_IfBlock)
    {
      person=(
        <div>
            <Persons person={this.state.Person}   // Using Persons component here, the Persons.js reference person.js component So we shorten the code here in App.js by creating one more compnent
              clicked={this.deletePersonHandle}   // contain the list of persons. The list of person is created in Person.js now instead of in App.js as per previous sections
              changed={this.nameChangedHandler}/>
        </div>
      );
      }
      return (
          <div className="App">
            <Cockpit showPerson={this.state.showPerson}
            personsLength={this.state.Person.length}
            clicked={this.togglePersonHandler}></Cockpit>
          {person} 
          </div>
      );
    }
}

export default App;
