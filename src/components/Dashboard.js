import React from 'react';
import Layout from './Layout';
import { Route} from 'react-router';
import AddMovieReview from './AddMovieReview';
import ShowMovieReviews from './ShowMovieReviews';
import Home from './Home';

export default function Dashboard(){
    return (
        <Layout>
            <Route path='/' component={Home} exact/>
            <Route path='/addMovieReview' component={AddMovieReview} />
            <Route path='/showMovieReviews' component={ShowMovieReviews} />
        </Layout>
    );
}