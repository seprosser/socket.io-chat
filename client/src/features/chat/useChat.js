import { useEffect, useRef, useState } from 'react';
import socketIOClient from 'socket.io-client';

const useChat = () => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient('ws://localhost:5000');

    // Listen for incoming messages
    socketRef.current.on('message', (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Destroys the socket reference when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  // Sends a message to the server that forwards it to all users
  const sendMessage = (message) => {
    socketRef.current.emit('message', {
      body: message,
      senderId: socketRef.current.id,
    });
  };

  return { messages, sendMessage };
};

export default useChat;
