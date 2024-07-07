import React from 'react';
import AncorNav from '../../UI/ancors/AncorNav.jsx';
import './../styles/MainPage.css';

function NavPanel() {
    return (
        <nav className='nav-panel navbar-expand-lg'>
            <div className="nav-panel-fragment">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <AncorNav href="/">
                            MangaDB🌟
                        </AncorNav>
                    </li>
                </ul>
            </div>

            <div className="nav-panel-fragment">
                <ul className="navbar-nav ml-auto">
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

            <div className="nav-panel-fragment">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {/* <img src="your_profile_image.jpg" alt="Profile Image" /> */}
                        <span>par1tet</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavPanel;