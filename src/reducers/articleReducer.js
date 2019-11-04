import {fetchArtlce} from './../actions/articleAction';
import {actionType} from './../actions/actionType'
const initState = {
    articles : []
}
export const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.FETCH_ARTICLE:
        return{...state, articles: action.payload}
        
        default:
        return state;
    }
}