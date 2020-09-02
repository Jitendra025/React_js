import React from 'react';
import classes from './BuildControl.module.css';
const buildControl=(props)=>(
        <div className={classes.BuildControl}>
            
            <div>{props.label}</div>
            <button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disable}>Less</button>
            <button className={classes.More} 
            onClick={props.added}>More</button>
        </div>
    );
//toFixed(2) here is fixing the amount till 2 decimal places.
export default buildControl;