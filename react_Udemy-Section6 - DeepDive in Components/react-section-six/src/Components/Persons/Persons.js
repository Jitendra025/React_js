//import React, {Component} from 'react'; -- commented to use PureComponent
import React, {PureComponent} from 'react';
import Person from './Person/Person';

// map funtion worked for each element in person list
// class Persons extends Component{ ----commented to use PureComponent
class Persons extends PureComponent{
    // below are the methods of update life cycle for component for pops changes
    // this method is also part of create life cycle so this will also called when first tme component will render.
    static getDrivedStateFromProps(props,state){
        console.log('Persons.js getDerivedStateFromProps method called',props);
        return state;
    }
    // the below method will execute when property of component will change. In this example when will change the name in text box, that will trigger the namechangehandler in App.js
    // name change handler changes the state in App.js that is passed in person property of Persons component. The code for reference is added below as multiline comment after export statment
   /*
    shouldComponentUpdate(nextprops, nextState)
    {
        console.log('Persons.js shouldComponentUpdate method called');
        if(nextprops.person!==this.props.person)  // Just to note here person is an arrya (see App.js state) and are objects in React.js. So object are ref types and stored only pointers. Here we are comparing pointers only and hence in namechangehandler method
                                                  // of App.js we are creating a copy of person array to change and re assing it to person array in state and that will also assign a new pointer to state person array
                                                  // if we don;t do that this condition will remain always false as we change the original person data but not the pointer by assing new person that we did acutually in namechnagehandler method
        {
            return true; // render Persons only if there is any chnage in the person property of Persons
        }
        else
        {return false; }// don't render
        // we can change the upcoming props like below
        // this.props=nextprops; -------------commented for this exercise and will be used when will do more deep dive.
        //return true;
    }*/ // Commented as PureComponent has shouldComponentUpdate inbuilt. and PureComponent checks for each property and allow re-render if any of them changed.
    getSnapshotBeforeUpdate(preProps, preState){
        console.log('Persons.js getSnapshotBeforeUpdate method called');
        return{message:'some snapshot'}; // we can also save the previos props and state and can use them later.
    }
    componentWillUnmount()
    {
        console.log('Persons.js componentWillUnmount method called');
    }
    componentDidUpdate(preProps, preState,snapshot)
    {
        console.log('Persons.js ComponentDidUpdate method called');
        console.log(snapshot); // snapshot will containe what is return from snapshot method.
    }
    render(){
                console.log('Persons.js component rendring....');
                return this.props.person.map((person,index)=>
                { 
                    return (<Person name={person.name} age={person.age}
                    click={()=>this.props.clicked(index)}
                    changed={(event)=>this.props.changed(event,person.id)}
                    key={person.id}/>
                        );
                });
    };
};

export default Persons;

/*

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
            persons={this.state.Person}
            clicked={this.togglePersonHandler}></Cockpit>
          {person} 
          </div>
      );
    }

*/