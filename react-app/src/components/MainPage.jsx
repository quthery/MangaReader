import React from 'react';
import axios from 'axios';
import NavPanel from './NavPanel.jsx';
import BodyPanel from './BodyPanel.jsx';
import './styles/MainPage.css'

function MainPage() {
    return (
        <div>
            <NavPanel></NavPanel>
            <BodyPanel></BodyPanel>
        </div>
    );
}

export default MainPage;