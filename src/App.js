// src/App.js

import React from 'react';
import './App.css'
import { Navbar } from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';


function App() {
  return (
    <div className='Apps'> <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/About' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/signup' element={<Signup/>} />
      
      
    </Routes>
    </div>
    
  );
}

export default App;

