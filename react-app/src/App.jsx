import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage.jsx';
import MangaReadPage from './components/pages/MangaReadPage.jsx';
import MangaSearchPage from './components/pages/MangaSearchPage.jsx';
import MangaItemPage from './components/pages/MangaItemPage.jsx';
import NavPanel from './components/pages/panels/NavPanel.jsx';

function App(){
    return(
        <>
            <NavPanel></NavPanel>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/readmanga' element={<MangaSearchPage/>} />
                <Route path='/readmanga/:mangaName/read' element={<MangaReadPage/>} />
                <Route path='/readmanga/:mangaName/page' element={<MangaItemPage/>} />
            </Routes>
        </>
)};

export default App;