import React, { useState, useEffect } from "react";
import Item from "./Item";
import apiURL from "../api";
import { Link } from "react-router-dom";

function ItemList() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("")
  const [searchBy, setSearchBy] = useState("All")

  async function fetchItems() {
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemData = await response.json();
    //   console.log(itemData, "ID")
      setItems(itemData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchItems();
  }, []); 

  const categoryFilter = items.filter((item) => item.category === searchBy)
  
  const itemData = searchBy === "All" ? items : categoryFilter

//   console.log(itemData)
  const filteredItems = search.trim() === "" ? itemData : itemData.filter((item) => item.name.toLowerCase().includes(search) || item.name.includes(search))


  let categories = []
  items.map((item) => {
	if (!categories.includes(item.category)) {
		categories.push(item.category)
	}
  })

//   const searchOptions = items.map((item) => {
// 		<option>{item.category}</option>
//   })
  
  return (
      <div id="item-list">
         <h1>All Items In Inventory</h1>
		 <form>
		 <div className="search-bar">
			<select value={searchBy} onChange={(e) => setSearchBy(e.target.value)} >
				<option>All</option>
				{categories.map((category) => (
					<option>{category}</option>
				))}
			</select>
			<label>Search: </label>
			<input 
				type="text"
				name="name"
        		placeholder="search items..."
        		value={search}
        		onChange={(e) => setSearch(e.target.value)}
			/>
			<button>Submit</button>
		 </div>
		 </form>
      {filteredItems.map((item) => (
        <div key={item.id}>
          <Link to={`/items/${item.id}`} state={{ item }}>
            <Item item={item} />
          </Link>
    	</div>
      ))}
      </div>
  );
}

export default ItemList;
