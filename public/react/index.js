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
let inputPrice= document.querySelector(".inputPrice");

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

  let newProduct = new Product(
    inputName.value,
    inputDescription.value,
    inputCategory.value,
    inputPrice.value
  );

  inventory.push(newProduct); // Push the new product object to the inventory array

  updateInventoryList(); // Update the inventory list

  inputName.value = '';
  inputDescription.value = '';
  inputCategory.value = '';
  inputPrice.value = '';
});

function updateInventoryList() {
  // Clear the existing list
  list.innerHTML = '';

  // Loop through the inventory array
  for (let i = 0; i < inventory.length; i++) {
    // Create a new div container for each product
    let container = document.createElement('div');
    container.classList.add('container');

    // Create the inner div elements for product information
    let item = document.createElement('div');
    item.classList.add('item');

    let itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    let itemTitle = document.createElement('div');
    itemTitle.classList.add('item-title');
    itemTitle.textContent = inventory[i].name;

    let itemDescription = document.createElement('div');
    itemDescription.classList.add('item-description');
    itemDescription.textContent = inventory[i].description;

    let itemCategory = document.createElement('div');
    itemCategory.classList.add('item-category');
    itemCategory.textContent = inventory[i].category;

    let itemPrice = document.createElement('div');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = "£" + inventory[i].price;

    // Append the inner div elements to the item-info div
    itemInfo.appendChild(itemTitle);
    itemInfo.appendChild(itemDescription);
    itemInfo.appendChild(itemCategory);
    itemInfo.appendChild(itemPrice);

    // Append the item-info div to the item div
    item.appendChild(itemInfo);

    // Append the item div to the container div
    container.appendChild(item);

    // Append the container div to the inventory list
    list.appendChild(container);
  }
}