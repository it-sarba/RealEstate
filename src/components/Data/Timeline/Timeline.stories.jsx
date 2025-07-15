import React from "react";
import { Timeline } from "./Timeline";
import { FaCheckCircle, FaRocket, FaBug } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "Components/Timeline",
  component: Timeline,
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

const sampleData = [
  {
    icon: <FaRocket color="#3b82f6" />,
    title: "Project Kickoff",
    description: "Initial meeting with team and stakeholders.",
    time: "2023-10-01",
  },
  {
    icon: <FaCheckCircle color="#10b981" />,
    title: "Milestone 1 Completed",
    description: "Core features implemented and tested.",
    time: "2023-11-15",
  },
  {
    icon: <FaBug color="#ef4444" />,
    title: "Bug Fix Round",
    description: "Addressed critical issues from testing.",
    time: "2023-12-05",
  },
];

export const Default = () => <Timeline items={sampleData} />;
