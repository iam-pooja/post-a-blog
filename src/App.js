import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import Login from './components/Login';
import './App.css';
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

function App() {

  const[isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth)
    .then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = '/login'
    })
  }

  return (
    <BrowserRouter>
    <nav>
      <Link className='link' to='/'>Home</Link>
      {!isAuth ?
       <Link className='link' to='/login'>Login</Link> : 
       <>
       <Link className='link' to='/createpost'>Create post</Link>
       <button className='logout-btn' onClick={signUserOut}>Log out</button> 
       </>
       }   
    </nav>
    <Routes>
      <Route path='/' element={<Home isAuth={isAuth}/>} />
      <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
      <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;