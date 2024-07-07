import React from 'react';
import axios from 'axios';
import './styles/MangaItemPage.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MangaItemPage() {
    const navigate = useNavigate()
    const id = (window.location.href).split('/')[4]
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/find_manga_by_id?id=${+id}`)
        .then(r => {
            setName(r.data.manga.nameSyst)
            setDesc(r.data.manga.desc)
            setTitle(r.data.manga.name)
        });
    }, [])

    return ( <div className='body-panel'>
        <div className='info-manga'>
            <div className='cover'>
                <img src={`http://localhost:8000/${title}/cover`} className='cover-img'></img>
                <button onClick={() => {navigate(`/readmanga/${title}/read`)}}>ЧИТАТЬ</button>
            </div>
            <div className='info'>
                <div className='title-name'>
                    {name}
                </div>
                <div className='advanced'>
                    <div className='description'>
                        <div className='desc-info'>
                            {desc}
                        </div>
                    </div>
                    <div className='info-about'>
                        <div className='tags'>
                            <span className='tags-title'>Теги</span>
                        </div>
                        <div className='rait'>
                            <span className='rait-title'>Рейтинг</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div> );
}

export default MangaItemPage;