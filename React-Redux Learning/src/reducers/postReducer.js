//create types which are just actions
import { FETCH_POSTS, NEW_POSTS } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function(action, state = initialState,){
    switch(action.type){
        case FETCH_POSTS: 
            return {
                ...state,
                items: action.data
            }
        case NEW_POSTS:
            return{
                ...state,
                item: action.data
            }
        default:
            return state;
    }
}