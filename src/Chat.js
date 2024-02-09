// Chat.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useChatContext, } from './ChatContext';
import conversationsData from './ConversationData';

function Chat() {
  const { name } = useParams();
  const { updateChat } = useChatContext();
  const [inputChat, setInputChat] = useState('');
  const { conversations } = useChatContext();

  const handleInputChange = (e) => {
    setInputChat(e.target.value);
  };

  const handleSendMessage = () => {
    const conversationId = conversationsData.findIndex(
      (conversation) => conversation.name === name
    );

    updateChat(conversationId + 1, inputChat);
    setInputChat('');
  };
  // console.log("chat-conversations", conversations);
  return (
    <div className=''>
      <div className='chat-header'>{name}</div>
      {conversations.map((person) => {
        if (person.name === name) {
          return person.chat.map((message, index) => (
            <div key={index}>
              <p>{message}</p>
            </div>
          ))
        }
        // return;
      })}
      {/* {conversations.map((person) => (
        person.name === name && (
          person.chat.map((message, index) => (
            <div key={index}>
              <p>{message}</p>
            </div>
          ))
        )
      ))} */}
      <div className='send-input'>
        <div className='attach-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/8138/8138518.png' alt='attach-icon' />
        </div>
        <input
          type='text'
          placeholder='Type your message here'
          value={inputChat}
          onChange={handleInputChange} // Add the onChange handler
        />
        <div className='attach-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/742/742751.png' alt='smile-icon' />
        </div>
        <div className='attach-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/9484/9484251.png' alt='heart-icon' />
        </div>
        <div className='drop-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/3426/3426514.png' alt='drop icon' />
        </div>
        <div className='send-icon' onClick={handleSendMessage}>
          <img src='https://cdn-icons-png.flaticon.com/128/3682/3682321.png' alt='send icon' />
        </div>
      </div>
    </div>
  );
}

export default Chat;
