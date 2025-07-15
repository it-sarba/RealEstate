import React, { useState } from "react";
import { OTPInput } from "./OTPInput";
import { fn } from 'storybook/test';

export default {
  title: "Auth/OTPInput",
  component: OTPInput,
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

export const Default = () => {
  const [otp, setOtp] = useState("");
  return (
    <div style={{ padding: "2rem" }}>
      <OTPInput length={6} onChange={setOtp} />
      <p style={{ marginTop: "1rem" }}>Entered OTP: {otp}</p>
    </div>
  );
};
