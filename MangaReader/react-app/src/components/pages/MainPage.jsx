import React from 'react';
import './panels/styles/MainPage.css';
import BodyPanel from './panels/BodyPanel.jsx';
import NavPanel from './panels/NavPanel.jsx';

function MainPage() {
    return (
        <div>
            <NavPanel></NavPanel>
            <BodyPanel></BodyPanel>
        </div>
    );
}

export default MainPage;