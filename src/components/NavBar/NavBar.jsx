import logo from "./imgLogo/logo.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar(){
  return (
    <nav>
      <div><img className="logosport" src={logo} alt="logo"/></div>
     
     <ul>
      <li><a href="#">Camisetas</a></li>
      <li><a href="#">Camisetas Retro</a></li>
      <li><a href="#">Calentadores</a></li>
      <li><a href="#">Chompas</a></li>
      <li><a href="#">Balones</a></li>
    </ul>

      <div className="cartContainer"><CartWidget /></div>
    </nav>
  )
}
export default NavBar;