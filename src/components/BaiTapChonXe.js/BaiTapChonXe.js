import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgSrc: "./img/red-car.jpg",
  };

  changeColor = (color) => {
      this.setState ({
          imgSrc: `./img/${color}-car.jpg`
      })
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <img className="w-100" src={this.state.imgSrc}></img>
        </div>

        <div className="col-6">
          <div className="row">
            <div className="col-4">
              <button onClick = {(event)=>{this.changeColor('red')}}>Red car</button>
            </div>
            <div className="col-4">
            <button onClick = {(event)=>{this.changeColor('silver')}}>Silver car</button>
            </div>
            <div className="col-4">
            <button onClick = {(event)=>{this.changeColor('steel')}}>Steel car</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
