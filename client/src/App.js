import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './Home';
import UserPage from './UserPage';
import Discussions from './Discussions';
import Discussion from './Discussion';

function App() {

  const [user, setUser] = useState(false);
  // this is set to default of user not being logged in
  // this might be changed to javascript object

  // this use effect is to make sure that the user stays logged in
  useEffect(() => {
    fetch("/currentuser")
      .then((r) => {if (r.ok){r.json()
      .then((user) => setUser(user))}
      });
  }, []);



  const [selectedDiscussion, setSelectedDiscussion]=useState(false);

  return (
    <Routes>
      <Route index element={<Home setUser={setUser} />} />
      <Route path="userpage" element={<UserPage user={user} setUser={setUser}/>} />
      <Route path="board" element={<Discussions setSelectedDiscussion={setSelectedDiscussion}/>} />
      <Route path="board/:id" element={<Discussion/>}/>
    </Routes>
  );
}

export default App;
