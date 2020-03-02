import React, {Component} from 'react';
import '../bookitem/Bookitem.css';

class Bookitem extends Component{
    
    render(){
        return(
        <div>
            <section className="result_wrapper">      
                <img src={this.props.thumbnail} alt={this.props.title}/>
                <div className="bookInfo">
                    <h2>{this.props.title}</h2>
                    <ul className='bookItem'>
                        <li>Author: {this.props.authors}</li>
                        <li>Price: ${this.props.listPrice}</li>
                    </ul>
                    <p dangerouslySetInnerHTML={{__html: this.props.textSnippet}}></p>
                </div>
            </section>
            <hr/>
         </div>
        )
    }
}

export default Bookitem;