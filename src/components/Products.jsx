import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // ✅ Import useAuth
import LogoutButton from "./LogoutButton";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { user } = useAuth(); // ✅ Get user from context

  // Fetch products from the server
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");
        const data = await response.json();
        setProducts(data);
        console.log("Fetched products:", data); // ✅ Debug
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {/* ✅ Render Login or Logout button based on user status */}
      <div className="auth-button">
          <LogoutButton />
      </div>

      <h3>Welcome to Products</h3>

      <div className="grid-container">
        {products.map((product, index) => (
          <div
            key={product.id || product._id || index}
            className="product-card"
          >
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <button
              onClick={() => navigate(`/product/${product.id || product._id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
