import React from 'react';
import './App.css';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';
import Introduction from './Introduction/Introduction';
import Projects from './Projects/Projects';
import Feedback from './Feedback/Feedback';
import Blogs from './Blogs/Blogs';

function App() {
  return (
    <Router>
      <div className='wrapper allin'>
        <Navbar />


        <Routes>
          <Route exact path='/' element={<Introduction />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/feedback' element={<Feedback />} />
          <Route exact path='/blogs' element={<Blogs />} />
        </Routes>


        <Footer classname="footer" />
      </div>
    </Router>
  );
}

export default App;
