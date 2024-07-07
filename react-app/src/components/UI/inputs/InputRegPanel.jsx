import React from 'react';
import classes from './InputRegPanel.module.css'

function AncorNav(props) {
    return (
        <input
            className={classes.inputReg}
            placeholder={props.children}
            type={props.type}
            ></input>
    );
}

export default AncorNav;