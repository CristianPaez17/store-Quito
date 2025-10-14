import { Link } from "react-router-dom";
import "./Item.css"; 


export default function Item(props) {
  const { id, title, img, price } = props;

  return (
    <div className="item-card">
      <img className="item-img" src={img} alt={title} />
      <h4 className="item-title">{title}</h4>
      <p className="item-price">Precio: ${price}</p>

      <Link to={`/detail/${id}`}>
        <button className="item-button">Ver detalle</button>
      </Link>
    </div>
  );
}
