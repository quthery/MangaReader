import React from 'react';
import NavPanel from './panels/NavPanel.jsx';
import MangaBodyPanel from './panels/MangaBodyPanel.jsx';

function MangaSearchPage() {
    return (
        <div>
            <NavPanel></NavPanel>
            <MangaBodyPanel></MangaBodyPanel>
        </div>
    );
}

export default MangaSearchPage;