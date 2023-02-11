import React, { Component }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Login from './pages/login';
import Search from './pages/search';

function App() {
    return (
        <> 
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/search' element={<Search/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        </Router>
        </>
    );
};

export default App;

