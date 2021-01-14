import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ChatContainer from '../features/chat/ChatContainer';

const App = () => (
  <Provider store={store}>
    <ChatContainer />
  </Provider>
);

export default App;
