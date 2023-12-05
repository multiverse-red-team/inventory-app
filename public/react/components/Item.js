import React from "react";

function Item({item}) {
  //   const [singleItem, setSingleItem] = useState({});

  

  // async function oneItem(id) {
  //   try {
  //     const response = await fetch(`${apiURL}/items/${id}`);
  //     const data = await response.json();
  //     setItems([data]);
  //   } catch (error) {
  //     console.log("Oh no an error!", error);
  //   }
  // }

  let shortDesc = item.description.split(".");

  return (
    <div>
      <img src={item.image} alt="item" />
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <p>{item.category}</p>
      <p>{shortDesc[0]}</p>
    </div>
  );
}

export default Item;
