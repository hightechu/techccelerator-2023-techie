import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles imports
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

// components imports
import PageLogin from "./components/PageLogin";
import PageSignup from "./components/PageSignup";
import PageHome from "./components/PageHome";
import PageAbout from "./components/PageAbout";
import PageAccount from "./components/PageAccount";
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
            <Route path='/settings' element={<PageAccount/>}/>
            <Route path='/account' element={<PageAccount/>}/>
            <Route path='/adddatasample' element={<AddDataSample/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

