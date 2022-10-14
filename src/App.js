
import './App.css';
import AddSanPham from './AddSanPham/AddSanPham';
import ListSanPham from './ListSanPham/ListSanPham';
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';

 
function App() {
 //yarn add axios
 //https://deo.shopeemobile.com/shopee/stm-sg-live/shopee-pcmall-live-sg/vi.col60.1655981629.json
 // get
  //useEffect(() => {
  //   axios.get("https://deo.shopeemobile.com/shopee/stm-sg-live/webfe-rp-assets/7432/asset-VN-live.29ddea45d1c02d1727fdd52c44410a5b.json").then(
  //     res=>{
  //       console.log(res)
  //     }
  //   ).catch(err=>{
  //     console.log(err)
  //   });
   
  // }, []);
  return (
    <Routes>
      <Route path="/add-san-pham" element={<AddSanPham />} />
      <Route path="/list-san-pham" element={<ListSanPham />} />
    </Routes>
  );
}

export default App;
