import React, { Component } from 'react';
import './FavImg.css';


class FavoriteImage extends Component {

  render() {
    return (
      <div className="Card">
        <a href={this.props.image.link} target="_blank">
            <div className="CardHead">{this.props.image.header}</div>
            <div className="CardBody" style={{backgroundImage: this.props.image.image}}></div>
        </a>
      </div>
    );
  }
}

export default FavoriteImage;