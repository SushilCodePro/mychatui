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
        <div className='attach-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/8138/8138518.png' alt='attach-icon' />
        </div>
        <input
          type='text'
          placeholder='Type your message here'
          value={''}
          onChange={''}
        />
        <div className='attach-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/742/742751.png' alt='attach-icon' />
        </div>
        <div className='attach-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/9484/9484251.png' alt='attach-icon' />
        </div>
        <div className='drop-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/3426/3426514.png' alt='drop icon' />
        </div>
        <div className='send-icon'>
          <img src='https://cdn-icons-png.flaticon.com/128/3682/3682321.png' alt='send icon' />
        </div>
      </div>

    </div>
  );
}

export default Chat;
