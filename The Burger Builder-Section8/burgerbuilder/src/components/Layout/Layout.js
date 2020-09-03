import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import Toolbar from '../UI/Navigation/Toolbar/Toolbar';
import Sidebar  from '../UI/Navigation/SideDrawer/SideDrawer'

const layout = (props) =>(

    <Aux>
        <Toolbar/>
        <Sidebar/>
        <main className={classes.Content}>
            {props.children} 
        </main>
    </Aux>
);

export default layout;