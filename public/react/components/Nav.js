import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";

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
                    <p>Add Item</p>
                </Link>
            </div>
	    </div>
     );
}

export default Nav;