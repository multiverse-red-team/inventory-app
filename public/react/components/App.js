import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Item from "./Item";
import { Routes, Route} from "react-router-dom";

// import and prepend the api url to any fetch calls
import apiURL from "../api";


export const App = () => {

  return (
    <main>
      <p>Nav</p>
      <Routes>
        <Route path="/" element={<ItemList />}/>
        <Route path="/items/:id" element={<Item />}/>
      </Routes>
    </main>
  );
};
