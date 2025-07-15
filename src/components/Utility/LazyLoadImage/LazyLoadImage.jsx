import React, { useEffect, useRef, useState } from "react";
import "./LazyLoadImage.css";

export const LazyLoadImage = ({
  src,
  alt = "",
  className = "",
  placeholder = null,
  style = {},
  ...rest
}) => {
  const imgRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(img);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(img);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={imgRef} className={`lazy-image-wrapper ${className}`} style={style}>
      {isVisible ? (
        <img src={src} alt={alt} className="lazy-image" {...rest} />
      ) : (
        placeholder || <div className="lazy-placeholder">Loading image...</div>
      )}
    </div>
  );
};
