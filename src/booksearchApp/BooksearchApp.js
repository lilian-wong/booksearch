import React from 'react';
import './BooksearchApp.css';

class BooksearchApp extends React.Component{
    
    render(){

        let booklist = [];
        if(this.props.booklist.length!==0){
            console.log(this.props.booklist.items);
        booklist = this.props.booklist.items.map(
            (book) => (    
                <ul className='bookItem'>
                    <li>{book.volumeInfo.title}</li>
                    <li>Author: {book.volumeInfo.authors}</li>
                    <li>{JSON.stringify(this.props.booklist.items[0].searchInfo.textSnippet)}</li>
                </ul>
            )  
        );
         
        }
        
        return(
            <div className="BooksearchApp">
                <header className="booksearchApp-header">
                    <h1>Google Book Search</h1>
                </header>
                <form className="booksearchbar">
                    <div>
                    <label htmlFor="search">Search: </label>
                    <input type="text" className="searchbox" id="searchbox"/>
                    <button type="submit" className="submitButton">Search</button>
                    </div>
                    <div>
                        <label htmlFor="printType">Print Type: </label>
                        <select name="printType">
                            <option default value="All">All</option>
                        </select>
                        <select name="bookType">
                            <option default value="All">No Filter</option>
                        </select>
                    </div>
                </form>
               {booklist}
                
            </div>
        )
    }
}

export default BooksearchApp;