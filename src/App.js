
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProivder from './context/AuthProivder';
import AllSongs from './pages/AllSongs/AllSongs';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyPlayer from './pages/MyPlayer/MyPlayer';
import MyPlaylist from './pages/MyPlaylist/MyPlaylist';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import SignUp from './pages/SignUp/SignUp';


function App() {

  return (
    <div className="App">
      <AuthProivder>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/home' element={<Home></Home>} />
            <Route path='/my-player' element={<PrivateRoute><MyPlayer /></PrivateRoute>} />
            <Route path='/my-playlist' element={<PrivateRoute><MyPlaylist /></PrivateRoute>} />
            <Route path='/all-songs' element={<AllSongs></AllSongs>} />
            <Route path='/login' element={<Login></Login>} />
            <Route path='/sign-up' element={<SignUp></SignUp>} />
          </Routes>
        </BrowserRouter>
      </AuthProivder>
    </div>
  );
}

export default App;
