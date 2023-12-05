import React, { useState, useEffect } from "react";
import Item from "./Item";
import apiURL from "../api";
import { Link } from "react-router-dom";

function ItemList() {

  const [items, setItems] = useState([]);

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemData = await response.json();
      setItems(itemData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <h1>Sauce Store</h1>
      <h2>All Items</h2>
      {items.map((item) => (
        <Link
        to={`/items/${item.id}`}
      state={{item}}
        >
          <Item key={item.id} item={item}/>
          </Link>
      ))}
    </div>
  );
}

export default ItemList;
