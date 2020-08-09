import React, { Component } from 'react';
import './App.css';
// This js is being renamed from App.js to App_notes.js. As I have added the notes to understand the first component. Will have created replica of this to work ahead. Please study the comments of this.
class App extends Component {
  render() {
    /* return (
       <div className="App">
        <h1>Hi, I am first react for jitendra</h1>
       </div>
     );*/
    // The above commentd code can be done by using creactElementMethod of React imported above
    /*
     return React.createElement('div',null,'h1','I am first react using create element') 

     */
    // The above line will render two text h1 and I am first react using create element in div and not the h1 element in div. to do that                                                                                       
    // we need to add one more cereatelement like below
    
    /*
    return React.createElement('div',null,React.createElement('h1',null,'I am first react using create element'))     
    
    */
    // Aplying class in div in create element     
    
    // return React.createElement('div',{className:'App'},React.createElement('h1',null,'I am first react using create element'))        // Applied class in the div element. App.css is imported above                                                              
    /* so the code 
    <div className="App">
        <h1>Hi, I am first react for jitendra</h1>
       </div>

       can be done uisng create element and in the the html code is internall compiled to createElement code we doid above.
       */
      return (
        <div className="App">
         <h1>Hi, I am first react for jitendra</h1>
         <p>This is really working</p>
        </div>
      );
    }
}
// This js is being renamed from App.js to App_notes.js. As I have added the notes to understand the firts component. Will have created replica of this to work ahead. Please study the comments of this.

export default App;
