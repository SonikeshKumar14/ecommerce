import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';

const App = () => {
  return( 
      <>
      <Header />
      <Routes> 
       <Route exact path="/" element={ <Home/>} />
       <Route path="/login" element={ <Login/>} /> 
       <Route path="/register" element={<Register/>} />
     </Routes> 
  
     </>
  );
}

export default App;


