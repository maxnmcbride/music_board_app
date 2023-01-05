import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import UserPage from './UserPage';
import Discussions from './Discussions';

function App() {

  const [user, setUser] = useState(false);
  // this is set to default of user not being logged in
  // this might be changed to javascript object

  // this use effect is to make sure that the user stays logged in
  useEffect(() => {
    fetch("/currentuser")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user))
        }
      });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home setUser={setUser} />} />
      <Route path="/userpage" element={<UserPage user={user} />} />
      <Route path="/discussions" element={<Discussions />} />
    </Routes>
  );
}

export default App;
