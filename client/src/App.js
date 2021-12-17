import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
// import './App.css';

function App(props) {
  return (
    <div>
      <UseProvider>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </UseProvider>
    </div>
  );
}

export default App;
