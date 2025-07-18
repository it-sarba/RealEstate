import React, { useState } from "react";
import "./ForgotPasswordForm.css";

export const ForgotPasswordForm = ({ onReset }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      if (!email) throw new Error("Email is required.");
      await onReset?.(email);
      setStatus({ loading: false, error: "", success: "Reset link sent to your email." });
    } catch (err) {
      setStatus({ loading: false, error: err.message || "Something went wrong", success: "" });
    }
  };

  return (
    <form className="forgot-password-form" onSubmit={handleSubmit}>
      <h2>Forgot Password</h2>

      <label>Email</label>
      <input
        type="email"
        name="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      {status.error && <div className="error">{status.error}</div>}
      {status.success && <div className="success">{status.success}</div>}

      <button type="submit" className="reset-button" disabled={status.loading}>
        {status.loading ? "Sending..." : "Send Reset Link"}
      </button>
    </form>
  );
};
export default ForgotPasswordForm;