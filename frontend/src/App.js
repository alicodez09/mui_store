import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import AdminRoute from "./roles/AdminRoute";

const App = () => {
return (
<>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forget-password" element={<ForgetPassword />} />

      {/* admin routs */}
      <Route path="/dashboard" element={<AdminRoute />}>
      <Route path="admin-pannel" element={<AdminDashboard />} />
      <Route path="admin/create-category" element={<CreateCategory />} />
      <Route path="admin/create-product" element={<CreateProduct />} />
      <Route path="admin/users" element={<Users />} />
      </Route>
    </Routes>
  </BrowserRouter>
</>
);
};

export default App;