import React, {Component} from 'react';

class PrintTypeFilter extends Component{
    render(){
        return(                     
            <span>
                <label htmlFor="printType">Print Type: </label>
                <select name="printType" onChange={e => this.props.printTypeFilter(e.target.value)}>
                    <option value="all">No Filter</option>  
                    <option value="books">books</option>
                    <option value="magazines">magazines</option>   
                </select>
            </span>   
        )
    }
}

export default PrintTypeFilter;