import React from 'react';

function Item({ item }) {

  let shortDesc = item.description.split(".")

  return ( 
    <>
    <img src={item.image} alt='item'/>
    <h2>{item.name}</h2>
    <p>${item.price}</p>
    <p>{item.category}</p>
    <p>{shortDesc[0]}</p>
    </>
   );
}

export default Item;
	