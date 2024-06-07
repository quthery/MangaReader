import React, { useState } from 'react';
import './styles/MainPage.css';
import FilterPanel from './FilterPanel.jsx';
import MangasPanel from './MangasPanel.jsx';
import axios from 'axios';

function MangaBodyPanel(props) {
    const [mangas, setMangas] = useState([])

    axios.get('http://127.0.0.1:8000/get_all')
    .then(r => {
        setMangas(r.data['Все манги'])
    });

    return (
        <div className='body-panel'>
            <FilterPanel></FilterPanel>
            <MangasPanel mangasList={mangas}></MangasPanel>
        </div>
    );
}

export default MangaBodyPanel;