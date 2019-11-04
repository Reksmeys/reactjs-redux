import axios from 'axios'
import {actionType} from './actionType'

export const fetchArtlce = () =>
{
    return (dispatch)=> {
        axios.get('http://api-ams.me/v1/api/articles?page=1&limit=15')
        .then(result => {
            console.log("result", result);
            dispatch({
                type: actionType.FETCH_ARTICLE,
                payload: result.data.DATA
            })
        })
        .catch(error => console.log("eroror fetch", error))
    }
}
export const deleteArticle = (id) => {
    
}