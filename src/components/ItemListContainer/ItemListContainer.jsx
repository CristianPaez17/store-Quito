import Item from "../Item/item.jsx";
import getData, { getProductsByCategory } from "../../data/mockAPIService.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import "./ItemListContainer.css"; 

function ItemListContainer(props) {
  const [productos, setProductos] = useState([]);
  const { catParam } = useParams();

  useEffect(() => {
    if (catParam) {
      getProductsByCategory(catParam).then((data) => setProductos(data));
    } else {
      getData().then((data) => {
        console.log("Datos recibidos", data);
        setProductos(data);
      });
    }
  }, [catParam]);

  return (
    <section className="itemlist-container">
      <h2 className="greeting">-- {props.greeting} --</h2>
      <div className="item-grid">
        {productos.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;
