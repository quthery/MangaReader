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
        nameSyst: 'Клинок разрезащий оао',
        name: 'kny',
        desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus molestiae iure optio nisi dolor est neque, fugiat qui eligendi cupiditate labore illum praesentium hic quia alias corporis rerum cum atque quis dicta. Omnis a vel excepturi similique quis quo saepe necessitatibus delectus cum laboriosam, fugiat quae sed id, voluptatum rerum explicabo vero nisi error non laborum dolores deserunt. Odit tempore quas iusto, consequuntur itaque, officiis dolor corporis fugit minima magnam vel porro aut sed a quasi non, ex quam saepe recusandae error voluptate reiciendis. Quo beatae nostrum eum, temporibus, dolore, assumenda cumque eaque dolorum eveniet ducimus laudantium! Sint, odit neque adipisci voluptatem ad quaerat nobis. Numquam magnam officia id voluptatibus incidunt ipsam ab, non fugiat, cumque deleniti maxime quae. Quaerat exercitationem voluptate voluptatem iste reprehenderit, labore nulla perferendis! Blanditiis assumenda libero quaerat quasi, voluptatem consectetur quae a accusantium id nemo labore culpa magni fugiat nihil, maiores omnis aperiam unde ad nisi. Adipisci placeat autem voluptatum incidunt cumque consequuntur fugit ipsum corporis dolore officiis quam ducimus nemo maxime, a cum quasi quibusdam laborum voluptatibus amet culpa nihil atque? Aut, dolore deleniti officiis nihil minima officia placeat praesentium adipisci accusantium, ducimus tenetur culpa deserunt quis ullam minus temporibus sed eaque. Ipsa consequatur omnis accusantium, dolorum maiores tempore voluptas ipsam animi vel officiis qui modi provident velit maxime laboriosam aliquam inventore? Cum numquam quidem perferendis assumenda omnis aliquid asperiores adipisci ducimus. Aut ipsa ducimus doloremque beatae nihil accusantium velit sed quisquam voluptas quaerat dicta, explicabo pariatur autem iure modi debitis nisi eveniet! Modi ab hic laboriosam vero quibusdam corrupti reprehenderit rem non molestiae veniam. Quos laudantium reprehenderit cupiditate totam, dolores facere dolorem nostrum eos harum omnis fuga iste magnam perferendis labore beatae unde aliquam error, ad quisquam aut facilis doloremque commodi? Repudiandae quasi porro illo nam unde doloremque quisquam dolore ipsam explicabo eveniet modi praesentium velit ipsum sit asperiores consectetur ipsa eaque magni ab, excepturi pariatur delectus officiis veritatis sed? Excepturi, nobis alias debitis quia consectetur porro iusto obcaecati? Obcaecati, officiis culpa recusandae reprehenderit neque voluptatum ipsam, saepe corporis nisi dolor error molestias earum numquam rerum vel sed, expedita ipsa voluptates quibusdam placeat harum! Dolores veritatis officiis cumque error doloribus ipsum omnis accusantium aut, reiciendis pariatur nostrum iusto unde maiores eveniet dicta, explicabo vitae recusandae quod nesciunt autem facere. Aspernatur totam ex quam beatae ullam at nihil, laborum voluptate commodi tempore ipsam voluptatibus nam hic accusamus explicabo pariatur vel perspiciatis ad reiciendis. Quasi accusantium quia, doloribus atque commodi et alias autem delectus, maxime debitis minus ratione, soluta laborum tempora illo omnis perspiciatis? Ipsum quo maiores inventore nisi, minus nostrum provident sequi earum! Explicabo vero error cumque ullam, architecto facere aliquam placeat suscipit repellat rerum maxime consectetur corporis cupiditate nemo rem odio sequi minus eligendi alias ea quisquam possimus voluptatum similique? Facere quo fugit optio ea ipsa impedit, est recusandae sit, nisi accusantium error quidem molestias magni libero minus quae corrupti quisquam unde? Vitae, et, consectetur explicabo fugit repellendus reprehenderit nisi recusandae hic aut magnam fuga eius nobis necessitatibus libero voluptatum temporibus voluptate numquam dignissimos nemo doloribus illo voluptas! Consequuntur aliquid facere animi harum veritatis impedit iste quam sed autem minima iure atque omnis culpa itaque sequi, quis aliquam accusamus. Ipsum repudiandae ex soluta perspiciatis provident necessitatibus et animi ullam architecto. Cumque ratione sapiente, aut nesciunt earum inventore aliquid nam optio. Totam, quas. Eligendi doloribus provident nisi quidem error sunt, sint earum harum laboriosam incidunt iste dolorem, commodi deserunt! Esse sit quos, quia aperiam distinctio sunt nesciunt consequatur ratione quis inventore amet voluptatum alias illum excepturi unde neque. Facere quaerat impedit laudantium voluptatibus repellendus nostrum rerum suscipit sequi tenetur? Doloremque, nisi aliquid voluptatum dicta dolore unde qui velit voluptas corrupti architecto, omnis delectus necessitatibus quae assumenda tenetur, sunt odit libero natus! Iste reprehenderit unde eligendi? Ipsa consequuntur esse dolore culpa obcaecati illo excepturi voluptate sed vero natus recusandae minima quae consectetur, facere ab aliquam corrupti delectus eius. Dolor inventore distinctio veniam, quasi soluta neque eos maxime dolorem odio eius consectetur, ipsa odit itaque. Perspiciatis pariatur illum repellat officiis deleniti veritatis id! Deleniti accusamus enim veniam cupiditate modi magni nostrum facere expedita fugit rem earum necessitatibus voluptate, dolorum nesciunt, repellat vero, voluptatem mollitia! Doloremque cupiditate totam dicta quas dolores omnis error vitae autem cumque possimus repudiandae esse consequuntur, laborum cum porro praesentium officiis provident impedit sit assumenda maxime est. Ipsam praesentium officia cum, rerum velit doloribus dignissimos voluptate ut eligendi veniam eveniet repudiandae. Deleniti aperiam modi cupiditate atque, sit alias, reiciendis maxime expedita possimus sequi quas harum amet dolorem accusantium similique ea illum ex. Corporis praesentium error vero, eius molestiae velit nemo et officiis doloribus voluptas nulla libero consequatur. Magni reprehenderit optio, inventore nesciunt, culpa at amet, quidem dolor deleniti aperiam harum vero et saepe minima quas eius praesentium doloribus ipsa odit aut debitis? Fuga at atque totam molestias modi dignissimos libero ab temporibus necessitatibus vel illum aliquam quaerat cumque eum, pariatur facilis? Odit magni, quisquam inventore quasi sit, porro possimus alias dolorem vero amet minus. Illum nisi amet sapiente? Odio modi provident, similique deserunt nam eius porro necessitatibus commodi quibusdam aperiam eveniet. Ipsa excepturi corporis accusantium, quaerat porro ducimus autem optio iste amet et dicta dolorem voluptates, laborum, tenetur deleniti reprehenderit dolores sint voluptatum quod beatae dolorum dolor ipsam molestiae. Autem dolore pariatur eligendi natus minima veritatis ipsam, nemo dolores quia eum sequi officiis eius exercitationem ut voluptatum. Veniam ipsam nemo qui modi nihil, iusto ratione ab excepturi commodi voluptas exercitationem aliquid sit id provident laborum autem reiciendis? Aperiam, corrupti quis. Fugit vitae, illum dolores asperiores esse vel maiores placeat veritatis ipsam? Iusto amet, ex dolores inventore voluptatibus hic quasi blanditiis ullam eligendi architecto fuga aliquid vel alias culpa illum distinctio quibusdam maiores sapiente iure voluptate repudiandae voluptates corporis deleniti. Incidunt culpa sapiente dignissimos cum dolore sint, aspernatur architecto accusamus aliquam atque fugiat ducimus unde hic exercitationem eius distinctio blanditiis quia praesentium modi! Ipsum dolorum officia quo tenetur. Accusamus quaerat illo dolorem laborum eos modi sint cupiditate aspernatur ducimus, laboriosam cumque atque voluptatibus nulla porro expedita excepturi dolorum libero, quae id molestias iure et voluptas voluptate! Vero quam eos sequi blanditiis velit eligendi maxime recusandae unde beatae obcaecati aperiam consequatur reiciendis quo, eaque accusantium a possimus, eius necessitatibus quae aspernatur quas. Quidem quis pariatur consequuntur exercitationem quas voluptates maiores magnam quos odit facilis aspernatur nostrum laborum explicabo possimus esse soluta accusantium, qui asperiores omnis et ducimus? Quae, ipsam! Quo suscipit sed maiores saepe? Veniam, earum pariatur iusto suscipit reiciendis hic, corrupti autem nihil ex quae vitae ducimus natus eos, ut quam tempora ullam illum rerum! Et facere ad eveniet ipsa dicta. Quas ipsa ad accusamus! Quisquam doloribus suscipit officiis, voluptatibus sed laborum minima quod minus error fugiat vero reiciendis labore hic earum omnis porro vel repudiandae rerum quae? Optio consequuntur iste deserunt doloremque at, mollitia porro omnis, accusamus minus libero quis obcaecati nesciunt sunt incidunt nemo cupiditate laudantium alias. Eum, esse. Quia commodi dolorem nisi minima delectus accusantium error, laboriosam repudiandae aperiam nam optio voluptas sed earum enim doloremque molestiae aliquid, quaerat distinctio fugiat, vero fuga. Quia doloremque facere molestiae quaerat nihil, natus, accusamus, sint excepturi eligendi incidunt eaque officia corporis libero eius eos perferendis ratione ad! Voluptatem et necessitatibus accusamus aspernatur qui asperiores facere repudiandae optio voluptates provident obcaecati tempora eveniet, mollitia sapiente dolorum temporibus aperiam error. Perferendis corrupti aliquid sit error quibusdam quaerat placeat deserunt! Sit maiores in, odio labore accusamus consectetur nesciunt voluptatem eum pariatur. Quo et eaque dolores earum obcaecati impedit saepe ut dolorem, modi vel alias magni distinctio quasi aliquid consequuntur adipisci ab aut, tempore error reiciendis sit facere esse facilis unde. Unde ipsam quaerat quas voluptates magni, incidunt expedita nemo cum illum natus commodi aut molestiae ex maiores consequatur eligendi! Vel tenetur soluta quibusdam sunt tempore illo, vitae temporibus iste, amet incidunt in. Laborum laboriosam numquam quod facilis harum, cupiditate ipsam explicabo impedit qui consectetur atque nemo veniam.',
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