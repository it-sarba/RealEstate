import React from "react";
import Grid from "./Grid";
import { fn } from 'storybook/test';

export default {
  title: "Layout/Grid",
  component: Grid,
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

export const DefaultGrid = () => (
  <Grid gap="16px">
    <Grid.Row>
      <Grid.Col span={4}>Column 1</Grid.Col>
      <Grid.Col span={4}>Column 2</Grid.Col>
      <Grid.Col span={4}>Column 3</Grid.Col>
    </Grid.Row>
  </Grid>
);

export const WithOffset = () => (
  <Grid gap="20px">
    <Grid.Row>
      <Grid.Col span={4}>Column 1</Grid.Col>
      <Grid.Col span={4} offset={4}>
        Offset Column
      </Grid.Col>
    </Grid.Row>
  </Grid>
);

export const MixedSpans = () => (
  <Grid gap="12px">
    <Grid.Row>
      <Grid.Col span={3}>3</Grid.Col>
      <Grid.Col span={6}>6</Grid.Col>
      <Grid.Col span={3}>3</Grid.Col>
    </Grid.Row>
  </Grid>
);
