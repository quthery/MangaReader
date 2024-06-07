import React from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';


function MangaReadPage() {
    let id = useParams().id
    return (
        <div>
            {/* {
                axios.get(`http://127.0.0.1:8003/getMangePage/${id}`)
                .then(r => <div>r.data</div>)
            } */}
            <img src={`http://127.0.0.1:8003/getMangePage/${id}`}></img>
        </div>
    );
}

export default MangaReadPage;