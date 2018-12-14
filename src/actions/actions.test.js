import * as actionTypes from './actionTypes';
import * as actions from './actions';

describe('Testing actions', () => {

    it('should create an addReview actions', () => {
        const movie = {
            movie : {
                url : 'fsdd',
                name : 'zcxm',
                description : 'asd',
                rating: 5
            }
        }
        const expectedAction = {
            type : actionTypes.ADD_REVIEW,
            movie
        }
        const action = actions.addReview(movie);
        expect(action).toEqual(expectedAction);
    })
})