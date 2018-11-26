import React  from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

export default function MovieCard(props){
    return(
        <div style = {{ border : 'solid', borderWidth: '1px' , borderColor :'black',height: 270,width : 170,margin : 5 }} >
            <Card>
                <CardImg top width="100%" src={props.url} alt="Card image cap" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>{props.description}</CardText>
                    <div style={{ fontSize: 30}}>
                        <StarRatingComponent
                            name="rating"
                            starCount={5}
                            value={props.rating}
                            editing={false}
                            starColor="#f2b01e"
                            emptyStarColor="#000000"
                        />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
}