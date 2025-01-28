import {  useState } from "react";
import "./Search.css"

export default function Search({setSearchTerm  }){

    const [searchInput, setSearchInput] = useState("");  // State for the search term

    // Handle input change and update the search term
    const handleInputChange = (e) => {
        setSearchInput(e.target.value); // Update local search input state
    };

    const handleSearch = () => {
        setSearchTerm(searchInput); // Update search term in the parent component (Home)
    };
    return <div className="input-group">
            <input
                type="text"
                id="search_field"
                className="form-control"
                placeholder="Enter Recipe Name"
                onBlur={handleSearch}
                value={searchInput}  // Bind input value to searchTerm state
                onChange={handleInputChange}  // Update searchTerm on input change
            />
            <div className="input-group-append">
                <button id="search_btn" className="btn" onClick={handleSearch}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </div>
            </div>
        

}