import { NavLink } from 'react-router';

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Inicio
      </NavLink>
      <NavLink to="/proyectos" className={({ isActive }) => (isActive ? 'active' : '')}>
        Proyectos
      </NavLink>
    </nav>
  );
}