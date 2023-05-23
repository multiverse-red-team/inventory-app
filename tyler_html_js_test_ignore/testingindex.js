//import React from "react";
//import { createRoot } from 'react-dom/client';
//import 'regenerator-runtime/runtime'

//import {App} from './components/App';

//const root = createRoot(document.getElementById("root"));
//root.render(<App />);

///////////////////////////////////////////////////////////////////////























let inventory = [];
let addButton = document.querySelector(".addButton");
let list = document.querySelector(".list");


let inputName = document.querySelector(".inputName");
let inputDescription = document.querySelector(".inputDescription");
let inputCategory = document.querySelector(".inputCategory");
let inpuPrice= document.querySelector(".inputPrice");


var test = document
function clickTest() {

}

class Product {
    constructor(name, description, category, price) {
      this.name = name;
      this.description = description;
      this.category = category;
      this.price = price;
    }
  }

addButton.addEventListener('click', (event) => {
  event.preventDefault();
  inventory.push(inputProduct.value);
  inputProduct.value = '';
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

  
 let demo = document.getElementById("demo");
 console.log(demo);
