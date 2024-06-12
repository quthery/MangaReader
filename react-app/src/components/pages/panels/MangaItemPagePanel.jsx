import React from 'react';

function MangaItemPagePanel() {
    const name = (window.location.href).split('/')[4]

    function getTitleName(){
        return name
    }

    return ( <div className='body-panel'>
        <div className='info-manga'>
            <div className='cover'>
                <img src={`http://127.0.0.1:8000/${name}/1`} className='cover-img'></img>
            </div>
            <div className='info'>
                <div className='title-name'>
                    {getTitleName()}
                </div>
                <div className='description'>

                </div>
            </div>
        </div>

    </div> );
}

export default MangaItemPagePanel;