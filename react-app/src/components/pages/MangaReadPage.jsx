import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MangaReadPagePanel from './panels/MangaReadPagePanel';

function MangaReadPage() {

    return (
        <div className='read-page-div-panel'>
            <MangaReadPagePanel></MangaReadPagePanel>
        </div>
    );
}

export default MangaReadPage;