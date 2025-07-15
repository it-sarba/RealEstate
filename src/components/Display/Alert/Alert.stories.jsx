import React, { useState } from "react";
import { Alert } from "./Alert";
import { fn } from 'storybook/test';

export default {
  title: "Components/Alert",
  component: Alert,
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

export const Info = () => (
  <Alert
    type="info"
    message="Information"
    description="This is an info alert."
  />
);

export const Success = () => (
  <Alert
    type="success"
    message="Success!"
    description="Your action was successful."
  />
);

export const Warning = () => (
  <Alert
    type="warning"
    message="Warning!"
    description="Be careful with this action."
  />
);

export const Error = () => (
  <Alert
    type="error"
    message="Error"
    description="Something went wrong."
  />
);

export const Closable = () => {
  const [visible, setVisible] = useState(true);
  return (
    visible && (
      <Alert
        type="info"
        message="Dismiss me"
        description="This alert can be closed."
        onClose={() => setVisible(false)}
      />
    )
  );
};
