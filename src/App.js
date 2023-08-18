import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Navbar title={'TextUtils'}/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" />} />
          < Route path="/about" element={<About />} />
        </Routes>
      </div>
      </Router>
      </>
  );
}

export default App;
