import React from 'react';
import './styles/MainPage.css';
import FilterPanel from './FilterPanel.jsx';
import axios from 'axios';

function MangaBodyPanel(props) {
    function showMangas(mangas){
        console.log(mangas)
    }

    axios.get('http://127.0.0.1:8000/get_all')
    .then(r => {
        showMangas(r.data['Все манги'][0])
    });

    return (
        <div className='body-panel'>
            <FilterPanel></FilterPanel>
        </div>
    );
}

export default MangaBodyPanel;