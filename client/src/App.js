import React, { useState, useEffect } from 'react';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import { getMockResponse } from './components/dataset';

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
      message: "Hello, I'm Mental ChatBot Designed by Robert Muendo to provide answers to mental questions. Ask me anything about mental health or wellness! ",
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
    await processMessageToMockBot(newMessages);
  };

  const processMessageToMockBot = async (chatMessages) => {
    try {
      // Simulate a delay for typing
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Get the latest user message
      const userMessage = chatMessages[chatMessages.length - 1].message.toLowerCase();

      // Generate a mock response based on keywords
      let botResponse = getMockResponse(userMessage);

      setMessages([
        ...chatMessages,
        { message: botResponse, sender: "ChatGPT" },
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
              typingIndicator={isTyping && <TypingIndicator content="ChatBot is typing" />}
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