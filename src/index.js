import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles imports
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// components imports
import Login from "./components/PageLogin";
import Signup from "./components/PageSignup";
import UserHome from "./components/PageHome";
import Navigation from "./components/Navigation";
import About from "./components/PageAbout";
import App from './App';
import AddDataSample from './components/AddDataSample';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Add routes after line 30
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<App/>}/>
            <Route exact path='/home' element={<PageHome/>}/>
            <Route path='/login' element={<PageLogin/>}/>
            <Route path='/signup' element={<PageSignup/>}/>
            <Route path='/about' element={<PageAbout/>}/>
            <Route path='/adddatasample' element={<AddDataSample/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

