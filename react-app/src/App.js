import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/pages/MainPage.jsx';
import MangaReadPage from './components/pages/MangaReadPage.jsx';
import MangaSearchPage from './components/pages/MangaSearchPage.jsx';

function App(){
    return(
        <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/readmanga' element={<MangaSearchPage/>} />
                <Route path='/readmanga/manga/:id' element={<MangaReadPage/>} />
            </Routes>
        </>
    )};

export default App;