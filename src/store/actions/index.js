import axios from 'axios';
import { GET_LATEST, GET_OTHER, GET_ARTICLE, HANDLE_ARTICLE_LIKES, CLEAR_ARTICLE_DATA } from '../types'

const ARTICLES_URL = 'http://localhost:3005/articles';

export function latestNews(){
    const request = axios.get(`${ARTICLES_URL}?_sort=id&_order=desc&_end=2`)
                    .then(response => response.data);

    return {
        type: GET_LATEST,
        payload: request
    }
}

export function otherNews(){
    const request = axios.get(`${ARTICLES_URL}?_sort=id&_order=desc&_start=2&_end=15`)
                    .then(response => response.data);
    
    return { 
        type: GET_OTHER,
        payload: request
    }
}

export function getArticleData(id){
    const request = axios.get(`${ARTICLES_URL}?id=${id}`)
                    .then(response => response.data);
    
    return { 
        type: GET_ARTICLE,
        payload: request
    }
}

export function handleArticleLikes(newLikes, id){
    const request = axios(`${ARTICLES_URL}/${id}`,{
                        method: 'PATCH',
                        headers:{
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({likes: newLikes})
                    })
                    .then(response => response.data);
    
    return { 
        type: HANDLE_ARTICLE_LIKES,
        payload: request
    }
}

export function clearArticleData(){
    return {
        type: CLEAR_ARTICLE_DATA,
        payload: null
    }
}