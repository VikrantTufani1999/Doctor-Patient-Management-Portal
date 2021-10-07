import React from 'react';
import "../App.css";
import NewsFeed from "./NewsFeed"
import Faq from "./Faq"
import CriticalTable from './CriticalTable';

function SearchPage() {
    return (
        <div>
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                <a href="/Search">Home</a>
                {/* <a href="/AdminLogin">Admin Login</a> */}
                <a href="/">Logout</a>
                </div>
            </div>
            <div className="rightSide">
                <input type="text" placeholder="Search..."/>
                <button>Search</button>
            </div>   
        </div>

        <div className="Table">
            <CriticalTable />
        </div>

        <div className="News">
            <NewsFeed />
        </div>
        <div>
            <Faq />
        </div>
       </div>
 
    )
}

export default SearchPage
