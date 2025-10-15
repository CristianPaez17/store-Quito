import logo from "./imgLogo/logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router";

function NavBar(){
  return (
    <nav>
      <div><img className="logosport" src={logo} alt="logo"/></div>
     
    <ul>
      <Link to="/category/Camisetas">Camisetas</Link>
        <Link to="/category/Shorts">Shorts</Link>
        <Link to="/category/Portero">Portero</Link>
        <Link to="/category/Entrenamiento">Entrenamiento</Link>
        <Link to="/category/Abrigo">Abrigo</Link>
        <Link to="/category/Accesorios">Accesorios</Link>
    </ul>

      <div className="cartContainer"><CartWidget /></div>
    </nav>
  )
}
export default NavBar;