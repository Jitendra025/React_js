import React from 'react';

import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../../hoc/Auxiliary';

const sideDrawer = ( props ) => {
    
    return (
        <Aux>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
        </Aux>
    );
};

export default sideDrawer;