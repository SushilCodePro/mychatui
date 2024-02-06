// Chat.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Chat() {
  const { name } = useParams();

  return (
    <div className=''>
      <div className='chat-header'>{name}</div>
      <p>Hi All</p>
      <div className='send-input'>
        <input
          type='text'
          value={''}
          onChange={''}
        />
        <div className='send-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/3682/3682321.png' alt='send icon' />
        </div>
      </div>

    </div>
  );
}

export default Chat;
