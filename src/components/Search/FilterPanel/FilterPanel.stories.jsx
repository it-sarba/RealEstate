import React from "react";
import { FilterPanel } from "./FilterPanel";
import { fn } from 'storybook/test';

export default {
  title: "Search/FilterPanel",
  component: FilterPanel,
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

const filters = [
  {
    name: "category",
    label: "Category",
    options: [
      { label: "Books", value: "books" },
      { label: "Electronics", value: "electronics" },
      { label: "Clothing", value: "clothing" },
    ],
  },
  {
    name: "brand",
    label: "Brand",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Samsung", value: "samsung" },
      { label: "Sony", value: "sony" },
    ],
  },
];

export const Default = () => {
  const handleFilterChange = (selectedFilters) => {
    console.log("Selected Filters:", selectedFilters);
  };

  return <FilterPanel filters={filters} onChange={handleFilterChange} />;
};
