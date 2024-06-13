import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
        axios.get(`http://127.0.0.1:8000/find_manga?MangaName=${name}`)
        .then(r => {
            console.log(r.data['manga'])
            localStorage.setItem('description', r.data['manga']['desc'])
        });
    }

    return ( <div className='body-panel'>
        <div className='info-manga'>
            <div className='cover'>
                <img src={`http://localhost:8000/get_cover/?MangaName=${name}`} className='cover-img'></img>
                <button onClick={() => {goToRead()}}>Читать</button>
            </div>
            <div className='info'>
                <div className='title-name'>
                    {getTitleName()}
                </div>
                <div className='description'>
                    <div className='desc-title'>
                        Описание
                    </div>
                    <div className='desc-info'>
                        {getDescription()}
                        {localStorage.getItem('description')}
                    </div>
                </div>
            </div>
        </div>

    </div> );
}

export default MangaItemPagePanel;