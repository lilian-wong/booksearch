import React, { Component } from 'react';
import './App.css';

import BooksearchApp from './booksearchApp/BooksearchApp';

class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      booklist: [],
      showBooklist: false
    }
  }
  
  componentDidMount() {
    const url = "https://www.googleapis.com/books/v1/volumes?q=Henry I";
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
      this.setState({
        booklist: result
      });
    }
      )
    .catch(error =>{
      console.error('Error: ' + error);
    })
  }


  render(){
    return (
      <div className = "App">
        <BooksearchApp booklist={this.state.booklist}/>
      </div>
    );
  }
}

export default App;
