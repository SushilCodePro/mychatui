import React from 'react';
import { useChatContext } from './ChatContext';


function PopUpList({ addToConversationList}) {
    const { conversations } = useChatContext();
    return (
        <>
            <ol>
                {conversations.map((conversation) => (
                    <li onClick={() => addToConversationList(conversation.id)} key={conversation.id}>
                        <div className='conversation-link' style={{backgroundColor:'lightgrey'}}>              
                            <div className='pic'>
                                <img src={conversation.image} alt='pic' />
                            </div>
                            <div className='name-chat'>
                                <div style={{ fontSize: 15, fontWeight: 600 }}>{conversation.name}</div>
                            </div>
                        </div>

                    </li>
                ))}
            </ol>
        </>
    );
}

export default PopUpList;
