import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop_page/shop_page.component';
import Header from './component/header/header.component';

function App() {
  return (
    
    <div>
     
    <Router>
    <Header/>
    <Routes>
      <Route path='/'
      element={<HomePage /> } 
      />
      <Route path='/shop' 
     element={<ShopPage/>} />
    </Routes>
  </Router>
    </div>
   
     
    
  );
}

export default App;