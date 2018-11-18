import React , {Component} from 'react';
import { Button } from 'react-bootstrap';
import TextInput from './TextInput';
import StarRatingComponent from 'react-star-rating-component';

export default class AddMovieReview extends Component{
    constructor(){
        super()
        this.state = {
            movie : {
                imageURL : '',
                name : '',
                description : '',
                rating: 0
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.onStarClick = this.onStarClick.bind(this);
    }
    handleChange(event){
      console.log(event.target.name);
      let input = this.state.movie;
      console.log(input);
      switch (event.target.name) {
        case 'url':
          input.imageURL = event.target.value;
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
    onStarClick(nextValue, prevValue, name){
      let input = this.state.movie;
      input.rating = nextValue;
      this.setState({ movie : input })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                  <TextInput
                    name="url"
                    value={this.state.movie.imageURL}
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
                  <Button type="submit" bsStyle="primary">Submit</Button>
                </form>
            </div>
        );
    }
}
