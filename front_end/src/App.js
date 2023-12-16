// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './Components/Login_Signup/Login'
import Signup from './Components/Login_Signup/Signup';
import Employee from './Components/Employee/Employee';
import Manager from './Components/Manager/Manager';
import Home from './Components/Home/Home';
import Gathering from './Components/Manager/Gathering';
import Trading from './Components/Manager/Trading';
import RootLayout from './Layout/RootLayout';
import EmployeeGP from './Components/Employee-GP/Employee-GP';

const App = () => {
  const userID = 1;
  const post_officeID = 1;
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/employee' element={<Employee userID={userID} postOfficeID={post_officeID} />} />
          <Route path='/employee-GP' element={<EmployeeGP />} />
          <Route path='/manager' element={<Manager />} />
          <Route path='/manager/gathering' element={<Gathering />} />
          <Route path='/manager/trading' element={<Trading />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
