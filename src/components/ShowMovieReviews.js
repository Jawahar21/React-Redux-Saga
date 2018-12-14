import React , {Component} from 'react';
import { connect } from 'react-redux'
import MovieCard from './MovieCard';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';

class ShowMovieReviews extends Component{

    componentDidMount(){
        this.props.actions.getMovieReviews();
    }
    render(){
        const { movies, isFetching } = this.props;
        console.log(movies);
        debugger;
        const movieCards = movies.map(
             (movie,index) => 
                { 
                    return <MovieCard key={index} url={movie.url} name={movie.name} description={movie.description} rating={movie.rating} />
                })
        return(
            <div>
                <p>{ isFetching ? 'Loading...' : ''}</p>
                {movieCards}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    debugger;
    return {
        movies : state.moviesReducer.movies,
        isFetching : state.moviesReducer.isFetching
     };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowMovieReviews);