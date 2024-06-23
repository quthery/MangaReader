import React from 'react';
import NavPanel from './panels/NavPanel.jsx';
import MangaItemPagePanel from './panels/MangaItemPagePanel.jsx';
import './panels/styles/MangaItemPage.css';


function MangaItemPage() {
    return ( <>
        <NavPanel></NavPanel>
        <MangaItemPagePanel></MangaItemPagePanel>
    </>);
}

export default MangaItemPage;