import React, { useState } from 'react';
import './styles/MainPage.css';
import FilterPanel from './FilterPanel.jsx';
import MangasPanel from './MangasPanel.jsx';
import axios from 'axios';

function MangaBodyPanel(props) {
    const [mangas, setMangas] = useState([])

    React.useEffect(() => {
        axios.get('http://127.0.0.1:8000/get_all')
        .then(r => {
            setMangas(r.data['allMangas'])
            console.log(r.data['allMangas'])
        });
        axios.post('http://127.0.0.1:8000/create_manga', {
            name: 'jujika',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident reiciendis fugiat quibusdam impedit iste numquam! Iure, velit dolorem! Placeat, quos iste dolorum, minus, quisquam magnam voluptates natus quam rerum inventore harum? Ipsa doloremque suscipit libero ad. Atque voluptatibus sit, provident iste tenetur non, fugiat quis error laborum esse animi labore praesentium harum quisquam exercitationem autem repellendus consequatur at. Eius exercitationem quam quia sint fugiat, similique dolorem doloremque reprehenderit, deserunt eaque voluptates obcaecati! Nam eaque sequi iusto blanditiis perspiciatis? Obcaecati sit minima voluptas! Dolores, impedit distinctio. Nam laboriosam in deserunt libero obcaecati corrupti eaque recusandae esse delectus iure eveniet nisi ullam ea quidem fugit voluptas, molestias sunt itaque praesentium amet non. Reiciendis libero deserunt itaque quibusdam provident rerum sed quisquam, similique magni impedit dicta perferendis nesciunt quaerat repudiandae excepturi odit eveniet dolorum sunt, ad saepe omnis doloribus vitae fugiat! Possimus autem alias enim doloribus blanditiis ullam quisquam, modi voluptatem at maxime expedita perferendis porro accusantium eum corporis exercitationem quaerat placeat id sunt laboriosam veritatis voluptatum distinctio quas repellat? At in vel temporibus harum sit, illo facilis nihil sed culpa repellendus cum voluptatibus libero alias cupiditate atque. Veniam sunt alias soluta fuga expedita facilis in. Voluptates temporibus itaque eius reprehenderit, deserunt corrupti quae nulla esse qui soluta unde repellendus voluptas ducimus necessitatibus rem dicta iure ut hic officiis ad sint sed, quia magni! Iusto, facere vel? Unde, consequatur itaque? Accusamus eius porro, repellat voluptas maiores sint sapiente inventore fugiat facere ad modi, vel placeat iste consequatur est enim eaque! Eos ea sunt eveniet adipisci, iste officiis vitae sint magni soluta incidunt minus.',
            path:'static/mangas/jujika',
            coverPath:'static/mangas/jujika/cover.jpeg',
            CountOfPages:'123'
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
    }, [setMangas]);

    return (
        <div className='body-panel'>
            <FilterPanel></FilterPanel>
            <MangasPanel mangasList={mangas}></MangasPanel>
        </div>
    );
}

export default MangaBodyPanel;