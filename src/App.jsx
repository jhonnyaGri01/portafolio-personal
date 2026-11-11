import { Routes, Route } from 'react-router';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { Navbar } from './components/Navbar';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
      <Navbar />
    </>
  );
}
