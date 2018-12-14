
import * as actionTypes from '../actions/actionTypes';

export default function moviesReducer( state= {
    isFetching : false,
    movies : []
} ,action){
    switch(action.type){
        case actionTypes.ADD_REVIEW :
            return Object.assign ({},state,{ isFetching : true });
        case actionTypes.GET_REVIEWS_SUCCESS :
            return Object.assign ({},state,{ movies : action.movies });
        case actionTypes.GET_REVIEWS :
            return Object.assign({},state,{ isFetching : true});
        case actionTypes.FETCHER_OFF:
            return Object.assign( {},state,{ isFetching : false });
        default:
            return state
    }
}