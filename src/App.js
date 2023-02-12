import React, { useState }  from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Login from './pages/login';
import Search from './pages/search';
import Register from './pages/register';

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
                <Route path='/login' element={currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>} /> 
                {/* <Route path='/register' element={<Register/>} />  */}
            </Routes>
        </Router>

        {/* <div className="App">
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
            }
        </div>  */}
        </>
    );
};

export default App;

