// ConversationList.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useChatContext } from './ChatContext';
// import conversationsData from './ConversationData';

function ConversationList() {
  const { conversations } = useChatContext();

  return (
    <>
      <ol>
        {conversations.map((conversation) => (
          <li key={conversation.id}>
            <Link
              to={`/chat/${conversation.name}`}
              className='conversation-link'
            >
              <div className='pic'>
                <img src={conversation.image} alt='pic'/>
              </div>
              <div className='name-chat'>
                <div style={{fontSize:15,fontWeight:600}}>{conversation.name}</div>
                <div style={{fontSize:12}}>Chat..</div>
              </div> 
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

export default ConversationList;
