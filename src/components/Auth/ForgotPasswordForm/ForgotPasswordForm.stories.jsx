import React from "react";
import { ForgotPasswordForm } from "./ForgotPasswordForm";
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: "Auth/ForgotPasswordForm",
  component: ForgotPasswordForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A form component that allows users to request a password reset link by entering their email address.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "2rem", backgroundColor: "#f9f9f9", borderRadius: "12px", maxWidth: "400px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    onReset: { action: "resetLinkSent" },
  },
};

const Template = (args) => <ForgotPasswordForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onReset: async (email) => {
    await new Promise((res) => setTimeout(res, 1500));
    alert(`Reset link sent to: ${email}`);
  },
};

export const LoadingState = Template.bind({});
LoadingState.args = {
  onReset: async () => {
    return new Promise((resolve) => setTimeout(resolve, 5000));
  },
};
LoadingState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByLabelText(/email/i), 'user@example.com');
  await userEvent.click(canvas.getByRole('button', { name: /send reset link/i }));
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  onReset: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    throw new Error("Email not found. Please try again.");
  },
};
ErrorState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByLabelText(/email/i), 'invalid@example.com');
  await userEvent.click(canvas.getByRole('button', { name: /send reset link/i }));
};

export const SuccessState = Template.bind({});
SuccessState.args = {
  onReset: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  },
};
SuccessState.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByLabelText(/email/i), 'success@example.com');
  await userEvent.click(canvas.getByRole('button', { name: /send reset link/i }));
};
