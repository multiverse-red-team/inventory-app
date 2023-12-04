import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  const [items, setItems] = useState([]);
  const [singleItem, setSingleItem] = useState({});

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemData = await response.json();
      setItems(itemData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  async function oneItem(id) {
    try {
      const response = await fetch(`${apiURL}/items/${id}`);
      const data = await response.json();
      setItems([data]);
    } catch (error) {
      console.log("Oh no an error!", error);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <main>
      <h1>Sauce Store</h1>
      <h2>All Items</h2>
      <ItemList items={items} oneItem={oneItem} />
    </main>
  );
};
