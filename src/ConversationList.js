// ConversationList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useChatContext } from './ChatContext';
// import conversationsData from './ConversationData';

function ConversationList({searchValue, chatList}) {
  const { conversations} = useChatContext();
  // console.log("searchValue", searchValue);
  // Filter conversations based on the chatList
  const filteredConversations = conversations.filter((conversation) =>
    chatList.some((chatItem) => chatItem.id === conversation.id)
  );
  // Further filter based on the searchValue
  const filterConversations=filteredConversations.filter((conversation)=>(
    conversation.name.toLowerCase().includes(searchValue.toLowerCase())
  ));
  // console.log("cfilterConversations", filterConversations);
  return (
    <>
      <ol>
        {filterConversations.map((conversation) => (
          <li key={conversation.id}>
            <Link
              to={`/chat/${conversation.name}`}
              className='conversation-link'
            >
              <div className='pic'>
                <img src={conversation.image} alt='pic'/>
              </div>
              <div className='name-chat'>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{conversation.name}</div>

                <div
                  style={{ fontSize: 12 }}
                >
                  {conversation.chat.length > 0 ? conversation.chat[conversation.chat.length - 1] : ''}
                </div>
              </div> 
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ConversationList;
