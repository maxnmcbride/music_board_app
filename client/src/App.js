import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import UserPage from './UserPage';
import Discussions from './Discussions';

function App() {

  const [user, setUser] = useState(false);
  // this might be changed to javascript object
  


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userpage" element={<UserPage user={user}/>} />
      <Route path="/discussions" element={<Discussions/>} />
    </Routes>
  );
}

export default App;
