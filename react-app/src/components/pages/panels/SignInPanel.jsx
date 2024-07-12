import React from 'react';
import InputRegPanel from './../../UI/inputs/InputRegPanel'
import axios from 'axios'

function SignInPanel(props) {
     async function getAllData(e){
        e.preventDefault()
        const inputsElement = document.querySelector('.inputs').children
        let exit = false

        if (inputsElement.length === 3){
            if (inputsElement.password.value !== inputsElement.second_password.value && inputsElement.password.value !== ''){
                console.log('ты еблан')
                return 0
            }
            await axios.post('http://127.0.0.1:8000/signup', {
                'login': inputsElement.login.value,
                'password': inputsElement.password.value,
                'second_password': inputsElement.second_password.value,
            }).then(r => {
                console.log(r.data)
                if (r.data.response === 'thisuseralreadyexists'){
                    exit = true
                    return 0;
                }

                localStorage.setItem('login', inputsElement.login.value)
                localStorage.setItem('password', inputsElement.password.value)
            })
        } else if (inputsElement.length === 2){
            await axios.post('http://127.0.0.1:8000/signin', {
                'login': inputsElement.login.value,
                'password': inputsElement.password.value,
            }).then(r => {
                console.log(r.data)
            })
        }

        if (exit) return 0;
        for (let i = 0;i !== inputsElement.length;i++){
            inputsElement[i].value = ''
        }
    }

    return ( <form className='sign-in-panel'>
        <div className="inputs">
            {props.inputs.map((input, index) =>
                <InputRegPanel type={input.type} key={index} id={input.id}>{input.placeholder}</InputRegPanel>
            )}
        </div>

        <button
            className='sign-in-button'
            type='submit'
            onClick={e => getAllData(e)}
            >{props.buttonText}</button>
    </form> );
}

export default SignInPanel;