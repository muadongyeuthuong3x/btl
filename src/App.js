
import './App.css';
import AddSanPham from './AddSanPham/AddSanPham';
import ListSanPham from './ListSanPham/ListSanPham';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Routes>
      <Route path="/add-san-pham" element={<AddSanPham />} />
      <Route path="/list-san-pham" element={<ListSanPham />} />
    </Routes>
  );
}

export default App;
