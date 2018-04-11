import React, { Component } from 'react';
import FavoriteImage from './FavoriteImage';
import './FavImgs.css';

class FavoriteImages extends Component {

  render() {
    let favoriteImage
    if(this.props.images){
        favoriteImage = this.props.images.map(image=>{
            return(
                <FavoriteImage key={image.id} image={image}/>
            )
        })
    }
    return (
      <div className="FavImgs">
        {favoriteImage}
      </div>
    );
  }
}

export default FavoriteImages;