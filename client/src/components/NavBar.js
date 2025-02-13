// client/src/components/Navbar.js
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function NavbarComponent() {
    return (
        <Navbar bg="primary" variant="dark" className="mb-3">
            <Navbar.Brand href="/">Mental Health Chatbot</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#chat">Chat</Nav.Link>
                <Nav.Link href="#history">History</Nav.Link>
            </Nav>
        </Navbar>
    );
}

export default NavbarComponent;