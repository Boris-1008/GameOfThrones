import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import BackgroundMusic from './components/BackgroundMusic.jsx';
import Home from './pages/Home.jsx';
import Characters from './pages/Characters.jsx';
import Houses from './pages/Houses.jsx';
import Regions from './pages/Regions.jsx';
import About from './pages/About.jsx';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/houses" element={<Houses />} />
          <Route path="/regions" element={<Regions />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <BackgroundMusic />
      <Footer />
    </div>
  );
}

export default App;
