import React, { useState, useEffect } from 'react';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_URL = "http://localhost:5000/api/chat"; // Proxy server
const systemMessage = {
  role: "system",
  content: "Explain things like you're talking to a software professional with 2 years of experience.",
};

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">Mental Health ChatBot</div>
      <div className="sidebar-content">
        <div className="sidebar-item">Home</div>
        <div className="sidebar-item">New Chat</div>
        <div className="sidebar-item">History</div>
      </div>
      <div className="sidebar-footer">© 2023 Mental Health ChatBot</div>
    </div>
  );
}

function App() {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Mental ChatBot! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const messageList = document.querySelector('.message-list');
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user",
    };
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  const processMessageToChatGPT = async (chatMessages) => {
    try {
      const apiMessages = chatMessages.map((msg) => ({
        role: msg.sender === "ChatGPT" ? "assistant" : "user",
        content: msg.message,
      }));

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [systemMessage, ...apiMessages] }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data from OpenAI API");
      }

      const data = await response.json();
      setMessages([
        ...chatMessages,
        { message: data.choices[0].message.content, sender: "ChatGPT" },
      ]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...chatMessages,
        { message: "An error occurred while processing your request.", sender: "ChatGPT" },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        <Sidebar />
        <MainContainer>
          <ChatContainer>
            <MessageList
              scrollBehavior="smooth"
              typingIndicator={isTyping && <TypingIndicator content="ChatGPT is typing" />}
            >
              {messages.map((message, i) => (
                <Message
                  key={i}
                  model={{
                    message: message.message,
                    direction: message.sender === "user" ? "outgoing" : "incoming",
                    id: i.toString(),
                  }}
                />
              ))}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
  );
}

export default App;