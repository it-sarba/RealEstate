import React from "react";
import { Table } from "./Table";
import { fn } from 'storybook/test';

export default {
  title: "Components/Table",
  component: Table,
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
];

export const Basic = () => <Table columns={columns} data={data} />;

export const WithActions = () => (
  <Table
    columns={columns}
    data={data}
    actions={(row) => (
      <>
        <button onClick={() => alert(`Edit ${row.name}`)}>Edit</button>
        <button onClick={() => alert(`Delete ${row.name}`)}>Delete</button>
      </>
    )}
  />
);

export const EmptyState = () => <Table columns={columns} data={[]} />;
