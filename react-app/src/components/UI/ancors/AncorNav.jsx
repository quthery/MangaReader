import React from 'react';
import classes from './AncorNav.module.css'
import { Link } from 'react-router-dom';


function AncorNav({href, ...props}) {
    return (
        <Link className={classes.ancorNav} href={href}>
            {props.children}
        </Link>
    );
}

export default AncorNav;