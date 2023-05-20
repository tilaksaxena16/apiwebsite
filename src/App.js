import React from 'react';
import "./App.css";
import { Routes, Route } from 'react-router-dom';
import { Tempapp } from './Components/Tempapp';


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Tempapp />} />
    </Routes>
    
    
    </>
  );
};

export default App;