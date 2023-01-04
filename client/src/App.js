import './App.css';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import UserPage from './UserPage';

function App() {

  const [user, setUser] = useState(false);
  // this might be changes to javascript object


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userpage" element={<UserPage user={user}/>} />
    </Routes>
  );
}

export default App;
