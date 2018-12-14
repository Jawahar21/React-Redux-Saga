import { Grid,Row,Col } from 'react-bootstrap';
import React , {Component} from 'react';
import NavigationBar from './NavigationBar';
export default class Layout extends Component{
    render(){
        return(
            <Grid fluid>
                <Row>
                    <Col>
                        <NavigationBar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.children}
                    </Col>
                </Row>
            </Grid>
        );
    }
}
