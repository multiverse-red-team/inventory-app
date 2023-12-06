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
      console.log(itemData, "ID")
      setItems(itemData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  console.log(`items`, items)
  return (
      <div id="item-list">
         <h1>All Items In Inventory</h1>
      {items.map((item) => (
        // <div key={item.id}>
          <Link to={`/items/${item.id}`} state={{ item }}>
            <Item item={item} />
          </Link>
        // </div>
      ))}
      </div>
  );
}

export default ItemList;
