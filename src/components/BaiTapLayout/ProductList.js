import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <div className="container-fluild bg-dark">
        
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          <div className="col-3">
            <Product />
          </div>
          <div className="col-3">
            <Product />
          </div>
          <div className="col-3">
            <Product />
          </div>
          <div className="col-3">
            <Product />
          </div>
        </div>
        
      </div>
    );
  }
}
