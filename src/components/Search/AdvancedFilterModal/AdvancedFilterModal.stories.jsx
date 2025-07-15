import React, { useState } from "react";
import { AdvancedFilterModal } from "./AdvancedFilterModal";
import { fn } from 'storybook/test';

export default {
  title: "Search/AdvancedFilterModal",
  component: AdvancedFilterModal,
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
    name: "status",
    label: "Status",
    type: "checkbox",
    options: [
      { label: "Active", value: "active" },
      { label: "Pending", value: "pending" },
      { label: "Archived", value: "archived" },
    ],
  },
  {
    name: "sort",
    label: "Sort Order",
    type: "radio",
    options: [
      { label: "Newest", value: "newest" },
      { label: "Oldest", value: "oldest" },
    ],
  },
  {
    name: "keyword",
    label: "Keyword",
    type: "text",
    placeholder: "Search term...",
  },
];

export const Default = () => {
  const [open, setOpen] = useState(false);
  const [filtersResult, setFiltersResult] = useState(null);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Advanced Filter Modal</button>

      <AdvancedFilterModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onApply={(values) => {
          setFiltersResult(values);
          setOpen(false);
        }}
        filters={filters}
      />

      {filtersResult && (
        <div style={{ marginTop: "1rem" }}>
          <strong>Selected Filters:</strong>
          <pre>{JSON.stringify(filtersResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
