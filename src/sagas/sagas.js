import * as actions from '../actions/actions';
import * as actionsTypes from '../actions/actionTypes';
import { takeLatest,put } from 'redux-saga/effects';
import axios from 'axios';

export function* getReviews(){
    try{
        console.log("Here I need to fetch data");
        const response = yield axios.get('https://localhost:44385/odata/Movie');
        const movies = response.data.value;
        yield put(actions.getMovieReviewsSuccess(movies));
        yield put(actions.setFetcherToOff());
        console.log(movies);
    }
    catch(error){
        console.log(error);
        // 
    }
}

export function* addReview(action){
    try{
        const movie = action.movie;
        console.log("Post data here");
        console.log(movie);
        // yield call(helper.addReview, movie);
        // return axios...etc
        // keep only one saga in one file
        // takeEvery(Action.type, sagaName)
        yield axios.post('https://localhost:44385/odata/Movie', movie );
        yield put(actions.setFetcherToOff());
        // alert("Added");
    }
    catch(error){
        console.log(error);
    }
}
export function* getReviewsWatcher(){
    yield takeLatest(actionsTypes.GET_REVIEWS,getReviews);
}

export function* addReviewWatcher(){
    yield takeLatest(actionsTypes.ADD_REVIEW,addReview);
}