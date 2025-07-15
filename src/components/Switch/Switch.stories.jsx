import React, { useState } from "react";
import Switch from "./Switch";
import { fn } from 'storybook/test';

export default {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: 'centered',
  
  },
  tags: ['autodocs'],
 argTypes: {
    backgroundColor: { control: 'color' },
     disabled: { control: "boolean" },
    label: { control: "text" },

  },
  args: {
    onClick: fn(),
  },
 
};

export const Default = (args) => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      {...args}
      checked={enabled}
      onChange={() => setEnabled(!enabled)}
    />
  );
};

Default.args = {
  label: "Dark Mode",
  disabled: false,
};
