import React from "react";
import {LinkContainer} from "react-router-bootstrap";

import {Button, Form, FormControl, Nav, Navbar} from 'react-bootstrap';


export const HeaderNav = () =>
    <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <LinkContainer to="/posts">
                    <Nav.Link href="/posts">Posts</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contacts">
                <Nav.Link>Contacts</Nav.Link>
                </LinkContainer>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                <LinkContainer to="/auth">
                <Nav.Link href="/auth">Sign in</Nav.Link>
                </LinkContainer>
            </Form>
        </Navbar.Collapse>
    </Navbar>