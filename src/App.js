// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ConversationList from './ConversationList';
import Chat from './Chat';

function App() {
  return (
    <Router>
      <div className="container">
        <div className='left-side'>
          <div className='left-search'>
            <input
              type='text'
              value={""}
              placeholder="&#128269; Search for conversation"
              onChange={""}
            />
          </div>
          <div className='conversation-list-ion'>
            <h6>CONVERSATIONS</h6>
            <div>
              <img
                style={{ height: 20, width: 20, alignItems: 'center' }}
                src='https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg'
                alt="Conversation + Icon"
              />
            </div>
          </div>
          <div className='left-conversation-list'>
            <ConversationList />
          </div>
        </div>
        <div className='right-side'>
          <Routes>
            <Route path="/chat/:name" element={<Chat />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
