import React, { useState } from "react";
import { SortDropdown } from "./SortDropdown";
import { fn } from 'storybook/test';

export default {
  title: "Search/SortDropdown",
  component: SortDropdown,
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
  const [sort, setSort] = useState("relevance");

  const options = [
    { label: "Relevance", value: "relevance" },
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
  ];

  return (
    <div style={{ width: "250px", padding: "1rem" }}>
      <SortDropdown
        options={options}
        value={sort}
        onChange={setSort}
        label="Sort Results"
      />
      <p style={{ marginTop: "1rem" }}>Selected Sort: {sort}</p>
    </div>
  );
};
