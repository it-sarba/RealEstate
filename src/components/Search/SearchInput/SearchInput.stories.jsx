import React, { useState } from "react";
import { SearchInput } from "./SearchInput";
import { fn } from 'storybook/test';

export default {
  title: "Search/SearchInput",
  component: SearchInput,
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
  const [query, setQuery] = useState("");

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <SearchInput
        value={query}
        onChange={setQuery}
        onClear={() => setQuery("")}
        placeholder="Search items..."
      />
      <p style={{ marginTop: "1rem" }}>Query: {query}</p>
    </div>
  );
};
