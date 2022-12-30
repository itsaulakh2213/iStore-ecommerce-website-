import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/Pages/HomePage";
import Login from "./Components/Pages/Login";
import Store from "./Components/Pages/Store";
import About from "./Components/Pages/About";
import Profile from "./Components/Pages/Profile";
import ErrorPage from "./Components/Pages/ErrorPage";
import DeshBoard from "./Components/Admin/DeshBoard";
import CreateProduct from "./Components/Admin/CreateProduct";
import EditProduct from "./Components/Admin/EditProduct";
import Product from "./Components/Pages/Product";
import Register from "./Components/Pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />

        <Route path="/card" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/admin/home" element={<DeshBoard />} />
        <Route path="/create-product" element={<CreateProduct/>} />
        <Route path="/allProduct" element={<EditProduct/>} />
        <Route path="/productDetails" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
