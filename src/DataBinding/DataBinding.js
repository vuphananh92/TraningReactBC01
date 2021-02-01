import React, { Component } from "react";
import style from './DataBinding.module.css'

//class Component
export default class DataBinding extends Component {
    sinhVien = {
        id:1,
        ten:'Nguyễn Văn A',
    }
    renderSinhVien = () =>{
        // Binding phương thức thì phương thức đó phải trả về nội dung là 1 số hoặc chuỗi hoặc 1 thẻ component bao phủ
        return <div>
            id: {this.sinhVien.id} - ten: {this.sinhVien.ten}
        </div>

        
    }


  render() {
    let title = "hello cybersoft";
    let sanPham = {
      ten: "Iphone 5s",
      gia: 1000,
      hinhAnh: 'https://picsum.photos/200/200'
    };
    return (
      <div>
          <p className={`${style.textGreen} ${style['txt-light']}`}>abc</p>
          <h1>Họ và tên: {this.sinhVien.ten}</h1>

          <p style={{backgroundColor: 'red', color:'white'}}>aaaaaaaaaaaaaa</p>


        <p id="title">
          {title}
        </p>
        <div className="card text-white bg-primary w-25">
          <img className="card-img-top" src={sanPham.hinhAnh} alt />
          <div className="card-body">
            <h4 className="card-title">{sanPham.ten}</h4>
            <p className="card-text">{sanPham.gia}</p>
          </div>
        </div>
      </div>
    );
  }
}
