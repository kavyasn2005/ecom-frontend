import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetailsPage.css"

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [wishlistMessage, setWishlistMessage] = useState(""); // 👈 New state


  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch product details");
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  const handleAddToWishlist = () => {
    // You could also save to backend/localStorage here
    setWishlistMessage("✅ Added to wishlist successfully!");
  };


  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div className="details-container">
      <img
      src={product.image} className="details-image" />
      <div className="details-info">
      <h1 classname="product-name"></h1>
      <p className="details-id"><strong>ID:</strong> {product.id || product._id}</p>
      <p className="details-title"><strong>Name:</strong> { product.title}</p>
      <p className="details-price"><strong>Price:</strong> ${product.price}</p>
      <p className="details-description"><strong>Description:</strong> {product.description}</p>

      <div className="details-actions">
          <button className="btn btn-wishlist" onClick={() => navigate("/wishlist")}>Add to Wishlist</button>
          <button className="btn btn-cart " onClick={() => alert("Proceeding to buy now...")}>Buy Now</button>
          {/* Show message after adding to wishlist */}
        </div>

        {/* Show message after adding to wishlist */}
        {wishlistMessage && <p style={{ color: "green", marginTop: "1rem" }}>{wishlistMessage}</p>}
    </div>
    </div>
  );
};

export default ProductDetailsPage;
