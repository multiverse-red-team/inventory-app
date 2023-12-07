import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Item from "./Item";
import Nav from "./Nav";
import AddItem from "./AddItem";
import { Routes, Route, Link } from "react-router-dom";
import apiURL from "../api";

export const App = () => {
  return (
    <>
		<Nav />
      <Routes>
        <Route path="/" element={<ItemList />} />
        <Route path="/items/:id" element={<Item />} />
        <Route path="/addItem" element={<AddItem />} />
      </Routes>
    </>
  );
};
