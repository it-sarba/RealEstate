import React, { Suspense } from "react";

// You can replace this with your own Spinner/Loader
const DefaultFallback = () => (
  <div style={{ padding: "2rem", textAlign: "center" }}>
    <span>Loading...</span>
  </div>
);

export const SuspenseWrapper = ({ children, fallback = <DefaultFallback /> }) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};
