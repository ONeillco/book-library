import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import { UserProvider } from './context/user';

function App() {
  return (
    
      <Router>
      <div>
<UserProvider>
  <Nav />
  <Routes>
  <Route exact path="/" element={<Home />} />
  </Routes>
</UserProvider>
    </div>
    </Router>
     
    
  );
}

export default App;
