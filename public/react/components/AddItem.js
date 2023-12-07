import React, { useState } from "react";
import { useNavigate } from "react-router";
import apiURL from "../api";

function AddItem() {
  const [item, setItem] = useState({});

  const navigate = useNavigate();

  async function postItem() {
    try {
      const response = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      if (!response.ok) {
        throw new Error("post was not succesful");
      }

      const data = await response.json();

      console.log("POST was succesful", data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    postItem();
    setItem({});
    navigate("/");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setItem({ ...item, [name]: value });
  }

  console.log(item);

  return (
    <div>
      <div className="add">
        <h4 className="add-h4">Add an Item to Inventory</h4>
        <form className="add-form" onSubmit={handleSubmit}>
          <label className="add-label name-label">Name:</label>
          <input
            name="name"
            className="form-input"
            type="text"
            placeholder="Item name"
            required={true}
            value={item.name}
            onChange={handleChange}
          />

          <label className="add-label">Price:</label>
          <input
            name="price"
            className="form-input"
            type="number"
            min={0}
            placeholder="item price"
            required={true}
            value={item.price}
            onChange={handleChange}
          />

          <label className="add-label">Category:</label>
          <input
            name="category"
            className="form-input"
            type="text"
            placeholder="Item category"
            required={true}
            value={item.category}
            onChange={handleChange}
          />

          <label className="add-label">Description:</label>
          <textarea
            name="description"
            className="form-input"
            type="text"
            placeholder="Item description"
            required={true}
            value={item.description}
            onChange={handleChange}
          />

          <label className="add-label">Image:</label>
          <input
            name="image"
            className="form-input"
            type="text"
            placeholder="Item image"
            required={true}
            value={item.image}
            onChange={handleChange}
          />

          <br />
          <br />
          <div className="add-button-div">
            <button className="add-button submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddItem;
