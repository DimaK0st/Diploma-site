import React from 'react';
import './header.scss'
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(props) {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item><Link to={'/'}>Головна</Link></Nav.Item>
                        <NavDropdown title="Навігація" id="basic-nav-dropdown">
                            <NavDropdown.ItemText><Link to={'/schedule/my'}>Розклад</Link></NavDropdown.ItemText>
                            <NavDropdown.ItemText><Link to={'/course'}>Всі курси</Link></NavDropdown.ItemText>
                            <NavDropdown.ItemText><Link to={'/course/my'}>Мої курси</Link></NavDropdown.ItemText>
                            <NavDropdown.ItemText><Link to={'/headman'}>Керування</Link></NavDropdown.ItemText>
                            {/*<NavDropdown.Divider />*/}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
