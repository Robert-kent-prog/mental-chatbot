// client/src/components/ChatWindow.js
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function ChatWindow() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const newMessage = { text: input, sender: 'user' };
        setMessages(prev => [...prev, newMessage]);

        try {
            const response = await axios.post('http://localhost:5000/api/chat/message', { message: input });
            const botMessage = { text: response.data.response, sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error(error);
        }

        setInput('');
    };

    return (
        <Card>
            <Card.Body>
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`d-flex ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                            <div
                                style={{
                                    backgroundColor: msg.sender === 'user' ? '#dcf8c6' : '#fff',
                                    padding: '10px',
                                    borderRadius: '10px',
                                    maxWidth: '70%',
                                    wordBreak: 'break-word',
                                }}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
                <Form onSubmit={e => e.preventDefault()}>
                    <Form.Control
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message..."
                        onKeyPress={e => e.key === 'Enter' && sendMessage()}
                    />
                    <Button variant="primary" onClick={sendMessage} className="mt-2">
                        Send
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default ChatWindow;