import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import CharactersPage from './components/Characters-page';

function App() {
  return (
    <div className="App">
      <Route path='/' element={<CharactersPage />} />
    </div>
  );
}

export default App;
