import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Item from "./Item";
import Nav from "./Nav";
import AddItem from "./AddItem";
import EditItem from "./EditItem";
import { Routes, Route, Link } from "react-router-dom";

// import and prepend the api url to any fetch calls
import apiURL from "../api";

export const App = () => {
  return (
    <>
		<Nav />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/addItem" element={<AddItem />} />
        <Route path="/items/:id/edit" element={<EditItem />} />
      </Routes>
    </>
  );
};
