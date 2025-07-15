import React from "react";
import { SkeletonLoader } from "./SkeletonLoader";
import { fn } from 'storybook/test';

export default {
  title: "Components/SkeletonLoader",
  component: SkeletonLoader,
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

export const Default = () => <SkeletonLoader width="100%" />;

export const Text = () => (
  <>
    <SkeletonLoader width="70%" variant="text" />
    <SkeletonLoader width="90%" variant="text" />
    <SkeletonLoader width="60%" variant="text" />
  </>
);

export const Circle = () => (
  <SkeletonLoader width="40px" height="40px" variant="circle" />
);

export const Rectangles = () => (
  <SkeletonLoader width="100%" height="150px" variant="rect" />
);

export const Multiple = () => (
  <SkeletonLoader width="100%" height="16px" count={4} />
);
