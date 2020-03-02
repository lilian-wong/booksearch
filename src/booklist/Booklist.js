import React, {Component} from 'react';
import Bookitem from '../bookitem/Bookitem';


class Booklist extends Component{
    
    render(){
        if(!this.props.booklist){
            return <div></div>
        }
        const booklist = this.props.booklist.map(
                (book,i) => ( 
                    <Bookitem 
                    key = {i}
                    title={book.volumeInfo.title}
                    thumbnail={book.volumeInfo.imageLinks.thumbnail}
                    authors={book.volumeInfo.authors}
                    listPrice={book.saleInfo.listPrice
                                ?book.saleInfo.listPrice.amount
                                :0}
                    textSnippet={book.searchInfo
                                ?book.searchInfo.textSnippet
                                :''}
                    />
                )  
        );

        return booklist;
    }

}
export default Booklist;