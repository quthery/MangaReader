import React from 'react';
import AncorNav from '../../UI/ancors/AncorNav.jsx';
import './styles/MainPage.css';

function NavPanel() {
    return (
        <div className='nav-panel'>
            <div className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#272727"}}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <AncorNav href="/">
                                    MangaDB🌟
                                </AncorNav>
                            </li>
                            <li className="nav-item">
                                <AncorNav href="/readmanga">
                                    Читать
                                </AncorNav>
                            </li>
                            <li className="nav-item">
                                <AncorNav href="http://localhost:3000/">
                                    FAQ
                                </AncorNav>
                            </li>
                            <li className="nav-item">
                                <AncorNav href="http://localhost:3000/">
                                    API
                                </AncorNav>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="profile-info d-flex align-items-center">
                    {/* <img src="your_profile_image.jpg" alt="Profile Image" /> */}
                    <span>Имя профиля</span>
                </div>
            </div>
        </div>
    );
}

export default NavPanel;