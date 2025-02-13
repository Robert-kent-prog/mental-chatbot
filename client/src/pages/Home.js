// client/src/pages/Home.js
import React from 'react';
import NavbarComponent from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';
import { Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <NavbarComponent />
            <Row>
                <Col md={4}>
                    <Sidebar />
                </Col>
                <Col md={8}>
                    <ChatWindow />
                </Col>
            </Row>
        </div>
    );
}

export default Home;