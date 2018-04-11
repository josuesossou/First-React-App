import React, { Component } from 'react';
import './FavImg.css';


class FavoriteImage extends Component {


  componentWillMount(){

  }

  render() {
    let cardBodyStyles;
    let cardBody = document.getElementsByClassName('CardBody');
    if(cardBody[0]===undefined){
      cardBodyStyles = {
        backgroundImage: this.props.image.image,
         height:cardBody.clientWidth
      }
    }else{
      cardBodyStyles = {
        backgroundImage: this.props.image.image,
         height:cardBody[0].clientWidth
      }
    }
    return (
      <div className="Card">
        <a href={this.props.image.link} target="_blank">
          <div className="CardHead"><h3>{this.props.image.header}</h3></div>
          <div className="CardBody" style={cardBodyStyles}></div>
        </a>
          <div className="CardDelete">Remove</div>
      </div>
    );
  }
}

export default FavoriteImage;