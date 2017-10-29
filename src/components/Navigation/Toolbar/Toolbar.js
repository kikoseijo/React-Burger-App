import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToogle clicked={props.drawerToogleClick}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
