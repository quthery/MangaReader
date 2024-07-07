import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './../panels/styles/ReadPage.css';

function MangaReadPagePanel() {
    const [pageId,setPageId] = useState(1)
    const name = (window.location.href).split('/')[4]

    // document.querySelector('.bg-image').innerHTML = ''

    axios.get(`http://127.0.0.1:8000/manga_all_pages?mangaName=${name}`)
    .then(r => {
        localStorage.setItem('countOfPages', r.data["countOfPages"])
    });

    function updatePageNumber(npg){
        let number = document.querySelector('.page-number')
        number.innerHTML = `${npg}/${localStorage.getItem('countOfPages') - 2}`
    }

    function pageMoveLeft(ev){
        if (pageId !== 1){
            setPageId(pageId-1)
            updatePageNumber((pageId - 1))
        }
    }

    function pageMoveRight(ev){
        if ((pageId + 2) < localStorage.getItem('countOfPages')){
            setPageId(pageId+1)
            updatePageNumber((pageId + 1))
        }
    }

    function changePage(ev){
        if (ev.key === 'ArrowLeft'){
            pageMoveLeft(ev)
        }
        if (ev.key === 'ArrowRight'){
            pageMoveRight(ev)
        }
    }

    document.querySelector('html').onkeydown = changePage

    useEffect(() => {
        updatePageNumber(pageId)
        let buttonLeft = document.querySelector('.button-left')
        let buttonRight = document.querySelector('.button-right')
        let mangaPage = document.querySelector('.page > div > img')
        let number = document.querySelector('.page-number')

        setInterval(() => {
            buttonLeft.style.width = ((window.innerWidth - mangaPage.clientWidth) / 2) + 'px'
            buttonRight.style.width = ((window.innerWidth - mangaPage.clientWidth) / 2) + 'px'

            number.style.left =
                ((window.innerWidth - mangaPage.clientWidth) / 2)
            +   mangaPage.clientWidth
            -   number.clientWidth + 'px';
        }, 50)
    },[])

    return (
        <div className='page'>
            <button
                className='button-left'
                onClick={ev => pageMoveLeft(ev)}>
                <img src="https://cdn-icons-png.flaticon.com/512/54/54833.png" alt="стрелко влева" />
            </button>
            <div>
                <img src={`http://127.0.0.1:8000/${name}/${pageId - 1}`} key={'main'} alt='Страница манги'></img>
                <div className='page-number'>
                </div>
            </div>
            <button
                className='button-right'
                onClick={ev => pageMoveRight(ev)}>
                <img src="https://cdn-icons-png.flaticon.com/512/54/54833.png" alt="стрелко вправо" />
            </button>
        </div>
    );
}

export default MangaReadPagePanel;