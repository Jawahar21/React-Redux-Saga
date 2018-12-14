import moviesReducer from './moviesReducer';
import * as actions from '../actions/actions';
import * as actionTypes from '../actions/actions';

describe('Testing movies reducer', () =>{

    const initialState = {
        isFetching : false,
        movies : []
    }
    const middleState = {
        isFetching : true,
        movies : []
    }
    const movie = {
        movie : {
            url : 'fsdd',
            name : 'zcxm',
            description : 'asd',
            rating: 5
        }
    }
    it('should set isFetching to true on addReview Action', () =>{
        const addReviewaction = actions.addReview(movie);
        const newState = moviesReducer(initialState,addReviewaction);
        expect(newState).toEqual(middleState);
    })
})