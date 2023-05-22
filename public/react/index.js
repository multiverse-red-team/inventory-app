//import React from "react";
//import { createRoot } from 'react-dom/client';
//import 'regenerator-runtime/runtime'

//import {App} from './components/App';

//const root = createRoot(document.getElementById("root"));
//root.render(<App />);

///////////////////////////////////////////////////////////////////////

let inventory = [];

let inputBox = document.querySelector(".inputBox");
let addButton = document.querySelector(".addButton");
let list = document.querySelector(".list");

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  inventory.push(inputBox.value);
  inputBox.value = '';
  updateInventoryList();
  console.log(inventory);
});

function updateInventoryList() {
    // Clear the existing list
    list.innerHTML = '';
  
    // Loop through the inventory array
    for (let i = 0; i < inventory.length; i++) {
      // Create a new list item element
      let listItem = document.createElement('li');
      
      // Set the text content of the list item to the current inventory item
      listItem.textContent = inventory[i];
      
      // Append the list item to the inventory list
      list.appendChild(listItem);
    }
  }