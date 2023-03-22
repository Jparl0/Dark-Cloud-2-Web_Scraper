import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from "./Components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

type Invention = object

interface ParentCompProps {
  childComp?: React.ReactNode;
}

function App() {

  const [inventionsFetched, setInventionsFetched] = React.useState<Invention>(
    {inventionsFetched: {}}
  );

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <HomePage inventionsFetched={inventionsFetched} setInventionsFetched={setInventionsFetched}/>
          }/>
        </Routes>  
    </BrowserRouter>
  );
}

export default App;
