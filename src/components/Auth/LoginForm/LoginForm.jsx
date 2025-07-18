import React, { useState } from "react";
import "./LoginForm.css";
 
export const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!formData.email || !formData.password) {
        throw new Error("Both fields are required.");
      }

      // Replace this with actual login logic
      await onLogin?.(formData);
    } catch (err) {
      setError(err.message || "Login failed.");
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Password</label>
      <div className="password-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button
          type="button"
          className="toggle-visibility"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  );
};
export default LoginForm;