import React, { useState }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Login from './pages/login';
import Search from './pages/search';
import Register from './pages/register/register';
import BusinessPost from './pages/businessPost/businessPost';

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
     
    return (
        <> 
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/search' element={<Search/>} />
                <Route path='/post' element={<BusinessPost/>} />
                <Route path='/login' element={currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>} /> 
            </Routes>
        </Router>
        </>
    );
};

export default App;
