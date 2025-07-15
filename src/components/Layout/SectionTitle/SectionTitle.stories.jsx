import React from "react";
import SectionTitle from "./SectionTitle";
import { fn } from 'storybook/test';

export default {
  title: "Components/SectionTitle",
  component: SectionTitle,
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
  <SectionTitle title="Welcome" subtitle="This is the default section title." />
);

export const Centered = () => (
  <SectionTitle
    title="Centered Title"
    subtitle="Subtitle is also centered."
    align="center"
  />
);

export const Accent = () => (
  <SectionTitle
    title="Accent Variant"
    subtitle="This uses a bold blue color."
    variant="accent"
    align="left"
  />
);

export const MutedRight = () => (
  <SectionTitle
    title="Muted and Right"
    subtitle="Great for de-emphasized headings."
    variant="muted"
    align="right"
  />
);
