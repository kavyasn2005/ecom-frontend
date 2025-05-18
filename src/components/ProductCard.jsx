import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ id, title, description, price, thumbnail, rating }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Navigating to /product/" + id); // ✅ Debugging
    navigate(`/product/${id}`);
  };

  return (
    <div onClick={handleClick} style={styles.card}>
      <img src={thumbnail} alt={title} style={styles.image} />
      <h3>{title}</h3>
      <p>{description.slice(0, 80)}...</p>
      <p><strong>${price}</strong></p>
      <p>⭐ {rating?.rate || 0} ({rating?.count || 0})</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "1rem",
    cursor: "pointer",
    backgroundColor: "#cBD6E2",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "contain",
    marginBottom: "1rem",
  },
};

export default ProductCard;