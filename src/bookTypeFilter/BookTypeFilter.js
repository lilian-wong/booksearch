import React,{Component} from 'react';

class BookTypeFilter extends Component{
    render(){
        return(
            <span>
                <label htmlFor="printType">Book Type: </label>
                <select name="bookType" onChange={e => this.props.bookTypeFilter(e.target.value)}>
                    <option value="full">All</option>
                    <option value="partial">partial</option>
                    <option value="free-ebooks">free-ebooks</option>
                    <option value="paid-ebooks">paid-ebooks</option>
                    <option value="ebooks">ebooks</option>
                </select>
            </span>
        )
    }
}

export default BookTypeFilter;