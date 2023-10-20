import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SuccessPayment from './pages/SuccessPayment';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state=>state.user.currentUser);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos/:category" element={<ProductList/>} />
        <Route path="/producto/:id" element={<Product/>} />
        <Route path="/carrito" element={<Cart/>} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/registro" element={<Register/>} />
        <Route path="/success" element={<SuccessPayment/>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;