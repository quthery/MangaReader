import React from 'react';
import MangaItem from './MangaItem.jsx';

function MangasPanel(props) {
    return ( <div>
        {props.mangasList.map((manga, index) =>
			<MangaItem manga={manga} key={index}/>
		)}
    </div> );
}

export default MangasPanel;