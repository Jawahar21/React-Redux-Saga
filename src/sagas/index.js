import { getReviewsWatcher, addReviewWatcher } from './sagas';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        getReviewsWatcher(),
        addReviewWatcher()
    ])
}