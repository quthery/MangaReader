import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MangaItemPagePanel() {
    const navigate = useNavigate()
    const name = (window.location.href).split('/')[4]
    const [currentManga, setCurrentManga] = useState()

    function getTitleName(){
        return name
    }

    function goToRead(){
        navigate(`/readmanga/${name}/read`)
    }

    function getDescription(){
        axios.get('http://127.0.0.1:8000/get_all')
        .then(r => {
            setCurrentManga(r.data['allMangas'])
            console.log(r.data['allMangas'])
        });
    }

    return ( <div className='body-panel'>
        <div className='info-manga'>
            <div className='cover'>
                <img src={`http://127.0.0.1:8000/${name}/1`} className='cover-img'></img>
                <button onClick={() => {goToRead()}}>Читать</button>
            </div>
            <div className='info'>
                <div className='title-name'>
                    {getTitleName()}
                </div>
                <div className='description'>
                    {getDescription()}
                </div>
            </div>
        </div>

    </div> );
}

export default MangaItemPagePanel;