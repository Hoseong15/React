import './App.css';
import Products from './Products';
import Product from './Product';
import Detail1 from './Detail1'
import Details from './Details';
import { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Products />}/>
          <Route path="/Products/:id" element={<Details />} />
        </Routes>
      </Router>

    <Details></Details>
    </div>
  );
} 

export default App;