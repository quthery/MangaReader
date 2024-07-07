import { makeAutoObservable, runInAction, toJS } from 'mobx'

import axios from 'axios'

class apiMangaReader{
    mangas = []
    fetching = true
    stopFetching = false
    currentPage = 0

    constructor(){
        makeAutoObservable(this)
    }

    getAllMangasPg(){
        axios.get(`http://127.0.0.1:8000/get_all_mangas_pg?numberOfPage=${this.currentPage}&countMangas=40`)
        .then(r => {
            if (r.data['mangas'][0] === 'PageCountError'){
                runInAction(() => {
                    this.stopFetching = true
                })
            }else{
                runInAction(() => {
                    this.mangas.push(...r.data['mangas'])
                    this.currentPage++
                })
            }
        })
        .finally(() => {
            runInAction(() => {
                this.fetching = false
            })
        })
    }

    addNewManga(nameSyst,name,desc){
        axios.post('http://127.0.0.1:8000/create_manga', {
            nameSyst: nameSyst,
            name: name,
            desc: desc
        })
        .then(response => {})
        .catch(error => {
            console.log(error);
        });
    }
}

export default apiMangaReader