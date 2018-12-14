import React from 'react';
import { shallow, mount } from 'enzyme';

import AddMovieReview from './AddMovieReview';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();
describe('Add Moview Review component form', () => {

    it('Should render correctly', () => {
        // const mockSetFetcherOff = jest.fn();
        // const mockAddReview = jest.fn();
        // const actions = {
        //     setFetcherOff : mockSetFetcherOff,
        //     addReview : mockAddReview
        //  }
        const component = mount(
            <Provider store={store} >
                <AddMovieReview  />
            </Provider>
        )
        console.log(component.find('TextInput').length);
        console.log(component.find('button').props().children);
        expect(component.find('TextInput').length).toBe(3);
        expect(component.find('button').simulate('click'));
        console.log(component.find('AddMovieReview').props());
    });

    it('Should set fetcher to ON on button click', () => {
        const component = mount(
            <Provider store={store} >
                <AddMovieReview  />
            </Provider>
        )
        const movie = {
            movie : {
                url : 'fsdd',
                name : 'zcxm',
                description : 'asd',
                rating: 5
            }
        }
        component.find('AddMovieReview').props().actions.addReview(movie);
        //expect(component.find('AddMovieReview').props().isFetching).toBe(true);
        component.find('AddMovieReview').props().actions.setFetcherToOff()
    })
})