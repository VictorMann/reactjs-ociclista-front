import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Routes from './Routes';

import Header from './components/partials/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
