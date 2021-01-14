import styles from './Chat.module.scss';

const ChatDisplay = ({ messages }) => {
  return (
    <div className={styles.chatDisplay}>
      {messages.map((message, i) => (
        <div
          key={i}
          className={
            message.ownedByCurrentUser
              ? styles.sentMessage
              : styles.receivedMessage
          }
        >
          {message.body}
        </div>
      ))}
    </div>
  );
};

export default ChatDisplay;
