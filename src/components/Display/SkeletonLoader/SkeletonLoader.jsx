import React from "react";
import "./SkeletonLoader.css";

 export const SkeletonLoader = ({
  width = "100%",
  height = "16px",
  borderRadius = "4px",
  count = 1,
  variant = "rect", // "rect" | "circle" | "text"
}) => {
  const skeletons = Array.from({ length: count });

  return (
    <>
      {skeletons.map((_, i) => (
        <div
          key={i}
          className={`skeleton-loader skeleton-${variant}`}
          style={{ width, height, borderRadius }}
        />
      ))}
    </>
  );
};
export default SkeletonLoader;