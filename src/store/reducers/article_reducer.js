import { GET_LATEST, GET_OTHER, GET_ARTICLE, HANDLE_ARTICLE_LIKES, CLEAR_ARTICLE_DATA } from '../types';

export default function (state = null, action) {
    switch(action.type){
        case GET_LATEST:
            return {...state, latest: action.payload }
        case GET_OTHER:
            return {...state, other: action.payload}
        case GET_ARTICLE:
            return {...state, article: action.payload}
        case HANDLE_ARTICLE_LIKES:
            return {...state, article: [action.payload]}
        case CLEAR_ARTICLE_DATA:
            return {...state, article: action.payload}
        default:
            return state;
    }
}