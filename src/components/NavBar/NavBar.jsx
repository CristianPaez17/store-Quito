import logo from "./imgLogo/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom"; 


function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img className="logo-img" src={logo} alt="Logo Deportivo Quito" />
        </Link>
      </div>

      <ul className="navbar-links">
        <li><Link to="/category/Camisetas">Camisetas</Link></li>
        <li><Link to="/category/Shorts">Shorts</Link></li>
        <li><Link to="/category/Portero">Portero</Link></li>
        <li><Link to="/category/Entrenamiento">Entrenamiento</Link></li>
        <li><Link to="/category/Abrigo">Abrigo</Link></li>
        <li><Link to="/category/Accesorios">Accesorios</Link></li>
      </ul>

      <div className="cart-container">
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
