import './App.css';

import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import Search from './components/navbar/Search';
import {useState} from 'react'
import {dataProd} from './components/Data'
import { BrowserRouter } from "react-router-dom"



function App() {
  const [data, setData] = useState(dataProd);
  return (
    <div className="App">
    <BrowserRouter>
    <Sidebar/>
    <Search/>
    </BrowserRouter>
    </div>
  );
}

export default App;
