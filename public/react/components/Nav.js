import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
    return ( 
        <div id="nav">
            <div>
                <Link to="/">
                    <h1>Inventory App</h1>
                </Link>
            </div>
            <div>
                <Link to="/addItem">
                    <h2>Add Item</h2>
                </Link>
            </div>
	    </div>
     );
}

export default Nav;