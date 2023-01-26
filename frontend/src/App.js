import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Components/HomePage.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {

  const [inventionsFetched, setInventionsFetched] = useState([]);

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <HomePage 
            inventionsFetched={inventionsFetched}
            setInventionsFetched={setInventionsFetched}
            />
           }/>
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
