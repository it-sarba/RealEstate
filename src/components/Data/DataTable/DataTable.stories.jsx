import React from "react";
import { DataTable } from "./DataTable";
import { fn } from 'storybook/test';

export default {
  title: "Components/DataTable",
  component: DataTable,
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

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Role", accessor: "role" },
];

const data = [
  { id: 1, name: "Alice", email: "alice@example.com", role: "Admin" },
  { id: 2, name: "Bob", email: "bob@example.com", role: "Editor" },
  { id: 3, name: "Charlie", email: "charlie@example.com", role: "Viewer" },
  { id: 4, name: "Dana", email: "dana@example.com", role: "Editor" },
  { id: 5, name: "Eli", email: "eli@example.com", role: "Admin" },
  { id: 6, name: "Fay", email: "fay@example.com", role: "Viewer" },
  { id: 7, name: "Gabe", email: "gabe@example.com", role: "Editor" },
];

export const Default = () => (
  <DataTable columns={columns} data={data} rowsPerPage={3} />
);
