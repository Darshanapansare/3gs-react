
import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import  '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
import Navbar from './components/Navbar';
import {  BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";


function App() {




  
  return (

    <>
    
<Navbar/>

<Routes>
    <Route exact path="/" element={<Home/>} />

      <Route  path="/about" element={<About/>} />
      <Route  path="/service" element={<Service/>} />
      <Route  path="/contact" element={<Contact/>} />
</Routes>



  


   
    
    </>
    
    )
      
}

export default App;
