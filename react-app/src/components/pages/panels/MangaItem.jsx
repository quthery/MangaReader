import React from 'react';

const MangaItem = props => {

    console.log(props.manga.coverPath)

    return (
    <div className='manga-item'>
        <div className='manga-item-cover'>
            <img src='http://127.0.0.1:8000/getMangePage/3'></img>
        </div>
        <div className='manga-item-info'>
            <div className='title'>
                <span >Название: {props.manga.name}</span>
                <button><span>Перейти к чтению</span></button>
            </div>
            <div className='desc'>
                <span>{`Описание: ${(props.manga.desc).slice(0,340)}`}</span>
            </div>
        </div>
    </div> );
}

export default MangaItem;