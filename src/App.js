import React, { Component } from 'react';
import './App.css';
import FavoriteImages from './components/FavoriteImages';
import AddImage from './components/AddImage';
// import $ from 'jquery';
// import ObjectID from "bson-objectid";

class App extends Component {

  constructor(){
    super();

    this.state = {
        images: []
    }
  }

  componentWillMount(){
      this.setState({images:[
        // {
        //   id:new ObjectID().toHexString(),
        //   link:"https://lh3.googleusercontent.com/_aBpW80cAI23Y2Mr-C2cv-wJ4FTz7u8ut9STvjJHYqtWFNJ07sJCYtU1Lh7IaYnp9yrD=s155",
        //   header:"Black Panther",
        //   image:"url(https://lh3.googleusercontent.com/_aBpW80cAI23Y2Mr-C2cv-wJ4FTz7u8ut9STvjJHYqtWFNJ07sJCYtU1Lh7IaYnp9yrD=s155)"
        // }
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
    let AddImgFormHeight;
    let AddImgForm = document.getElementsByClassName('AddImageForm')
    let favImgStyles;

    if(AddImgForm[0]===undefined){
    }else{
      AddImgFormHeight = AddImgForm.item(0).clientHeight;
    }

    if (this.state.images.length === 0){
      favImgStyles={
        marginBottom:AddImgFormHeight, 
        display :"none"
      }
    }else{
      favImgStyles={
        marginBottom:AddImgFormHeight, 
        display :"block"
      }
    }


    return (
      <div className="App">
        <div className="Title">
          <h2>Memorable Images</h2>
        </div>
        <div className="FavImages" style={favImgStyles} >
          <FavoriteImages images={this.state.images}/>
        </div>

        <div className="AddImageForm" ref="addImgForm">
          <AddImage addImage = {this.handleAddImage}/>
        </div>
      </div>
    );
  }
}

export default App;
