import React, { useState } from "react";
import { TagFilterBar } from "./TagFilterBar";
import { fn } from 'storybook/test';

export default {
  title: "Search/TagFilterBar",
  component: TagFilterBar,
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
  const [activeTags, setActiveTags] = useState([]);

  const tags = ["Design", "Development", "Marketing", "Sales", "HR", "Product"];

  return (
    <div style={{ maxWidth: 500, padding: "1rem" }}>
      <TagFilterBar
        tags={tags}
        multiple={true}
        selected={[]}
        onChange={(tags) => setActiveTags(tags)}
      />
      <p style={{ marginTop: "1rem" }}>
        Selected Tags: {activeTags.length ? activeTags.join(", ") : "None"}
      </p>
    </div>
  );
};
