import React, { useEffect, useState } from 'react';
import './styles/MainPage.css';
import FilterPanel from './panels/FilterPanel.jsx';
import { MangasPanel } from './panels/MangasPanel.jsx';
import {observer} from 'mobx-react-lite'

export const MangaSearchPage = observer(() => {
    return (
        <div className='body-panel'>
            <FilterPanel></FilterPanel>
            <MangasPanel></MangasPanel>
        </div>
    );
})