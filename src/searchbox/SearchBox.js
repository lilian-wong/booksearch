import React, { Component } from 'react';

class SearchBox extends Component{
    render(){
        return(
            <div className="searchForm">
                <label htmlFor="search">Search: </label>
                <input type="text" className="searchbox" id="searchbox"/>
                <button type="submit" className="submitButton">Search</button>
            </div>
        )
    }
}

export default SearchBox;