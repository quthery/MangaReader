import React, { useEffect, useRef, useState } from 'react';
import MangaItem from './MangaItem.jsx';
import { useNavigate } from 'react-router-dom';
import {observer} from 'mobx-react-lite'
import { makeAutoObservable, runInAction, toJS } from 'mobx'
import apiMangaReader from '../../../store/api/api-store.js';
import axios from 'axios';

const newApi = new apiMangaReader()

export const MangasPanel = observer(() => {
    const navigate = useNavigate()

    // React.useEffect(() => {
        // newApi.addNewManga('ЖОпа бобра','kny', 'негры')
    // }, []);

    useEffect(() => {
        if (newApi.fetching){
            newApi.getAllMangasPg()
        }
    }, [newApi.fetching])

    const scrollHandler = e => {
        if ((newApi.stopFetching === false) && e.target.scrollHeight - (e.target.scrollTop + window.innerHeight) < 80){
            runInAction(() => {
                newApi.fetching = true
            })
        }
    }

    useEffect(() => {
        document.querySelector('.body-panel').addEventListener('scroll', scrollHandler)

        return function () {
            document.querySelector('.body-panel').removeEventListener('scroll', scrollHandler)
        }
    }, []);
    function navigationToReadPage(id){
        navigate(`${id}/page`)
    }

    return ( <div className='mangas-panel'>
        {toJS(newApi.mangas).map((manga, index) =>
			<MangaItem manga={manga} key={index} navigateTo={navigationToReadPage}/>
		)}
    </div> );
})