import React from 'react';
import './BooksearchApp.css';
import SearchBox from '../searchbox/SearchBox';
import PrintTypeFilter from '../printTypeFilter/PrintTypeFilter'
import BookTypeFilter from '../bookTypeFilter/BookTypeFilter';
import Booklist from '../booklist/Booklist';

class BooksearchApp extends React.Component{

    constructor(){
        super();
        this.state ={
          booklist: [],
          searchItem:'henry',
          printTypeOption: 'all',
          bookTypeOption: 'full'
        }
      }

    findSearchedItem(item){
        this.setState({
            searchItem: item
        })
    }

    updatePrintFilter(printType){
        this.setState({
            printTypeOption: printType
        })
    } 
    
    updateBookTypeFilter(bookType){
        this.setState({
            bookTypeOption: bookType
        })
    }

    addSearchResult(data){
        this.setState({
            booklist:data
        })
    }
    
    generateURLParam(url){
        return url+"q="+this.state.searchItem
              + "&filter=" + this.state.bookTypeOption
              + "&printType=" + this.state.printTypeOption;
    }


    handleSubmit(e) {
        e.preventDefault();
        const url = this.generateURLParam("https://www.googleapis.com/books/v1/volumes?");
        const option = {
          method: 'GET'
        }        
        fetch(url,option)
        .then(response=> {
            if(!response.ok){
                throw new Error('Something went wrong, please try again later.');
                }
                return response;
            }
        )
        .then(response => response.json())
        .then(result => {
            this.addSearchResult(result.items)}
        )
       
        .catch(error =>{
            console.error('Error: ' + error);
        })  
    }


    render(){
        return(
            <div className="BooksearchApp">
                <header className="booksearchApp-header">
                    <h1>Google Book Search</h1>
                </header>
                <form className="booksearch_form" onSubmit= {e => this.handleSubmit(e)}>
                    <SearchBox searchItem = { item => this.findSearchedItem(item) }/>
                    <div className="filter">
                        <PrintTypeFilter printTypeFilter={ptype => this.updatePrintFilter(ptype)}/>
                        <BookTypeFilter bookTypeFilter={btype => this.updateBookTypeFilter(btype)}/>
                    </div>
                </form>
                <Booklist booklist = {this.state.booklist}/>
            </div>
        )
    }
}

export default BooksearchApp;