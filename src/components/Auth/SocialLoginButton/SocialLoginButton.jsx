import React from "react";
import "./SocialLoginButton.css";

const icons = {
  google: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
      alt="Google"
    />
  ),
  facebook: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
      alt="Facebook"
    />
  ),
  github: (
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub"
    />
  ),
};

export const SocialLoginButton = ({
  provider = "google",
  label = "Continue with Google",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`social-button ${provider}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="icon">{icons[provider]}</span>
      <span className="label">{label}</span>
    </button>
  );
};
export default SocialLoginButton;