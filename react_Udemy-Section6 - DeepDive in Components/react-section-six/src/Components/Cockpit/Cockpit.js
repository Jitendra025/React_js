import React, { useEffect } from 'react';

import './Cockpit.css';

const Cockpit = ( props ) => {
    useEffect(()=>{
        console.log('Cockpit.js useEffect1()');
        alert('First use effect, will be called only once')
        return(()=>{ // this will be called when component is about to remove from DOM and after every render cycle. or more precise , it runs before the main useEffect function and After the (first) render cycle
            console.log('Cockpit.js clean up work here()')
        })
        // Http request can be done from here.
    },[]); // Notice the empty array [] here. The second parameter [] tells the dependency when the useEffect should call. If passed empty it will call only first time component will render.
            // if second parameter not [] passed as all i.e. [] is removefd from here , useEffect will be called for every rendring. .

    // Let we have a second useEffect which will call first time (this can't be control) and when there is any change in person property
    useEffect(()=>{
        console.log('Cockpit.js useEffect2()');
        alert('Second use effect, will be called on load and when person changed')
        // Http request can be done from here.
    },[props.personsLength]); // now [props.person] tells that this useEffect will call if there is any change in the length persons props (means person added or deleted). i.e when you change anything in the input text box 
                        // Any change in person will invoke this.

    // Let we have a third useEffect which will call on every render
    useEffect(()=>{
        console.log('Cockpit.js useEffect3()');
        alert('Third use effect, will be called always on every render')
        // Http request can be done from here.
    }); // see second parameter [] is not there

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = 'red';
    }

    if ( props.personsLength <= 2 ) {
      assignedClasses.push( 'red' ); // classes = ['red']
    }
    if ( props.personsLength <= 1 ) {
      assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
    }

    return (
        <div className='Cockpit'>
            <h1>This is first react for jitendra</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default React.memo(Cockpit); // React.memo() prevent functional component to re render if there is no change in any of the dependent property of this component.