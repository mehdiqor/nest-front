import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './components/nav';
import { Home } from './components/home';
import { Signup } from './components/signup';
import { Signin } from './components/signin/signin';
import { Forgot } from './components/forgot';
import { Reset } from './components/reset';

function App() {
  return <BrowserRouter>
      <Nav/>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='auth/signup' element={<Signup/>}/>
          <Route path='auth/signin' element={<Signin/>}/>
          <Route path='auth/forgot' element={<Forgot/>}/>
          <Route path='auth/reset/:token' element={<Reset/>}/>
      </Routes>
  </BrowserRouter>;
}

export default App;
