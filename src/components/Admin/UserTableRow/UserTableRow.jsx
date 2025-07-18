import React from "react";
import "./UserTableRow.css";

 export const UserTableRow = ({ user, onEdit, onDelete }) => {
  const { avatar, name, email, role, status } = user;

  return (
    <tr className="user-table-row">
      <td>
        <div className="user-info">
          <img src={avatar} alt={name} className="user-avatar" />
          <div className="user-details">
            <strong>{name}</strong>
            <small>{email}</small>
          </div>
        </div>
      </td>
      <td>{role}</td>
      <td>
        <span className={`status-badge ${status.toLowerCase()}`}>
          {status}
        </span>
      </td>
      <td>
        <div className="actions">
          <button onClick={() => onEdit(user)} className="edit-btn">Edit</button>
          <button onClick={() => onDelete(user)} className="delete-btn">Delete</button>
        </div>
      </td>
    </tr>
  );
};
export default UserTableRow;