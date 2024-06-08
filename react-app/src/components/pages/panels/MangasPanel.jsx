import React from 'react';
import MangaItem from './MangaItem.jsx';

function MangasPanel(props) {
    return ( <div className='mangas-panel'>
        {props.mangasList.map((manga, index) =>
			<MangaItem manga={manga} key={index}/>
		)}
    </div> );
}

export default MangasPanel;