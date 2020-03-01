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
      console.log(data.length);
    }
    
    generateURLParam(url){
        return url+"q="+this.state.searchItem
              + "&filter=" + this.state.bookTypeOption
              + "&printType=" + this.state.printTypeOption;
    }


    handleSubmit(e) {
        e.preventDefault();
        const url = this.generateURLParam("https://www.googleapis.com/books/v1/volumes?");
        // const url = "https://www.googleapis.com/books/v1/volumes?q=flowers&filter=free-ebooks";
        // const option = {
        //   method: 'GET',
        //   headers:{
        //     "key": "",
        //     "content-Type":"application/json"
        //   },
        // }
        // fetch(url,option)
        fetch(url)
        .then(response=> {
        if(!response.ok){
            throw new Error('Something went wrong, please try again later.');
        }
        return response;
        })
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
                    <SearchBox />
                    <div className="filter">
                        <PrintTypeFilter/>
                        <BookTypeFilter/>
                    </div>
                </form>
                <Booklist booklist = {this.state.booklist}/>
            </div>
        )
    }
}

export default BooksearchApp;