import React, { useEffect, useState } from 'react';
import './styles/MainPage.css';
import FilterPanel from './FilterPanel.jsx';
import MangasPanel from './MangasPanel.jsx';
import axios from 'axios';

function MangaBodyPanel(props) {
    const [mangas, setMangas] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [fetching, setFetching] = useState(true)
    const [stopFetching, setStopFetching] = useState(false)

    // React.useEffect(() => {
    //     axios.get('http://127.0.0.1:8000/get_all')
    //     .then(r => {
    //         setMangas(r.data['allMangas'])
    //         // console.log(r.data['allMangas'])
    //     });
        axios.post('http://127.0.0.1:8000/create_manga', {
            name: 'jujika',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni non consectetur vero ut in! Ducimus sequi magni minus adipisci excepturi, nobis dignissimos nemo ullam, quibusdam veniam nesciunt inventore nostrum. Corporis nihil animi, quia dolore maxime reiciendis voluptates tenetur sapiente soluta quas ab eveniet et minus quae fugit eaque voluptatem ut accusantium beatae sequi laudantium nesciunt rem? Dolorum doloribus optio id architecto possimus iste facilis quae ea sint ipsa. Exercitationem iure repudiandae quibusdam provident temporibus velit itaque modi minima esse a quos ullam vel sint commodi, dolore enim, asperiores aliquam quidem reiciendis magnam, at debitis officiis possimus accusamus? Necessitatibus deleniti exercitationem nulla nesciunt. Atque itaque recusandae quidem totam architecto vel quo porro explicabo, magni voluptatibus pariatur quam laboriosam obcaecati excepturi eligendi dolor tenetur tempora! Dolore perspiciatis blanditiis ad hic, eum iure et magnam nostrum sint, quae quam asperiores quaerat vero sed temporibus quod odio delectus deserunt! Consequatur ab excepturi nostrum rerum expedita porro eaque fuga, deleniti corporis perspiciatis ipsa labore libero laborum reprehenderit dignissimos veniam adipisci voluptates eligendi quae unde? Reprehenderit nostrum et ipsum quod fugit impedit cupiditate eaque ad sequi ipsa molestiae optio nemo saepe quis, in sapiente delectus repellat necessitatibus dicta, ea unde odit hic nulla? Praesentium assumenda fugiat sapiente non quas modi ab itaque quidem debitis delectus saepe, dolorum, laboriosam expedita quo aspernatur id? Quaerat voluptatem commodi quidem magni sapiente ullam odio fugit placeat! Cum amet cumque nulla! Ut explicabo commodi molestiae odit nam aspernatur, accusantium numquam, rerum laboriosam inventore ad! Adipisci illo sequi maxime dolores maiores eos fugiat deleniti ducimus ad quisquam autem quam repellendus nemo omnis expedita numquam perferendis tempore eveniet ullam tempora, quas optio nisi accusantium quae! Accusamus animi perferendis, blanditiis atque consequuntur quia doloremque doloribus minus assumenda quae fuga aliquid obcaecati quisquam at autem optio! Eveniet, totam dignissimos. Aliquid accusamus temporibus ullam ratione sequi modi sunt doloremque at quo, autem similique velit, eveniet, aliquam incidunt amet nam officiis. Ea ratione tempora recusandae quasi fugiat suscipit, quos alias aliquid eveniet vitae unde expedita, porro deserunt debitis. Architecto exercitationem praesentium ipsa, ex numquam maiores ut nobis mollitia voluptatem blanditiis sapiente, ipsum quis neque iusto illo quasi non dolorum nemo omnis sit perspiciatis maxime dicta excepturi dolor! Consequatur dolore ducimus modi natus explicabo et at ullam sed perferendis? Hic doloremque optio velit alias maxime culpa non voluptate, quis deserunt in quae explicabo blanditiis quaerat ducimus vel. Tenetur recusandae quo modi dolores ut eveniet fugiat quis ex natus itaque harum quasi, dolorem molestiae odio a ad, exercitationem, laudantium id perspiciatis. Qui maiores impedit quis libero possimus debitis magni vitae esse voluptas unde, cum veniam, id consectetur placeat, accusantium voluptate molestiae magnam animi vero sequi. Iure magni maiores soluta officiis blanditiis quasi est rem nostrum culpa aperiam ratione veritatis quod asperiores incidunt ut ipsa ullam, natus non? Quam iste dolor facere repellendus amet id maxime earum, explicabo eaque sunt quia minima nostrum, illo aspernatur quae magnam. Unde, aspernatur enim asperiores consequatur impedit adipisci tenetur, culpa eaque ex nihil quisquam nam ad, sint aliquam assumenda temporibus ipsum expedita. Dicta obcaecati laborum dolorem natus minima, magnam sint. Soluta cupiditate, minus facere autem quasi quae sunt laboriosam repellendus repudiandae, illum obcaecati incidunt, aut aspernatur. Ipsam modi libero voluptatibus commodi assumenda provident natus tenetur. At a laborum, incidunt id provident, facilis sunt alias suscipit, corrupti assumenda doloribus nam deserunt? Dolore quam eligendi corporis quisquam nemo ipsa ipsum optio repudiandae odit maiores, nobis et provident, esse debitis non? Culpa tenetur deleniti perferendis est odit molestias, excepturi voluptatibus? Aliquam qui magni aliquid rerum possimus recusandae ipsam explicabo aspernatur quae ea commodi, ut eius quis. Delectus doloribus nulla, optio iste aspernatur, adipisci earum minima consequuntur, repellendus vero asperiores. Neque quidem adipisci facere eos ratione temporibus hic aliquam quisquam facilis illo magnam, sunt in accusamus debitis itaque maxime aspernatur ad id corrupti quae expedita ea quam repudiandae delectus! Velit dolor unde vero! Corporis eum exercitationem, dolores, earum voluptate ut illum commodi sapiente accusantium amet itaque harum praesentium, repellat minima ab ratione quibusdam necessitatibus maiores! Aperiam reprehenderit temporibus non necessitatibus, officia tenetur illo quo architecto, nulla cupiditate qui voluptatem ab enim a ipsum? In corporis velit consequuntur, voluptatum modi nesciunt ullam quod distinctio iusto. Harum odit aliquam quam laborum dolorem voluptatem eligendi! Quisquam beatae nihil consequatur, architecto maiores nisi, impedit quam accusantium pariatur, ut sint ipsum sunt vero iure voluptate non dignissimos nemo excepturi. Obcaecati debitis consectetur repellendus reprehenderit est laudantium totam nihil? Non error, et consequuntur molestias nemo eaque, porro molestiae veritatis quasi iusto perferendis. Est laudantium optio, doloremque excepturi maiores soluta dolor sed ab voluptatum deserunt quod quis, aspernatur dolorum beatae tenetur natus necessitatibus consectetur? Accusantium, hic voluptatem necessitatibus alias aperiam magni commodi nesciunt molestias sint recusandae numquam dolore, harum ratione asperiores voluptatibus. Magnam explicabo dolorem maiores deserunt molestias nam praesentium non optio reprehenderit? Corrupti id dolorum nulla veniam. Ipsam aspernatur impedit inventore iusto molestias magni.',
            path:'static/mangas/jujika',
            coverPath:'static/mangas/jujika/cover.jpeg',
            CountOfPages:'123'
        })
        .then(response => {})
        .catch(error => {
            console.log(error);
        });
    // }, [setMangas]);

    useEffect(() => {
        if (fetching){
            axios.get(`http://127.0.0.1:8000/get_all_mangas_pg?numberOfPage=${currentPage}&countMangas=40`)
            .then(r => {
                if (r.data['mangas'][0] === 'PageCountError'){
                    setStopFetching(true)
                }else{
                    setMangas([...mangas, ...r.data['mangas']])
                    setCurrentPage(prevState => currentPage + 1)
                }
            })
            .finally(() => {
                setFetching(false)
            })
        }
    }, [fetching])

    const scrollHandler = e => {
        if ((stopFetching === false) && e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 80){
            setFetching(true)
        }
    }

    useEffect(() => {
        document.querySelector('.body-panel').addEventListener('scroll', scrollHandler)

        return function () {
            document.querySelector('.body-panel').removeEventListener('scroll', scrollHandler)
        }
    }, []);


    return (
        <div className='body-panel'>
            <FilterPanel></FilterPanel>
            <MangasPanel mangasList={mangas}></MangasPanel>
        </div>
    );
}

export default MangaBodyPanel