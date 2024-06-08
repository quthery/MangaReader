import React, { useState } from 'react';
import axios from 'axios';
import './panels/styles/ReadPage.css';

function MangaReadPage() {
    const [pageId,setPageId] = useState(0)
    const name = (window.location.href).split('/')[4]

    document.querySelector('.bg-image').innerHTML = ''

    // axios.get(`http://127.0.0.1:8000/getCountOfPages/${name}`)
    // .then(r => {
    //     console.log(r.data)
    // });

    function changePage(ev){
        if (ev.key === 'ArrowLeft'){
            if (pageId !== 0){
                setPageId(pageId-1)
            }
        }
        if (ev.key === 'ArrowRight'){
            setPageId(pageId+1)
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