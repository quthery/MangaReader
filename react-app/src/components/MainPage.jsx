import React from 'react';
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