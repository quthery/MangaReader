import React from 'react';
import classes from './AncorNav.module.css'
import { Link } from 'react-router-dom';


function AncorNav(props) {
    return (
        <Link className={classes.ancorNav} to={props.href}>
            {props.children}
        </Link>
    );
}

export default AncorNav;