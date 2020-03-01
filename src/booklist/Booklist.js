import React, {Component} from 'react';
import Bookitem from '../bookitem/Bookitem';


class Booklist extends Component{
    
    render(){
        if(this.props.booklist.length===0){
            return <div></div>
        }
        console.log(this.props.booklist);
        const booklist = this.props.booklist.map(
                (book,i) => ( 
                    <Bookitem 
                    key = {i}
                    title={book.volumeInfo.title}
                    thumbnail="thumbnail"
                    authors={book.volumeInfo.authors}
                    listPrice={"listPrice"}
                    textSnippet={JSON.stringify(book.searchInfo.textSnippet)}
                    />
                )  
        );

        return booklist;
    }

}
export default Booklist;