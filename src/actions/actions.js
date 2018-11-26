
import * as actionTypes from './actionTypes';

export function addReview(movie){
    return {
        type: actionTypes.ADD_REVIEW,
        movie
    }
}

export function setFetcherToOff(){
    return{
        type : actionTypes.FETCHER_OFF
    }
}
export function getMovieReviews(){
    return {
        type : actionTypes.GET_REVIEWS,
    }
}

export function getMovieReviewsSuccess(movies){
    return {
        type : actionTypes.GET_REVIEWS_SUCCESS,
        movies
    }
}
