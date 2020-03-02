import React, {Component} from 'react';
import '../bookitem/Bookitem.css';

class Bookitem extends Component{
    
    render(){
        return(
         <div>   
            <h2>{this.props.title}</h2>
            <img src={this.props.thumbnail} alt={this.props.title}/>
            <ul className='bookItem'>
                <li>Author: {this.props.authors}</li>
                <li>Price: ${this.props.listPrice}</li>
            </ul>
            <div dangerouslySetInnerHTML={{__html: this.props.textSnippet}}></div>
         </div>
        )
    }
}

export default Bookitem;