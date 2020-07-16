import React from 'react';
import './QuoteCard.css';
import axios from 'axios';

class QuoteCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorite : false,
            quote : "Test2"
        };
        this.getQuote= this.getQuote.bind(this);
    }

    getQuote() {
        // Send the request
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
          // Extract the DATA from the received response
          .then(response => response.data)
          // Use this data to update the state
          .then(data => {
            console.log(data);
            this.setState({
              quote: data[0].quote,
            });
        });
      }

    render(){
        return (
        <figure className="QuoteCard">
            <img src={this.props.image} alt={this.props.character}/>
            <figcaption>
                <blockquote>
                    {this.state.quote}
                </blockquote>
                <button onClick={this.getQuote}>New Quote</button>
                <p>
                <cite>{this.props.character}</cite>
                <span onClick = {event => {
                    const newFavorite = !this.state.favorite;
                    this.setState({favorite : newFavorite})
                }} className = {this.state.favorite ? 'is-favorite' : ''}>&#9733;</span>
                </p>
            </figcaption>
        </figure>
        )
        }
}


export default QuoteCard;