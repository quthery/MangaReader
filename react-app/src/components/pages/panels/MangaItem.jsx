import React, { useEffect, useRef, useState } from 'react';

const MangaItem = props => {
    return (
    <div className='manga-item' onClick={() => props.navigateTo(props.manga.name)}>
        <div className='manga-item-cover'>
            <img src='http://127.0.0.1:8000/jujika/1' alt='page manga'></img>
        </div>
        <div className='manga-item-info'>
            <div className='title'>
                <span >Название: {(props.manga.name).slice(0,30)}</span>
            </div>
            <div className='desc'>
                <span>{`Описание: ${(props.manga.desc).slice(0,288)}`}</span>
            </div>
        </div>
    </div> );
}

export default MangaItem;