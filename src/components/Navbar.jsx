import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Products = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogin = () => navigate("/login");
  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      {user ? (
        <>
          <span>Hello, {user.username}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      
      {/* Your product list goes here */}
    </div>
  );
};