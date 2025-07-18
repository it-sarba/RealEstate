import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    // Optional: Log to external service
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    const { hasError, error } = this.state;
    const { fallback, children } = this.props;

    if (hasError) {
      if (fallback) {
        return typeof fallback === "function"
          ? fallback({ error, reset: this.handleReset })
          : fallback;
      }

      // Default fallback
      return (
        <div style={{ padding: "2rem", color: "#b91c1c", textAlign: "center" }}>
          <h2>Something went wrong.</h2>
          <pre>{error?.message}</pre>
          <button onClick={this.handleReset} style={{ marginTop: "1rem" }}>
            Try Again
          </button>
        </div>
      );
    }

    return children;
  }
}
export default ErrorBoundary;