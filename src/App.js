import logo from "./logo.svg";
import "./App.css";
import HeaderFunc from "./components/HeaderFunc";
import HeaderClass from "./components/HeaderClass";
import BaiTapLayout from "./components/BaiTapLayout/BaiTapLayout";
import BTHeader from "./components/BaiTapLayout/BTHeader";
import Slider from "./components/BaiTapLayout/Slider";
import ProductList from "./components/BaiTapLayout/ProductList";
import BTFoodter from "./components/BaiTapLayout/BTFoodter";
import DataBinding from "./DataBinding/DataBinding";
import HandleEvent from "./components/HandleEvent/HandleEvent";
import DemoState from "./components/StateReact/DemoState";
import BaiTapChonXe from "./components/BaiTapChonXe.js/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapRenderMap from "./RenderWithMap/BaiTapRenderMap";
import DemoProps from "./Props/DemoProps";
import ThongTinSinhVien from "./Props/ThongTinSinhVien";


function App() {
  return (
    <div className="App container">
      {/* <BaiTapLayout />
      <BTHeader />
      <Slider />
      <ProductList/>
      <BTFoodter/>
      <DataBinding/> */}
      {/* <HandleEvent/>
      <DemoState/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap/> */}
      {/* <BaiTapRenderMap/> */}
      {/* <ThongTinSinhVien/> */}
      <DemoProps/>
     

    
    </div>
  );
}

export default App;
