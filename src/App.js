import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import SignUp from './pages/SignUp/signUp';
import SignIn from './pages/SignIn/signIn';

const App = () => {
  return (
    <div className='container'>
      <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path='/blog/:id' element={<Blog/>} />
      </Routes>
      </Router>
    </div>
  );
};

export default App;
