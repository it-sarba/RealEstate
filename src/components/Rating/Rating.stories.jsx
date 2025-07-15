import React, { useState } from "react";
import Rating from "./Rating";
import { fn } from 'storybook/test';

export default {
  title: "Components/Rating",
  component: Rating,
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

export const Default = () => {
  const [rating, setRating] = useState(4);

  return (
    <div style={{ padding: "20px", background: "#f9fafb", borderRadius: "10px" }}>
      <h3 style={{ marginBottom: "10px" }}>How was your experience?</h3>
      <Rating value={rating} onChange={setRating} size={40} />
      <p style={{ marginTop: "12px", fontSize: "16px" }}>
        You rated: <strong>{rating}</strong> star{rating > 1 && "s"}
      </p>
    </div>
  );
};
