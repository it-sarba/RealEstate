import React from 'react';
import IconButton from './IconButton';
import { fn } from 'storybook/test';

// Example icon using Lucide (or any SVG)
const DummyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>
);

export default {
  title: 'Components/IconButton',
  component: IconButton,
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
  <IconButton icon={<DummyIcon />} label="Clock" />
);

export const Sizes = () => (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <IconButton icon={<DummyIcon />} label="Small button" size="small" />
    <IconButton icon={<DummyIcon />} label="Medium button" size="medium" />
    <IconButton icon={<DummyIcon />} label="Large button" size="large" />
  </div>
);
