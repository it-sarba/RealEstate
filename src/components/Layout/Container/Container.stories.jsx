import React from "react";
import Container from "./Container";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Container",
  component: Container,
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

export const Default = () => (
  <Container>
    <div style={{ backgroundColor: "#e3f2fd", padding: "2rem", textAlign: "center" }}>
      This is a default container with 1200px max width and 1rem horizontal padding.
    </div>
  </Container>
);

export const CustomMaxWidth = () => (
  <Container maxWidth="800px">
    <div style={{ backgroundColor: "#ffe0b2", padding: "2rem", textAlign: "center" }}>
      Custom container with 800px max width.
    </div>
  </Container>
);

export const FluidPadding = () => (
  <Container padding="2rem">
    <div style={{ backgroundColor: "#dcedc8", padding: "2rem", textAlign: "center" }}>
      Container with 2rem padding on left and right.
    </div>
  </Container>
);
