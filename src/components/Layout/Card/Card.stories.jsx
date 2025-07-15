import React from "react";
import Card from "./Card";
import { fn } from 'storybook/test';

export default {
  title: "Components/Card",
  component: Card,
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

const imageUrl = "https://picsum.photos/seed/carddemo/400/200";

export const Basic = () => (
  <Card
    title="Modern UI Card"
    content="This card has a clean layout, shadow, and spacing for a polished interface."
  />
);

export const WithImage = () => (
  <Card
    title="Card with Image"
    content="Perfect for showing a product, preview, or content tile."
    image={imageUrl}
    actions={
      <>
        <button className="btn">Details</button>
        <button className="btn secondary">Edit</button>
      </>
    }
  />
);

export const CustomStyled = () => (
  <Card
    title="Custom Style"
    content="Add custom styles using the `className` prop."
    image={imageUrl}
    className="custom-card"
  />
);
