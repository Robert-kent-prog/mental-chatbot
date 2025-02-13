// client/src/components/Sidebar.js
import React, { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';

function Sidebar() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/chat/history')
            .then(response => setHistory(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <ListGroup>
            {history.map((item, index) => (
                <ListGroup.Item key={index}>
                    <strong>You:</strong> {item.userMessage}<br />
                    <strong>Bot:</strong> {item.botResponse}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default Sidebar;