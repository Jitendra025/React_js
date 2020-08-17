import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person' ; // We omit the .js when importing. Note the name Person is started with upper case P. becuae in react keyword starting with lower case are for kind of 
// import Radium,{ StyleRoot } from 'radium'  -------- After installing radium package. Commented later to use styled-componnets for css 
// reserved for React . see below return, div, h1 etc.
class App extends Component {
  // We can defined properties like 
  // var1="Jitendra", var2="Mohan"
  
  state ={ // in here also we can use any type of properties, currently we using array and may be adding other properties as we will progress

    Person:[{id:1,name:"max",age:26},
            {id:2,name:"jitu",age:32}      // we will us these properties in below in person   
  ],
  OtherState:"Some other state",
  showPerson_JSX:false, // state property for JSX syntex
  showPerson_IfBlock:false // State property for traditional if block
  }

  deletePersonHandle=(personIndex)=>{
    const person = this.state.Person.splice() // slice method creates the copy of array if no parameter passes. The same thing can also be done by java script spread (...) technique
    const person1 =[...this.state.Person] // This just simply copy the this.state.Person array to person1.
    person1.splice(personIndex,1) // when parameter passed slice method sliced the number of element mentioned starting from the index passed. We can do the same with person as well.
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
      const doesShow = this.state.showPerson_JSX;
      this.setState({showPerson_JSX:!doesShow});
    }

    togglePersonHandler1 = () =>{
      const doesShow = this.state.showPerson_IfBlock;
      this.setState({showPerson_IfBlock:!doesShow});  // Note that whenever state change page reload/re-renders.
    }
  render() {
    // inline styling for we used for buttons
    const button_style={
      backgroundColor: 'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      margin:'0 16px auto',
      ':hover':{ // This :hover can be add here in inline after installing Radium package. every sudo selector need to be written in this way :{then name}
        backgroundColor:'lightgreen',
        color:'black'
      }
    };
    let person=null;
    if(this.state.showPerson_IfBlock)
    {
      // person =(<Person name={this.state.Person[1].name}  
      // age={this.state.Person[1].age}
      // click={this.swithcNameHandler.bind(this,'Mohan')}
      // changed={this.nameChangedHandler}> My Hobbies: Fotball</Person>,
      // <Person name={this.state.Person[0].name}  
      // age={this.state.Person[0].age}
      // click={this.swithcNameHandler.bind(this,'Jitendra')}
      // > My Hobbies: Cricket</Person> 

      // );
      // The above code is commented as we now replscing to write person tage for each item in state.Persons array dynamically instead of repeating the same tag agqain and again for new person added/removed from the
      // Persons array.
      person=(
        <div>
          {this.state.Person.map((x,index)=>
            { return <Person name={x.name} age={x.age}
            click={this.deletePersonHandle.bind(this,index)}
            changed={(event)=>this.nameChangedHandler(event,x.id)}
            key={x.id}/>})} 
        </div>
      );

            button_style.backgroundColor='red'; // button_style is still constant as we just changed the property of the button_style and not the value
            // background color of button is changed to red as soon as person list is displayed as per if condition: if this.state.showPerson_IfBlock

            // changing inline hover property
            button_style[':hover']={
              backgroundColor:'lightred',
              color:'black'
            }
      }
       let classes =['red','bold'].join(' ')// will result in "red bold". 

       // let we take an empty array
       let class_dynamic=[];
       if(this.state.Person.length<=2){
         class_dynamic.push('red'); // will give array ['red']
       }
       if(this.state.Person.length<=1)
       {
         class_dynamic.push('bold');
       }


      return (
        // <StyleRoot>
          <div className="App">
            
          <h1>Hi, I am first react for jitendra</h1>
          <p className={class_dynamic.join(' ')}>Dynamically classes are assinged for this paragraph.</p>
          <button key="button1" style={button_style}>Switch Name</button> 
          <button key="button2" style={button_style} onClick={this.togglePersonHandler}>Show/Hide From JSX Tertionary</button> 
          <button key="button3" style={button_style} onClick={this.togglePersonHandler1}>Show/Hide From Tradition if block</button> 
          { this.state.showPerson_JSX ?                    // See how condition is used to show the elements
              <div>
              <Person name={this.state.Person[0].name}  
              age={this.state.Person[0].age}
              click={this.deletePersonHandle.bind(this,0)}
              changed={(event)=>this.nameChangedHandler(event,this.state.Person[0].id)}
              > My Hobbies: Cricket</Person> 

              <Person name={this.state.Person[1].name}  
              age={this.state.Person[1].age}
              click={this.deletePersonHandle.bind(this,1)}
              changed={(event)=>this.nameChangedHandler(event,this.state.Person[1].id)}> My Hobbies: Fotball</Person>
              </div>:null
              }
              {person} 
          </div>
        // </StyleRoot>
      );
    }
}

// export default App; // see this below is wrapped in a radium object when we start using Radium
//export default Radium(App); // changed back without Radium
export default App;

/* 
We can hide show the controls using javascript syntex. See {} where we are checking for the this.SetState.showPerson and if that is true we are rendring html tags else we are rendring null.

Also we are hiding and showing using traditional if block hwerew we have used a variable person and in that we have written whole div tag, which is then return in {person} in return block

React expect a key property that helps react to uniqely identify the list values.

React need key property to just re render the elements in list those are changed.
*/
