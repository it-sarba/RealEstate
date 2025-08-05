import React, { useState } from "react";
import "./ForgotPasswordForm.css";

export const ForgotPasswordForm = ({ onReset }) => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      if (!email) throw new Error("Email is required.");
      if (!validateEmail(email)) throw new Error("Please enter a valid email address.");
      await onReset?.(email);
      setStatus({
        loading: false,
        error: "",
        success: "Reset link sent to your email. Please check your inbox.",
      });
      setEmail("");
    } catch (err) {
      setStatus({
        loading: false,
        error: err.message || "Something went wrong",
        success: "",
      });
    }
  };

  return (
    <div className="forgot-password-form">
      <h2>Reset Your Password</h2>
      <p style={{ textAlign: "center", fontSize: "0.875rem", color: "#666" }}>
        Enter your email address and we'll send you a link to reset your password.
      </p>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            aria-describedby="email-error email-success"
          />
        </div>
        {status.error && (
          <p className="error" id="email-error">
            {status.error}
          </p>
        )}
        {status.success && (
          <p className="success" id="email-success">
            {status.success}
          </p>
        )}
        <button
          type="submit"
          className="reset-button"
          disabled={status.loading}
        >
          {status.loading ? (
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg
                className="animate-spin"
                style={{ marginRight: "0.75rem", height: "1.25rem", width: "1.25rem" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Reset Link"
          )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;