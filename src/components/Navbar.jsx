import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        GameVault
      </div>

      <div className="nav-links">
        <Link to="/">Inicio</Link>
        <Link to="/dashboard">Catálogo</Link>
        <Link to="/login">Iniciar Sesión</Link>
        <Link to="/register">Registrarse</Link>
      </div>

    </nav>
  );
}

export default Navbar;