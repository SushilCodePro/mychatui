// ConversationList.js
// import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import conversationsData from './ConversationData';
function ConversationList() {
  // useEffect(

  // ,[]);
  return (
    <>
      {/* <div className='left-conversation-list'> */}
      <ol>
        {conversationsData.map((conversation) =>
          <li>
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
        )}
      </ol>
      {/* </div> */}
    </>
    
  );
}

export default ConversationList;
