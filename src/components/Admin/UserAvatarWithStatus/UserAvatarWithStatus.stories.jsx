import React from "react";
import { UserAvatarWithStatus } from "./UserAvatarWithStatus";
import { fn } from 'storybook/test';

export default {
  title: "User/UserAvatarWithStatus",
  component: UserAvatarWithStatus,
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

export const WithImage = () => (
  <UserAvatarWithStatus
    name="Jane Doe"
    src="https://i.pravatar.cc/100?img=5"
    status="online"
  />
);

export const WithoutImage = () => (
  <UserAvatarWithStatus name="John Smith" status="away" />
);

export const CustomSize = () => (
  <UserAvatarWithStatus
    name="Alex Johnson"
    src="https://i.pravatar.cc/100?img=7"
    size={64}
    status="busy"
  />
);
