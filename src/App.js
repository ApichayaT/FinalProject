import React,{ Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin'
import SearchPage from './pages/search'
import CalculatorPage from './pages/calculator'
import DailyPage from './pages/daily'
import BlogPage from './pages/BlogPage'
import BlogPage1 from './pages/ฺฺBlogpages/blog1';
import BlogPage2 from './pages/ฺฺBlogpages/blog2';
import BlogPage3 from './pages/ฺฺBlogpages/blog3';
import BlogPage4 from './pages/ฺฺBlogpages/blog4';
import BlogPage5 from './pages/ฺฺBlogpages/blog5';
import BlogPage6 from './pages/ฺฺBlogpages/blog6';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SigninPage/>} exact />
        <Route path="/search" element={<SearchPage/>} exact />
        <Route path="/calculator" element={<CalculatorPage/>} exact /> 
        <Route path="/daily" element={<DailyPage/>} exact /> 
        <Route path="/blog/" element={<BlogPage/>}exact/> 
        <Route path="/blog/Work-From-Home/"  element={<BlogPage1/>}  exact />
        <Route path="/blog/Ketogenic-Diet/"  element={<BlogPage2/>} exact />
        <Route path="/blog/Diet-Techniques/"  element={<BlogPage3/>} exact />
        <Route path="/blog/Vitamins/"  element={<BlogPage4/>} exact />
        <Route path="/blog/Nutrition/"  element={<BlogPage5/>} exact />
        <Route path="/blog/Fat-or-not/"  element={<BlogPage6/>} exact />
      </Routes>
      <Fragment>
        <ScrollButton />
      </Fragment>
    </Router>
      
  );
}

export default App;