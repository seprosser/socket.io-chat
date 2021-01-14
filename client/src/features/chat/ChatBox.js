import React, { useState } from 'react';
import { Button, Icon, TextField } from '@material-ui/core';
import styles from './Chat.module.scss';

const ChatBox = ({ sendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendClick = () => {
    if (message) {
      setMessage('');
      sendMessage(message);
    }
  };

  return (
    <div className={styles.chatBox}>
      <TextField
        fullWidth
        className={styles.chatInput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        variant="outlined"
        placeholder="Type your message"
      />
      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={handleSendClick}
      >
        Send
      </Button>
    </div>
  );
};

export default ChatBox;
