import React from 'react';
import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            <ul>
                <li>Menu 1</li>
                <li>Menu 1</li>
                <li>Menu 1</li>
            </ul>
        </nav>
    </header>
);

export default toolbar;
