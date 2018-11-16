import React , {Component} from 'react';
import {FormGroup,HelpBlock,Button,ControlLabel,FormControl} from 'react-bootstrap'
export default class AddMovieReview extends Component{
    constructor(){
        super()
        this.state = {
            movie : {
                imageURL : '',
                name : '',
                description : '',
                rating: ''
            }
        }
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                        <FormGroup
                            controlId="url"
                        //validationState={this.getValidationState()}
                        >
                            <ControlLabel>Image URL</ControlLabel>
                            <FormControl
                                bsSize="sm"
                                type="text"
                                value={this.state.movie.imageURL}
                                placeholder=""
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                        <FormGroup
                            controlId="name"
                        //validationState={this.getValidationState()}
                        >
                            <ControlLabel>Movie Name</ControlLabel>
                            <FormControl
                                bsSize="sm"
                                type="text"
                                value={this.state.movie.name}
                                placeholder=""
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                        <FormGroup
                            controlId="description"
                        //validationState={this.getValidationState()}
                        >
                            <ControlLabel>Description</ControlLabel>
                            <FormControl
                                bsSize="sm"
                                type="text"
                                value={this.state.movie.description}
                                placeholder=""
                                onChange={this.handleChange}
                            />
                            <FormControl.Feedback />
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                        <FormGroup
                            controlId="rating"
                        //validationState={this.getValidationState()}
                        >
                            <ControlLabel>Rating</ControlLabel>
                            <FormControl
                                bsSize="sm"
                                type="text"
                                value={this.state.movie.rating}
                                placeholder=""
                                onChange={this.handleChange} 
                            />
                            <FormControl.Feedback />
                            <HelpBlock></HelpBlock>
                        </FormGroup>
                        <Button type="submit" bsStyle="primary">Submit</Button>
                    </form>
            </div>
        );
    }
}