import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Todos from './pages/Todos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;
