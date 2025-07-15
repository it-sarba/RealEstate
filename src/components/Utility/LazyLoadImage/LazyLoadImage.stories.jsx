import React from "react";
import { LazyLoadImage } from "./LazyLoadImage";
import { fn } from 'storybook/test';

export default {
  title: "Utilities/LazyLoadImage",
  component: LazyLoadImage,
   parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    onClick: fn(),
  },
};

const imageUrl =
  "https://images.unsplash.com/photo-1606788075760-9c71d5ed4a90?auto=format&fit=crop&w=600&q=80";

export const Default = () => (
  <div style={{ height: "1200px", padding: "2rem" }}>
    <p>Scroll down to load the image...</p>
    <div style={{ marginTop: "1000px" }}>
      <LazyLoadImage src={imageUrl} alt="Lazy Loaded Example" style={{ width: "300px" }} />
    </div>
  </div>
);

export const WithCustomPlaceholder = () => (
  <div style={{ marginTop: "1000px" }}>
    <LazyLoadImage
      src={imageUrl}
      alt="With placeholder"
      placeholder={
        <div
          style={{
            width: "300px",
            height: "200px",
            backgroundColor: "#e5e7eb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#6b7280",
          }}
        >
          Placeholder...
        </div>
      }
      style={{ width: "300px", height: "200px" }}
    />
  </div>
);
