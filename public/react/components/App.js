import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Item from "./Item";
import AddItem from "./AddItem";
import { Routes, Route, Link } from "react-router-dom";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  return (
    <main>
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>

        <Link to="/addItem">
          <p>Add Item</p>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/addItem" element={<AddItem />} />
      </Routes>
    </main>
  );
};
