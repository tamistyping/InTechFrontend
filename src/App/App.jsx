import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import JobListPage from '../Pages/JobListPage/JobListPage';
import ProfilePage from '../Pages/ProfilePage/ProfilePage';

function Home() {
}

function App() {
  return (
    <div className="App" >
      <NavBar />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/" element={<JobListPage />} />
      </Routes>
    </div>
  );
}

export default App;