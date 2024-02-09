// ChatProvider.js
import React, { useState} from 'react';
import ChatContext from './ChatContext';
import conversationsData from './ConversationData';

export const ChatProvider = ({ children }) => {
  const [conversations, setConversations] = useState(conversationsData);
  // const[searchValue, setSearchValue]=useState('');
  const updateChat = (conversationId, newChat) => {
    console.log("conversationId",conversationId);
    console.log("newChat",newChat);
    setConversations((prevConversations) =>
      prevConversations.map((conversation) =>
        conversation.id === conversationId
          ? { ...conversation, chat: [...conversation.chat, newChat] }
          : conversation
      )
    );
  };
//   useEffect(() => {
    // console.log("conversations", conversations);
//   }, [conversations]);
  return (
    <ChatContext.Provider value={{ conversations, updateChat }}>
      {children}
    </ChatContext.Provider>
  );
};
