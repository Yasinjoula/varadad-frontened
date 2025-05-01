import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import LawsList from './components/LawsList';
import LawDetail from './components/LawDetail';
import SearchLaws from './components/SearchLaws';
import AdminPanel from './components/AdminPanel';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/laws" element={<LawsList />} />
            <Route path="/laws/:id" element={<LawDetail />} />
            <Route path="/search" element={<SearchLaws />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 