import React from 'react';

const MangaItem = props => {
    return ( <div>
        <h1>{props.manga.name}</h1>
    </div> );
}

export default MangaItem;