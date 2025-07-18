import React from "react";
import { default as ActivityFeed } from "./ActivityFeed";
import { FaUserPlus, FaCommentDots } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "User/ActivityFeed",
  component: ActivityFeed,
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

const sampleActivities = [
  {
    avatar: "https://i.pravatar.cc/100?img=12",
    text: "Jane Doe joined the platform.",
    time: "2 minutes ago",
    icon: <FaUserPlus />,
  },
  {
    avatar: "https://i.pravatar.cc/100?img=7",
    text: "John Smith commented on your post.",
    time: "10 minutes ago",
    icon: <FaCommentDots />,
  },
  {
    avatar: "https://i.pravatar.cc/100?img=4",
    text: "Alice Cooper uploaded a file.",
    time: "1 hour ago",
  },
];

export const Default = () => <ActivityFeed activities={sampleActivities} />;
