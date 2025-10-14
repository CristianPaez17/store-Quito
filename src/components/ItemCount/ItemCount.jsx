import { useState } from "react";
import "./ItemCount.css";

function ItemCount({ stock = 10, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  function sumar() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function restar() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="item-count-container">
      <div className="counter-controls">
        <button className="btn" onClick={restar} disabled={count === 1}>
          −
        </button>

        <span className="count">{count}</span>

        <button className="btn" onClick={sumar} disabled={count === stock}>
          +
        </button>
      </div>

      <p className="stock-info">Stock disponible: {stock}</p>

      {count === stock && (
        <p className="limit-warning">⚠️ Alcanzaste el máximo disponible</p>
      )}

      <button
        className="btn-add-to-cart"
        onClick={() => onAdd?.(count)}
        disabled={stock === 0}
      >
        🛒 Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;
