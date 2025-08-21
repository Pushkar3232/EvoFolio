// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CreatePortfolio } from './pages/CreatePortfolio';
import { AllPortfolios } from './pages/AllPortfolios';
import { StudentPortfolio } from './pages/StudentPortfolio';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreatePortfolio />} />
            <Route path="/portfolios" element={<AllPortfolios />} />
            <Route path="/portfolio/:id" element={<StudentPortfolio />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;