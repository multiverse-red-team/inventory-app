import React from "react";
import { redirect, useLocation, useNavigate, useParams} from "react-router-dom";
import apiURL from "../api";
function Item({item}) {
  let data = useLocation();
  let navigate = useNavigate()
  if(data?.state?.item){
    item = data?.state?.item;
  }
  let {id} = useParams()

  //   const [singleItem, setSingleItem] = useState({});



  async function deleteItem(itemId) {
      const response = await fetch(`${apiURL}/items/${itemId}`, {method: "DELETE"});
      const data = await response.text();
      if(id){
        navigate("/")
      }

    }


  let shortDesc = item.description.split(".");

  return (
    <div>
      <img src={item.image} alt="item" />
      <h2>{item.name}</h2>
      <p>${item.price}</p>
      <p>{item.category}</p>
      <p>{shortDesc[0]}</p>
      {id && <div>
      <button onClick={() =>deleteItem(item.id)}>Delete</button>
      <button>Edit</button></div>}

    </div>
  );
}

export default Item;
