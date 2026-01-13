import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Footer } from './components';
import { Home, Art, About } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
