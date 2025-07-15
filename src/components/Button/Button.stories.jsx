import React from 'react';
import { fn } from 'storybook/test';
import Button from './Button';
import { FaBeer, FaArrowRight } from 'react-icons/fa';

export default {
  title: 'Components/Button',
  component: Button,
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


const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary',
  variant: 'primary',
};

export const WithLeftIcon = Template.bind({});
WithLeftIcon.args = {
  label: 'Cheers',
  icon: <FaBeer />,
  iconPosition: 'left',
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  label: 'Next',
  icon: <FaArrowRight />,
  iconPosition: 'right',
};

export const Loading = Template.bind({});
Loading.args = {
  label: 'Loading...',
  loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
};

export const AllOptions = Template.bind({});
AllOptions.args = {
  label: 'Submit',
  variant: 'outline',
  size: 'large',
  icon: <FaArrowRight />,
  iconPosition: 'right',
  loading: false,
  disabled: false,
};
