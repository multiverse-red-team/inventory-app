import React, { useState } from "react";
import { useNavigate } from "react-router";
import apiURL from "../api";

function AddItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  async function postItem() {
    try {
      const response = await fetch(`${apiURL}/items`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, price, category, description, image }),
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
    setName("");
    setPrice(0);
    setCategory("");
    setDescription("");
    setImage("");
    navigate("/");
  }

  return (
    <div>
      <div className="add">
        <h4 className="add-h4">Add an Item to Inventory</h4>
        <form className="add-form" onSubmit={handleSubmit}>
          <label className="add-label name-label">Name:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Item name"
            required={true}
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <label className="add-label">Price:</label>
          <input
            className="form-input"
            type="number"
            min={0}
            placeholder="item price"
            required={true}
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />

          <label className="add-label">Category:</label>
          <input
            className="form-input"
            name="category"
            type="text"
            placeholder="Item category"
            required={true}
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <label className="add-label">Description:</label>
          <textarea
            className="form-input"
            type="text"
            placeholder="Item description"
            required={true}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />

          <label className="add-label">Image:</label>
          <input
            className="form-input"
            type="text"
            placeholder="Item image"
            required={true}
            value={image}
            onChange={(event) => setImage(event.target.value)}
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
