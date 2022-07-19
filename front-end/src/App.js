import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home';
import EmployDetails from './components/EmployDetails';
import AddEmploy from './components/AddEmploy';
import AddWork from './components/AddWork';
import WorkDetails from './components/WorkDetails';
import DailyWork from './components/DailyWork';
import ForgotPassword from './components/ForgotPassword';
import CommonModal from './components/CommonModal';



const App = () => {
  const accessToken = localStorage.getItem('accessToken');
  // if(!accessToken) {
  //   window.location.href = '/login'
  // }
  let authRoutes = useRoutes([
    { path: "/",element:<Home/>},
    
  
    { path: "/forgotpassword",element:<ForgotPassword/>},
  
 
  ]);

  let unAuthRoutes =  useRoutes([
    { path: "/login",element:<Login/>},
    { path: "/forgotpassword",element:<ForgotPassword/>},
    { path: "/register",element:<Register/>},
    { path: "/employdetails", element: <EmployDetails/>},
     { path: "/employdetails", element: <EmployDetails/>},
     { path: "/workdetails",element:<WorkDetails/>},
     { path: "/workdata",element:<DailyWork/>},
     { path: "/addwork",element:<AddWork/>},
     { path: "/addemploy",element:<AddEmploy/>},
     { path: "/commonmodal",element:<CommonModal/>},
  ])

  return (!accessToken ? ( unAuthRoutes ) : authRoutes)
};

export default App;
