// Chat.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Chat() {
  const { name } = useParams();

  return (
    <div>
      <h2>Chat with {name}</h2>
      {/* Add your chat content here */}
      <p>Hi All</p>
    </div>
  );
}

export default Chat;
