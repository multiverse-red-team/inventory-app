import React, { useState } from "react";
import { redirect, useLocation, useNavigate, useParams, Link } from "react-router-dom";
import apiURL from "../api";
function Item({ item }) {
  let data = useLocation();
  let navigate = useNavigate()
  if (data?.state?.item) {
    item = data?.state?.item;
  }
  let { id } = useParams()


  const [isEdit, setIsEdit] = useState(false);
  const [updatedItem, setUpdatedItem] = useState(item)


  async function deleteItem(itemId) {
    const response = await fetch(`${apiURL}/items/${itemId}`, { method: "DELETE" });
    const data = await response.text();
    if (id) {
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
      setUpdatedItem(data)
      setIsEdit(!isEdit)
    }
  }

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setUpdatedItem({ ...updatedItem, [name]: value })
  }

  function cancel() {
    setUpdatedItem(item)
    setIsEdit(!isEdit)
  }


  let shortDesc = item.description.split(".");


  if (!isEdit) {
    return (
      <div className={id ? "item" : "itemhome"}>
        <div className="item-img">
          <img src={item.image} alt="item" />
        </div>
        <div className="item-details">
          <h2 className="name">{updatedItem.name}</h2>
          <div className="det">
          <p className="price">List Price: ${updatedItem.price}</p>
          <p className="category">In: {updatedItem.category}</p>
          </div>
          {id && <div className="buttons">
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
          </div>}
        </div>
        {id && <p className="description">About this item: {shortDesc[0]}</p>}
      </div>
    )
  } else {
    return (
      <>
        <div className="item-edit">
          <img src={item.image} alt="item" className="item-img-edit"/>
          <div id="edit-container">
            <form id="edit-form" onSubmit={updateItem}>
              <label className="name-label">Name:</label>
              <input
                className="form-input"
                id="name-input"
                name="name"
                type="text"
                placeholder="item name"
                value={updatedItem.name}
                onChange={handleChange}
              />
              <label>Price:</label>
              <input
                className="form-input"
                name="price"
                type="number"
                placeholder="item price"
                value={updatedItem.price}
                onChange={handleChange}
              />
              <label>Category:</label>
              <input
                className="form-input"
                name="category"
                type="text"
                placeholder="item category"
                value={updatedItem.category}
                onChange={handleChange}
              />
              <label>Description:</label>
              <textarea
              className="form-input"
                name="description"
                type="text"
                value={updatedItem.description}
                onChange={handleChange}
              />
              <div id="edit-buttons">
                <button className="submit" onClick={cancel}>Cancel</button>
                <button className="submit" type="submit">Save Changes</button>
              </div>
            </form>
          </div >
        </div >
      </>
    )
  }
}

export default Item;
