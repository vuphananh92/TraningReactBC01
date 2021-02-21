import React, { Component } from "react";
import ThongTinSinhVien from "./ThongTinSinhVien";

export default class demoProps extends Component {
  mangSinhVien = [
    { ma: "sv01", ten: "Khai", tuoi: 18 },
    { ma: "sv02", ten: "Si", tuoi: 22 },
    { ma: "sv03", ten: "phu", tuoi: 25 },
  ];

  renderSinhVien = () => {
    const result = this.mangSinhVien.map((sv, index) => {
      return <div className="col-4" key={index}>
        <ThongTinSinhVien sinhVien={sv} />
      </div>;
    });
    return result;
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center display-4">Thông tin sinh viên</h3>
        <div className="row">
          {/* <div className="col-4">
            <ThongTinSinhVien sinhVien={this.mangSinhVien[0]} />
          </div>
          <div className="col-4">
            <ThongTinSinhVien sinhVien={this.mangSinhVien[1]} />
          </div>
          <div className="col-4">
            <ThongTinSinhVien bgColor="red" />
          </div> */}
          {this.renderSinhVien()}
        </div>
      </div>
    );
  }
}
