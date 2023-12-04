import React from "react";

function Item({ item, onClick }) {
  let shortDesc = item.description.split(".");

  return (
    <div onClick={() => onClick(item.id)}>
      <img src={item.image} alt="item" />
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <p>{item.category}</p>
      <p>{shortDesc[0]}</p>
    </div>
  );
}

export default Item;
