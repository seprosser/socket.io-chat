import ChatBox from './ChatBox';
import ChatDisplay from './ChatDisplay';
import useChat from './useChat';
import styles from './Chat.module.scss';

const ChatContainer = () => {
  const { messages, sendMessage } = useChat();

  return (
    <div className={styles.chatContainer}>
      <ChatDisplay messages={messages} />
      <ChatBox sendMessage={sendMessage} />
    </div>
  );
};

export default ChatContainer;
