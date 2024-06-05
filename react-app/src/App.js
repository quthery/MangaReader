import React from 'react';

function App() {
  return (
    <div>
        <div className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#272727"}}>
            <div className="container d-flex justify-content-between align-items-center">
                <div>
                    <a className="navbar-brand" href="http://localhost:3000/" style={{color: 'white'}}>
                        !MangaDB🌟
                    </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/" style={{color: 'white'}}>Read</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/" style={{color: 'white'}}>FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/" style={{color: 'white'}}>API</a>
                        </li>
                    </ul>
                </div>
        
                <div className="profile-info d-flex align-items-center">
                    {/* <img src="your_profile_image.jpg" alt="Profile Image" /> */}
                    <span>Имя профиля</span>
                </div>
            </div>
        </div>
        
      <div className="container mt-5" style={{color: 'white', fontFamily:'Impact', fontSize:'25px'}}>
          Привет это Mangadb Здесь ты можешь <br />
          читать мангу скачивать ее<br />
          пользоваться нашим API бесплатно
      </div>
    </div>
  );
}

export default App;
