import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import TeamsList from './Pages/TeamsList';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home';



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/TG" element={<Home />} />
          <Route exact path="/TG/leagues" element={<TeamsList />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
