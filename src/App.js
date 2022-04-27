import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin'
import SearchPage from './pages/search'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
        <Route path="/search" element={<SearchPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;