import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Home } from './pages/Homepage/Home';
import Chat from './pages/Chatbot/Chat';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/conversation' Component={Chat} />
      </Routes>
    </>
  )
}

export default App
