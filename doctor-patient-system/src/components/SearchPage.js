import React from 'react';
import "../App.css";

function SearchPage() {
    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                <a href="/Search">Home</a>
                </div>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search..."/>
                <button>Search</button>
            </div>
            
        </div>
    )
}

export default SearchPage
