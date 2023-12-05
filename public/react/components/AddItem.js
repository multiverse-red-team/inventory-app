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
    const response = await fetch(`/${apiURL}/items`, {
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
  }

  async function handleSubmit() {
    await postItem();
    navigate("/");
  }

  return (
    <div>
      <h4>Add Item</h4>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          placeholder="item name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Price:</label>
        <input
          type="number"
          placeholder="item price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />

        <label>Category:</label>
        <input
          type="text"
          placeholder="item category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <label>Description:</label>
        <input
          type="text"
          placeholder="item description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label>Image:</label>
        <input
          type="text"
          placeholder="item image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddItem;
