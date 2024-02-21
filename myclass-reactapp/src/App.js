import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ServicesFunc from './components/ServicesFunc';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesFunc />} />
      </Routes>
    </Router>
  );
}

export default App;

