import React from "react";
import Flex from "./Flex";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Flex",
  component: Flex,
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

export const Row = () => (
  <Flex gap="16px" justify="space-between" align="center">
    <Flex.Item>Item 1</Flex.Item>
    <Flex.Item>Item 2</Flex.Item>
    <Flex.Item>Item 3</Flex.Item>
  </Flex>
);

export const Column = () => (
  <Flex direction="column" gap="12px">
    <Flex.Item>Item A</Flex.Item>
    <Flex.Item>Item B</Flex.Item>
    <Flex.Item>Item C</Flex.Item>
  </Flex>
);

export const Wrap = () => (
  <Flex gap="10px" wrap="wrap">
    {[...Array(8)].map((_, i) => (
      <Flex.Item key={i} basis="150px">
        Box {i + 1}
      </Flex.Item>
    ))}
  </Flex>
);
