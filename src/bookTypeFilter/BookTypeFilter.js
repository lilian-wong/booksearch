import React,{Component} from 'react';

class BookTypeFilter extends Component{
    render(){
        return(
            <span>
                <label htmlFor="printType">Book Type: </label>
                <select name="bookType">
                    <option default value="all">No Filter</option>  
                    <option default value="books">books</option>
                    <option default value="magazines">magazines</option>   
                </select>
            </span>
        )
    }
}

export default BookTypeFilter;