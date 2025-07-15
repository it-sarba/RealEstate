import React from "react";
import { EmptyState } from "./EmptyState";
import { FaInbox } from "react-icons/fa";
import { fn } from 'storybook/test';

export default {
  title: "Components/EmptyState",
  component: EmptyState,
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

export const Basic = () => <EmptyState icon={<FaInbox />} />;

export const WithCustomText = () => (
  <EmptyState
    icon={<FaInbox />}
    title="No Messages"
    description="You're all caught up! Check back later."
  />
);

export const WithAction = () => (
  <EmptyState
    icon={<FaInbox />}
    title="No Results"
    description="Try adjusting your search or filter."
    action={<button onClick={() => alert("Reset Filters")}>Reset Filters</button>}
  />
);
