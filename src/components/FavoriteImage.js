import React, { Component } from 'react';
import './FavImg.css';


class FavoriteImage extends Component {

  render() {
    let width;
    let cardBody = document.getElementsByClassName('CardBody');
    if(cardBody[0]===undefined){
      console.log(document.getElementById('cardbb'))
    }else{
      width = cardBody[0].clientWidth;
    }
    return (
      <div className="Card">
        <a href={this.props.image.link} target="_blank">
          <div className="CardHead"><h3>{this.props.image.header}</h3></div>
          <div className="CardBody" id="cardbb" style={{backgroundImage: this.props.image.image, height:width}}></div>
        </a>
        <a>
          <div className="CardDelete">Remove</div>
        </a>
      </div>
    );
  }
}

export default FavoriteImage;