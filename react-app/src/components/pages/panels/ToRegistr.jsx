import React from 'react';

function ToRegistr(props) {
    return ( <p className='to-reg-text' onClick={e => {props.toReg(e)}}>
        {props.children}
    </p> );
}

export default ToRegistr;