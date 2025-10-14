import { getProductById } from "../../data/mockAPIService.js";
import ItemCount from "../itemCount/itemCount.jsx";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import Spinner from "./Spinner.jsx";
import "./ItemDetailContainer.css"; 

function ItemDetailContainer() {
  const [itemData, setItemData] = useState({ loading: true });
  const { idParam } = useParams();

  useEffect(() => {
    getProductById(idParam).then(res => setItemData(res));
  }, [idParam]);

  return (
    <div className="item-detail-container">
      {itemData.loading ? (
        <Spinner />
      ) : (
        <div className="item-detail-card">
          <img className="item-img" src={itemData.img} alt={itemData.title} />
          <div className="item-info">
            <h2>{itemData.title}</h2>
            <p className="item-category">Categoría: {itemData.category}</p>
            <p className="item-description">{itemData.descripcion}</p>
            <p className="item-price">Precio: <strong>${itemData.price}</strong></p>
            <p className="item-stock">Stock disponible: {itemData.stock}</p>
            <ItemCount stock={itemData.stock} initial={1} />
          </div>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
