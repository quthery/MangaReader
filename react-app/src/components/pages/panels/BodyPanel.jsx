import React, { useState } from 'react';
import RegPanel from './SignInPanel';
import ToRegistr from './ToRegistr';

function BodyPanel() {
    const [buttonText, setButtonText] = useState('ВОЙТИ')
    const [regText, setRegText] = useState('РЕГИСТРАЦИЯ')
    const [inputs, setInputs] = useState([
        {
            "placeholder":"логин",
            "type":""
        },{
            "placeholder":"пароль",
            "type":"password"
        }
    ])

    function toReg(e){
        if (buttonText === 'ВОЙТИ'){
            setButtonText('ЗАРЕГИСТРИРОВАТЬСЯ')
            setRegText('ВХОД')
            setInputs([...inputs, {
                "placeholder":"повторный пароль",
                "type":"password"
            }])
        }else{
            setButtonText('ВОЙТИ')
            setRegText('РЕГИСТРАЦИЯ')
            setInputs([
                {
                    "placeholder":"логин",
                    "type":""
                },{
                    "placeholder":"пароль",
                    "type":"password"
                }
            ])
        }
    }

    function getAllData(e){
        e.preventDefault()
        // console.log(e)
        const inputsElement = document.querySelector('.inputs').children
        
        for (let i = 0;i !== inputsElement.length;i++){
            console.dir(inputsElement[i].value)
        }
    }

    return (
        <div className="body-panel">
            <RegPanel
                buttonText={buttonText}
                getAllData={getAllData}
                inputs={inputs}
                ></RegPanel>
            <ToRegistr toReg={toReg}>{regText}</ToRegistr>
        </div>
    );
}

export default BodyPanel;