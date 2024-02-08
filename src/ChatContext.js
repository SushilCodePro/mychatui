// ChatContext.js
import { createContext, useContext } from 'react';

const ChatContext = createContext();

export const useChatContext = () => {
  return useContext(ChatContext);
};

export default ChatContext;
