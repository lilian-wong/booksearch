import React, {Component} from 'react';

class PrintTypeFilter extends Component{
    render(){
        return(                     
            <span>
                <label htmlFor="printType">Print Type: </label>
                <select name="printType" onChange={e => this.changePrintType(e.target.value)}>
                    <option default value="full">All</option>
                    <option default value="partial">partial</option>
                    <option default value="free-ebooks">free-ebooks</option>
                    <option default value="paid-ebooks">paid-ebooks</option>
                    <option default value="ebooks">ebooks</option>
                </select>
            </span>   
        )
    }
}

export default PrintTypeFilter;