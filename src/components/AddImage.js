import React, { Component } from 'react';
import ObjectID from "bson-objectid";

class AddImage extends Component {

    constructor(){
        super();

        this.state = {
            image:{}
        }
    }

    handleSubmit = (e) =>{
  
       if(!this.refs.image.value.startsWith('http') || this.refs.header.value === '') return e.preventDefault();

       this.setState({
           image:{
                id:new ObjectID().toHexString(),
                link:this.refs.image.value,
                header:this.refs.header.value,
                image:`url(${this.refs.image.value})`
            }
       }, ()=>{
            this.props.addImage(this.state.image)
       });

       e.preventDefault();
    }

  render() {
    return (
      <div className="Card">
        <form onSubmit={this.handleSubmit}>
            <div className="FormControl">
                <input type="text" ref="header" placeholder="Add a heading"/>
            </div>
            <div className="FormControl">
                <input type="text" ref="image" placeholder="Add a image link"/>
            </div>
            <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default AddImage;