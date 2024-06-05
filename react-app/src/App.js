import React from 'react';
import axios from 'axios';
import MainPage from './components/MainPage.jsx';
import { Routes, Route, Link } from 'react-router-dom';

function App(){
    return(
        <>
            <Routes>
                <Route path='/' element={<MainPage/>} />
            </Routes>
        </>
    )};

export default App;