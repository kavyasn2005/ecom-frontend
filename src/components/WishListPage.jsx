import React, { useEffect, useState } from "react";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Wishlist</h1>
      {wishlist.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        wishlist.map((item, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <img src={item.image} alt={item.title} style={{ width: "100px" }} />
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistPage;
