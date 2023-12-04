import React, { useState, useEffect } from "react";
import Item from "./Item";

function ItemList({ items, oneItem }) {
  return (
    <div>
      {items.map((item) => (
        <Item key={item.id} item={item} onClick={oneItem} />
      ))}
    </div>
  );
}

export default ItemList;
