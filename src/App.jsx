import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Routes/Home/Home";
import Login from "./components/Routes/Login/Login";
import { Purchases } from "./components/Routes/Purchases/Purchases";
import { ProductDetail } from "./components/Routes/ProductDetail/ProductDetail";
import { Header } from "./components/Shared/Header/Header";
import { SignUp } from "./components/Routes/SignUp/SignUp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllProducts } from "./store/slices/products.slice";

function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
