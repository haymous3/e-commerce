import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';




const Hatspage = () => (
  <div>
    <h1>Hat Page</h1>
  </div>

)

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/'
        element={<HomePage /> } 
        />
        <Route  path='/hats'
       element={<Hatspage/>} />
      </Routes>
    </Router>
     
    
  );
}

export default App;