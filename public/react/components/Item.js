import React, { useState } from "react";
import { redirect, useLocation, useNavigate, useParams, Link } from "react-router-dom";
import apiURL from "../api";
function Item({item}) {
  let data = useLocation();
  let navigate = useNavigate()
  if(data?.state?.item){
    item = data?.state?.item;
  }
  let {id} = useParams()

    const [isEdit, setIsEdit] = useState(false);
    const [updatedItem, setUpdatedItem] = useState(item)



  async function deleteItem(itemId) {
      const response = await fetch(`${apiURL}/items/${itemId}`, {method: "DELETE"});
      const data = await response.text();
      if(id){
        navigate("/")
      }
    }

  async function updateItem(e) {
    e.preventDefault()
    const res = await fetch(`${apiURL}/items/${item.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem)
    })
    if (res.ok) {
    const data = await res.json()

  }
  } 

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setUpdatedItem({...updatedItem, [name]: value})
  }
  
  
  let shortDesc = item.description.split(".");


  if (!isEdit) {
  return (
    <div className={id ? "itemhome" : "item"}>
      <img src={item.image} alt="item" />
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <p>{item.category}</p>
      <p>{shortDesc[0]}</p>
      {id && <div>
      <button onClick={() =>deleteItem(item.id)}>Delete</button>
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
    </div>}
    </div>
  )} else {
    return (
      <>
      <div>
      <img src={item.image} alt="item" />
      <div id="edit-container">
      <form id="edit-form">
      <label>Name:</label>
      <input
          name="name"
          type="text"
          placeholder="item name"
          value={updatedItem.name}
          onChange={handleChange}
        />
      <label>Price:</label>
        <input
          name="price"
          type="number"
          placeholder="item price"
          value={updatedItem.price}
          onChange={handleChange}
        />
      <label>Category:</label>
        <input
          name="category"
          type="text"
          placeholder="item category"
          value={updatedItem.category}
          onChange={handleChange}
        />
      <label>Description:</label>
        <textarea
          name="description"
          rows={6} cols={40}
          value={updatedItem.description}
          onChange={handleChange}
        />
      <div id="edit-buttons">  
        <button onClick={() => setIsEdit(!isEdit)}>Cancel</button>
        <button type="submit">Save Changes</button>
      </div>
      </form>
      </div>
      </div>
    </>
    )
  }
}

export default Item;
