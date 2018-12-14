import React , {Component} from 'react';
import { Button } from 'react-bootstrap';
import TextInput from './TextInput';
import StarRatingComponent from 'react-star-rating-component';
import * as actions from '../actions/actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export class AddMovieReview extends Component{
    constructor(){
        super()
        this.state = {
            movie : {
                url : '',
                name : '',
                description : '',
                rating: 0
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onStarClick = this.onStarClick.bind(this);
    }
    handleChange(event){
      let input = this.state.movie;
      switch (event.target.name) {
        case 'url':
          input.url = event.target.value;
          this.setState({ movie : input})
          break;
        case 'name':
          input.name = event.target.value;
          this.setState({ movie : input})
          break;
        case 'description':
          input.description = event.target.value;
          this.setState({ movie : input})
          break;
        default:
          return;
      }
      console.log(this.state.movie);
    }
    handleSubmit(event){
      event.preventDefault();
      this.props.actions.addReview(this.state.movie);
      this.setState({
        movie : {
          url : '',
          name : '',
          description : '',
          rating: 0
        }
      });
    }
    onStarClick(nextValue, prevValue, name){
      let input = this.state.movie;
      input.rating = nextValue;
      this.setState({ movie : input })
    }
    componentDidMount(){
      this.props.actions.setFetcherToOff()
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                  <TextInput
                    name="url"
                    value={this.state.movie.url}
                    handleChange={this.handleChange}
                    label="Image URL"
                  />
                  <TextInput
                    name="name"
                    value={this.state.movie.name}
                    handleChange={this.handleChange}
                    label="Movie Name"
                  />
                  <TextInput
                    name="description"
                    value={this.state.movie.description}
                    handleChange={this.handleChange}
                    label="Description"
                  />
                  <div style={{ fontSize: 30}}>
                    <StarRatingComponent
                      name="rating"
                      starCount={5}
                      value={this.state.movie.rating}
                      onStarClick={this.onStarClick}
                      starColor="#f2b01e"
                      emptyStarColor="#000000"
                    />
                  </div>
                  <Button type="submit" bsStyle="primary">{ this.props.isFetching ? 'Submitting...' : 'Submit' }</Button>
                </form>
            </div>
        );
    }
}
function mapStateToProps(state) {
  return { isFetching : state.moviesReducer.isFetching };
}
function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators(actions, dispatch)
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(AddMovieReview);