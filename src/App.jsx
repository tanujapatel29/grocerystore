import { useState } from 'react'
import Header from './component/header/header';
import Home from './pages/Home/index';
import About from './pages/About/about';
import Footer from './component/footer/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact={true} path="/" element={<Home/>}/>
      <Route exact={true} path="/about" element={<About/>}/>
    </Routes>
    
    </BrowserRouter> 
   
  )
}

export default App
