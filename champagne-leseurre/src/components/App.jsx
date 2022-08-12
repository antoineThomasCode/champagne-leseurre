import React from 'react'
import {Routes, Route } from "react-router-dom";
import Header from "../components/genericComponents/Header.jsx"
import '../sass/App.scss'
import Home from '../Pages/Home.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App
