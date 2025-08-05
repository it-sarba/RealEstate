import React from "react";
import { LoginForm } from "./LoginForm";
import { within, userEvent } from "@storybook/testing-library";

export default {
  title: "Auth/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      autodocs: true,
      description: {
        component: `
The **LoginForm** is a reusable authentication component with email and password fields. 
It includes client-side validation, a password visibility toggle, and loading state feedback.

### Features
- Input validation
- Show/hide password
- Customizable login logic via \`onLogin\` prop
- Styled with a responsive, modern layout

### Usage
Use this component as part of an authentication flow or modal.

\`\`\`jsx
<LoginForm onLogin={(data) => console.log(data)} />
\`\`\`
      `,
      },
      source: {
        type: "code",
      },
    },
  },
  argTypes: {
    onLogin: {
      description: "Callback function triggered on successful login form submit.",
      control: false,
      action: "loginAttempted",
    },
  },
};

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  onLogin: async ({ email, password }) => {
    await new Promise((res) => setTimeout(res, 500));
    alert(`Email: ${email}\nPassword: ${password}`);
  },
};
Default.parameters = {
  docs: {
    description: {
      story: "Basic usage of the LoginForm with simulated `onLogin` behavior.",
    },
  },
};

export const ValidationError = Template.bind({});
ValidationError.args = {
  onLogin: async () => {
    throw new Error("Both fields are required.");
  },
};
ValidationError.parameters = {
  docs: {
    description: {
      story: "Displays a validation error when fields are missing or incorrect.",
    },
  },
};
