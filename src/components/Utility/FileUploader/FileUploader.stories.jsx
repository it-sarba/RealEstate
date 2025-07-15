import React from "react";
import { FileUploader } from "./FileUploader";
import { fn } from 'storybook/test';

export default {
  title: "Inputs/FileUploader",
  component: FileUploader,
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

export const Default = () => (
  <div style={{ maxWidth: 500 }}>
    <FileUploader
      multiple
      accept="image/*,.pdf"
      onUpload={(files) => console.log("Uploaded files:", files)}
    />
  </div>
);
