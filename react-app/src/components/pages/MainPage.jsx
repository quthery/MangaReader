import React, { useEffect } from 'react';
import axios from 'axios';
import './styles/MainPage.css';
import { useState } from 'react';
import ToRegistr from './panels/ToRegistr.jsx';
import SignInPanel from './panels/SignInPanel.jsx';

function MainPage() {
    const [buttonText, setButtonText] = useState('ВОЙТИ')
    const [regText, setRegText] = useState('РЕГИСТРАЦИЯ')
    const [inputs, setInputs] = useState([
        {
            "placeholder":"логин",
            "id":"login",
            "type":""
        },{
            "placeholder":"пароль",
            "id":"password",
            "type":"password"
        }
    ])

    function toReg(e){
        if (buttonText === 'ВОЙТИ'){
            setButtonText('ЗАРЕГИСТРИРОВАТЬСЯ')
            setRegText('ВХОД')
            setInputs([...inputs, {
                "placeholder":"повторный пароль",
                "id":"second_password",
                "type":"password"
            }])
        }else{
            setButtonText('ВОЙТИ')
            setRegText('РЕГИСТРАЦИЯ')
            setInputs([
                {
                    "placeholder":"логин",
                    "id":"login",
                    "type":""
                },{
                    "placeholder":"пароль",
                    "id":"password",
                    "type":"password"
                }
            ])
        }
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/get_users')
        .then(r => {
            console.log(r.data)
        })
    }, [])

    return (
        <div className="body-panel">
            <SignInPanel
                buttonText={buttonText}
                inputs={inputs}
                ></SignInPanel>
            <ToRegistr toReg={toReg}>{regText}</ToRegistr>
        </div>
    );
}

export default MainPage;