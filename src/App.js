import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin'
import SearchPage from './pages/search'
import CalculatorPage from './pages/calculator'
import BlogPage1 from './pages/ฺฺBlogpages/blog1';
import BlogPage2 from './pages/ฺฺBlogpages/blog2';
import BlogPage3 from './pages/ฺฺBlogpages/blog3';
import BlogPage4 from './pages/ฺฺBlogpages/blog4';
import BlogPage5 from './pages/ฺฺBlogpages/blog5';
import BlogPage6 from './pages/ฺฺBlogpages/blog6';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
        <Route path="/search" element={<SearchPage/>} exact />
        <Route path="/calculator" element={<CalculatorPage/>} exact />
        <Route path="/blog1"  element={<BlogPage1/>} exact />
        <Route path="/blog2"  element={<BlogPage2/>} exact />
        <Route path="/blog3"  element={<BlogPage3/>} exact />
        <Route path="/blog4"  element={<BlogPage4/>} exact />
        <Route path="/blog5"  element={<BlogPage5/>} exact />
        <Route path="/blog6"  element={<BlogPage6/>} exact />
      </Routes>
    </Router>
  );
}

export default App;