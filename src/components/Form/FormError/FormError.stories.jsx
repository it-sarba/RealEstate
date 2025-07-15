// src/components/FormError/FormError.stories.jsx
import React from "react";
import FormError from "./FormError";
import { fn } from 'storybook/test';

export default {
  title: "Components/FormError",
  component: FormError,
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

const Template = (args) => <FormError {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: "This field is required.",
};

export const LongMessage = Template.bind({});
LongMessage.args = {
  message: "Please enter a valid email address. This field cannot be left empty and must follow proper format.",
};

export const NoMessage = Template.bind({});
NoMessage.args = {
  message: "",
};
