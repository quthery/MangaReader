import React, { useEffect, useRef, useState } from 'react';

const MangaItem = props => {
    return (
    <div className='manga-item' onClick={() => props.navigateTo(props.manga.name, props.manga._id)}>
        <div className='manga-item-cover'>
            <img src={`http://localhost:8000/get_cover/?MangaName=${props.manga.name}`} alt='page manga'></img>
        </div>
        <div className='manga-item-info'>
            <div className='title'>
                <span >{(props.manga.name).slice(0,30)}</span>
            </div>
            <div className='desc'>
                <span>{`${(props.manga.desc).slice(0,519)}`}</span>
            </div>
        </div>
    </div> );
}

export default MangaItem;