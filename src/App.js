import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from 'components/HomePage';
import CreateProfile from 'components/CreateProfile';
import PreviewProfile from './components/PreviewProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Header />} /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateProfile />} />
        <Route path="/preview" element={<PreviewProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
