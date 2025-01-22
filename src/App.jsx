import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AboutApp from './pages/AboutApp';
import AboutTeam from './pages/AboutTeam';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="app" element={<AboutApp />} />
          <Route path="team" element={<AboutTeam />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
