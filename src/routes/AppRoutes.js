import { Routes, Route } from "react-router-dom";
import App from "../App";
import ComingSoon from "../components/ComingSoon";
import HomePage from "../components/homepage/HomePage";
import ProductDetail from "../components/singleProductPage/SingleProduct";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/signin" element={<ComingSoon />} />
      <Route path="/signup" element={<ComingSoon />} />
      <Route path="/cart" element={<ComingSoon />} />
    </Routes>
  );
};

export default AppRoutes;
