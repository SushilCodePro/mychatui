
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ConversationList from './ConversationList';
import Chat from './Chat';
import { useState, useContext } from 'react';
import PopUpList from './PopUpList';
import ChatContext from './ChatContext';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [showAdditionalList, setShowAdditionalList] = useState(false);
  const { conversations } = useContext(ChatContext);
  const [chatList,setChatList]=useState([]);

  const handlePlusIcon = () => {
    setShowAdditionalList(!showAdditionalList);
  };
  // console.log("App - conversations", conversations);

  function addToConversationList(Id) {
    console.log("App -Inside + conversations", conversations);
    setChatList((prevChatList) => {
      // Check if an item with the same Id is already in the list
      const exists = prevChatList.some((item) => item.id === Id);
      // If not, add the item to the list
      return exists ? prevChatList
        : prevChatList.concat(
          conversations.find((conversation) => conversation.id === Id)
          );
    });
    console.log("App-chatList", chatList);
  }

  return (
    <Router>
      {/* <ChatProvider> */}
        <div className="container">
          <div className='left-side'>
            <div className='left-search'>
              <input
                type='text'
                value={searchValue}
                placeholder="&#128269; Search for conversation"
                onChange={(e) => setSearchValue(e.target.value)}
              />
            </div>
            <div className='conversation-list-ion'>
              <h6>CONVERSATIONS</h6>
              <div>
                <img
                  style={{ height: 20, width: 20, alignItems: 'center', cursor: 'pointer' }}
                  src='https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg'
                  alt="Conversation + Icon"
                  onClick={handlePlusIcon}
                />
              </div>
            </div>
            {showAdditionalList && (
              <div className='left-conversation-list'>
                <PopUpList addToConversationList={addToConversationList} />
              </div>
            )}
            <div className='left-conversation-list'>
              <ConversationList searchValue={searchValue} chatList={chatList} />
            </div>
           
          </div>
          <div className='right-side'>
            <Routes>
              <Route path="/chat/:name" element={<Chat />} />
            </Routes>
          </div>
        </div>
      {/* </ChatProvider> */}
    </Router>
  );
}

export default App;
