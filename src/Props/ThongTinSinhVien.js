import React, { Component } from "react";

export default class ThongTinSinhVien extends Component {

  // this.props là thuộc tính có sắn của react Component
  // this.state != this.props
  // giống nhau: dùng để binding dữ liệu ra giao diện và đều là thuộc tính có sẵn của react lass component
  // Khác nhau:
  // this.state quản lý các trạng thái phổ biển làm thay đổi giao diện
  // this.props nhận giá trị từ component cha truyền vào
  // this.state (=> gọi phương thức setstate ) có thể gán lại giá trị đc nhưng this.props thì không cho phép gán lại giá trị
  render() {
    // let {ten,tuoi,ma} = this.props.sinhVien;
    let {sinhVien} = this.props;
    return (
      <div style = {{backgroundColor:this.props.bgColor}} className="card text-white bg-dark">
        <img className="card-img-top" src="http://picsum.photos/100/180" alt ="abc" />
        <div className="card-body">
          <h4 className="card-title">{sinhVien?.ten}</h4>
          <p className="card-text">{sinhVien?.tuoi}</p>
        </div>
      </div>
    );
  }
}
