import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Components/HomePage.js";

import './App.css';

function App() {

  const [inventionsFetched, setInventionsFetched] = usestate([])

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage inventionsFetched={inventionsFetched} setInventionsFetched={setInventionsFetched}/>} />
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
