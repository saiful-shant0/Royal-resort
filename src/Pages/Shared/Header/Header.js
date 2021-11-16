import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    return (

        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">


                <Container>
                    <Navbar.Brand to="/home"> <img logo
                        alt=""
                        src={logo}

                        className="d-inline-block logo align-top"
                    />{' '}</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/mybooking">My Bookings</Nav.Link>
                            <Nav.Link as={Link} to="/managebooking">Manage Services</Nav.Link>
                            <Nav.Link as={Link} to="/addservice">Add Services</Nav.Link>
                        </Nav>

                        {/*   <Nav.Link as={Link} to="/login">Log In</Nav.Link> */}


                        <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>

                        {user?.email ? <Button onClick={logOut} variant="light">Log Out</Button>
                            : <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;