import React, { useState } from "react";
import "./RegisterForm.css";

export const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await onRegister?.(formData);
    } catch (err) {
      setError(err.message || "Registration failed.");
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <label>Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="Jane Doe"
        value={formData.name}
        onChange={handleChange}
        required
      />

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
          placeholder="Create a password"
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

      <label>Confirm Password</label>
      <input
        type={showPassword ? "text" : "password"}
        name="confirmPassword"
        placeholder="Confirm your password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      {error && <div className="error">{error}</div>}

      <button type="submit" className="register-button">
        Register
      </button>
    </form>
  );
};
export default RegisterForm;