
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Home from './pages/Home/Home';
import MyPlayer from './pages/MyPlayer/MyPlayer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/my-player' element={<MyPlayer></MyPlayer>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
