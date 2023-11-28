// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Login from './Components/Login_Signup/Login'
import Signup from './Components/Login_Signup/Signup';
import Employee from './Components/Employee/Employee';
import Manager from './Components/Manager/Manager';
import Home from './Components/Home/Home';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/employee' element={<Employee/>}/>
      <Route path='/manager' element={<Manager/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
