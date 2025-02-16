import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Home } from './pages/Homepage/Home';
import Chat from './pages/Chatbot/Chat';
import Livechat from './pages/Livechat/Livechat';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/api/conversation' Component={Chat} />
        <Route path='/api/livechat' Component={Livechat} />
      </Routes>
    </>
  )
}

export default App
