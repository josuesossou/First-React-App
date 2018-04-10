import React, { Component } from 'react';
import './App.css';
import FavoriteImages from './components/FavoriteImages';
import AddImage from './components/AddImage';
import ObjectID from "bson-objectid";

class App extends Component {

  constructor(){
    super();

    this.state = {
        images: []
    }
  }

  componentWillMount(){
      this.setState({images:[
        {
          id:new ObjectID().toHexString(),
          link:"https://lh3.googleusercontent.com/_aBpW80cAI23Y2Mr-C2cv-wJ4FTz7u8ut9STvjJHYqtWFNJ07sJCYtU1Lh7IaYnp9yrD=s155",
          header:"Black Panther",
          image:"url(https://lh3.googleusercontent.com/_aBpW80cAI23Y2Mr-C2cv-wJ4FTz7u8ut9STvjJHYqtWFNJ07sJCYtU1Lh7IaYnp9yrD=s155)"
        }
      ]
    })
  }

  handleAddImage = (image)=>{
    let images = this.state.images;
    images.push(image);
    this.setState({
      images:images
    })

  }

  render() {
    return (
      <div className="App">
        <FavoriteImages images={this.state.images}/>
        <AddImage addImage = {this.handleAddImage}/>
      </div>
    );
  }
}

export default App;
