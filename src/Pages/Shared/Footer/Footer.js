import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">


                    <Container>
                        <Navbar.Brand to="/home"> </Navbar.Brand>

                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">





                            {/*      <Navbar.Text>
                            <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>

                        {user?.email ? <Button onClick={logOut} variant="light">Log Out</Button>
                            : <Nav.Link as={Link} to="/login">Log In</Nav.Link>} */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Footer;