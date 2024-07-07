import React from 'react';
import InputRegPanel from './../../UI/inputs/InputRegPanel'

function SignInPanel(props) {
    return ( <form className='sign-in-panel'>
        <div className="inputs">
            {props.inputs.map((input, index) =>
                <InputRegPanel type={input.type} key={index}>{input.placeholder}</InputRegPanel>
            )}
        </div>

        <button
            className='sign-in-button'
            type='submit'
            onClick={e => props.getAllData(e)}
            >{props.buttonText}</button>
    </form> );
}

export default SignInPanel;