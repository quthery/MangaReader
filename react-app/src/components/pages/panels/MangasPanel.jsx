import React, { useEffect, useRef, useState } from 'react';
import MangaItem from './MangaItem.jsx';
import { useNavigate } from 'react-router-dom';

function MangasPanel(props) {
    const navigate = useNavigate()

    useEffect(() => {
        // let mangasas = document.querySelectorAll('.manga-item')
        // for(let i = 0;i < mangasas.length;i++){
        //     console.log(mangasas[i].getBoundingClientRect().top)
        //     console.log(mangasas[i].getBoundingClientRect().left)
        // }
    },[])


    function navigationToReadPage(name){
        navigate(`${name}/page`)
    }

    return ( <div className='mangas-panel'>
        {props.mangasList.map((manga, index) =>
			<MangaItem manga={manga} key={index} navigateTo={navigationToReadPage}/>
		)}
    </div> );
}

export default MangasPanel;