import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import Leagues from './Pages/Leagues';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';
import Register from './Pages/Register';
import YourTeams from './Pages/YourTeams';
import AboutUs from './Pages/AboutUs';



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/TG" element={<Home />} />
          <Route exact path="/TG/leagues" element={<Leagues />} />
          <Route exact path="/TG/generator" element={<Register />} />
          <Route exact path="/TG/yourTeams" element={<YourTeams />} />
          <Route exact path="/TG/about" element={<AboutUs />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
