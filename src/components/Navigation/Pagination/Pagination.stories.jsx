import React, { useState } from "react";
import { Pagination } from "./Pagination";
import { fn } from 'storybook/test';

export default {
  title: "Components/Pagination",
  component: Pagination,
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
  const [page, setPage] = useState(args.currentPage || 1);
  return <Pagination {...args} currentPage={page} onPageChange={setPage} />;
};

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
};
