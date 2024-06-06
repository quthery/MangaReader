import React from 'react';
import MainPage from './components/MainPage.jsx';
import MangaReadPage from './components/MangaReadPage.jsx';
import { Routes, Route, Link } from 'react-router-dom';

function App(){
    return(
        <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path='/readmanga/manga/:id' element={<MangaReadPage/>} />
            </Routes>
        </>
    )};

export default App;