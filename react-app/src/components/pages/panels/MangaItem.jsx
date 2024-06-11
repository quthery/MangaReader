import React from 'react';
import { useNavigate } from 'react-router-dom';

const MangaItem = props => {
    const navigate = useNavigate()

    function navigationToReadPage(name){
        navigate(`${name}/read`)
    }

    return (
    <div className='manga-item' onClick={() => navigationToReadPage(props.manga.name)}>
        <div className='manga-item-cover'>
            <img src='http://127.0.0.1:8000/jujika/1' alt='page manga'></img>
        </div>
        <div className='manga-item-info'>
            <div className='title'>
                <span >Название: {props.manga.name}</span>
            </div>
            <div className='desc'>
                <span>{`Описание: ${(props.manga.desc).slice(0,288)}`}</span>
            </div>
        </div>
    </div> );
}

export default MangaItem;