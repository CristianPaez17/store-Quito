import logoCarrito from './imagenes/logoCarrito.jpg';

function CartWidget(){
  return (
  <div className='numeroLogo'>
     <img className='logo' src={logoCarrito} alt="logoCarrito-Widget"/>0
    </div>
    )
}

export default CartWidget;