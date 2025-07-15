import React from "react";
import { UserTableRow } from "./UserTableRow";
import { fn } from 'storybook/test';

export default {
  title: "Admin/UserTableRow",
  component: UserTableRow,
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

const mockUser = {
  id: 1,
  name: "Jane Doe",
  email: "jane.doe@example.com",
  avatar: "https://i.pravatar.cc/100?img=10",
  role: "Administrator",
  status: "Active",
};

const Template = (args) => (
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th>User</th>
        <th>Role</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <UserTableRow {...args} />
    </tbody>
  </table>
);

export const Default = Template.bind({});
Default.args = {
  user: mockUser,
  onEdit: (user) => alert(`Edit: ${user.name}`),
  onDelete: (user) => alert(`Delete: ${user.name}`),
};
