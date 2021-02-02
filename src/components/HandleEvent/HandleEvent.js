import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("hello BC 01");
  };

  showMessage = (name) => {
      alert("hello" + name);

  }


  render() {
    return (
        // cách 1 truyền callback trực tiếp 
      <div className="container">
        <button className="btn btn-success " onClick={this.handleClick}>
          click me
        </button>

        <button className="btn btn-success" onClick={this.showMessage.bind(this,' Sĩ ')}>
          showMessage
        </button>
        
        {/* cách 2 truyền hàm nặc danh */}
        <button onClick = {(event)=>{
            this.showMessage (' Phú ')

        }}>show mess</button>
        
      </div>

      
    );
  }
}
