import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // for navigation
import { useAuth } from "../context/AuthContext";  // Importing the Auth context to set logged-in user


const Login = () => {
  const [email, setEmail] = useState("");  // State to store email input
  const [password, setPassword] = useState("");  // State to store password input
  const { login } = useAuth();  // Login function from context
  const navigate = useNavigate();  // Navigate function to go to another page

  const handleLogin = (e) => {
    e.preventDefault();  // Prevent page reload on form submission

    // This is a simplified login. You can enhance it with actual authentication logic.
    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));  // Store user data in localStorage
    login(userData);  // Set user in context

    navigate("/");  // Redirect to Products page after successful login
  };

  return (
    <div className="login-container">
      <h3>Login</h3>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update email on change
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Update password on change
          required
          autocomplete="current-password"
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>  {/* Link to Register page */}
      </p>
    </div>
  );
};

<p>
  Don't have an account? <a href="/register">Register</a>  {/* Link to Register page */}
</p>

export default Login;