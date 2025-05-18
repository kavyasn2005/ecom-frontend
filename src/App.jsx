// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Register from "./components/Register";
import Products from "./components/Products";
import Login from "./components/Login";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import WishListPage from "./components/WishListPage";

// A Protected Route Component to Redirect Unauthenticated Users
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();  // Using Auth Context to check if user is logged in

  if (!user) {
    return <Navigate to="/login" />; // Redirect to Login if not authenticated
  }

  return children; // Render the protected route if user is logged in
};

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:id" element={<ProductDetailsPage />} />
            <Route path="/wishlist" element={<WishListPage />} />

            <Route path="
/products" element={<Products />} />
        
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Products />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product/:id"
              element={
                <ProtectedRoute>
                  <ProductDetailsPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;