import React, {Component} from 'react';

class Bookitem extends Component{
    render(){
        return(
         <div>   
            <h2>{this.props.title}</h2>
            <img src={this.props.thumbnail} alt={this.props.title}/>
            <ul className='bookItem'>
                <li>Author: {this.props.authors}</li>
                <li>Price:{this.props.listPrice}</li>
                <li>{this.props.textSnippet}</li>
            </ul>
         </div>
        )
    }
}

export default Bookitem;