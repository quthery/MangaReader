import React, { useState } from 'react';
import axios from 'axios';
import './panels/styles/ReadPage.css';

function MangaReadPage() {
    const [pageId,setPageId] = useState(0)
    const name = (window.location.href).split('/')[4]

    document.querySelector('.bg-image').innerHTML = ''

    axios.post(`http://127.0.0.1:8000/manga_all_pages`,{
        'mangaName':name
    })
    .then(r => {
        localStorage.setItem('countOfPages', r.data["All files"])
    });

    function changePage(ev){
        if (ev.key === 'ArrowLeft'){
            if (pageId !== 0){
                setPageId(pageId-1)
            }
        }
        if (ev.key === 'ArrowRight'){
            if ((pageId + 2) < localStorage.getItem('countOfPages')){
                setPageId(pageId+1)
            }
        }
    }

    document.querySelector('html').onkeydown = changePage

    return (
        <div className='page'>
            <img src={`http://127.0.0.1:8000/${name}/${pageId}`} key={'main'} alt='Страница манги'></img>
        </div>
    );
}

export default MangaReadPage;