import React, { useState } from "react";
import { Notification } from "./Notification";
import { fn } from 'storybook/test';

export default {
  title: "Components/Notification",
  component: Notification,
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

const Template = (args) => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(true)}>Show Notification</button>
      {show && (
        <Notification
          {...args}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};

export const Info = Template.bind({});
Info.args = {
  title: "Info",
  message: "This is an informational notification.",
  type: "info",
};

export const Success = Template.bind({});
Success.args = {
  title: "Success!",
  message: "Your file was uploaded successfully.",
  type: "success",
};

export const Error = Template.bind({});
Error.args = {
  title: "Error",
  message: "Something went wrong.",
  type: "error",
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: "New update available",
  message: "Click below to install now.",
  type: "info",
  actions: (
    <>
      <button className="notification-btn">Install</button>
      <button className="notification-btn">Later</button>
    </>
  ),
};
