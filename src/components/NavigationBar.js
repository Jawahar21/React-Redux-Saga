import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
export default function NavigationBar(){
    return (
        <Navbar inverse fluid >
            <LinkContainer to='/'>
                <Navbar.Header>
                    <Navbar.Brand>
                        Movie Reviews
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
            </LinkContainer>
            <Navbar.Collapse>
                <Nav pullLeft >
                    <LinkContainer to='/addMovieReview'>
                        <NavItem>
                            Add Movie Review
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to='/showMovieReviews'>
                        <NavItem>
                            Show Movie Reviews
                        </NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}