import{r as D,e}from"./iframe-BDDuDnDY.js";import{P as r}from"./index-D3zwYjk_.js";const n=({user:a,onEdit:R,onDelete:c,onView:d=null,onSelect:C=null,isSelected:u=!1,loading:o=!1,showActions:N=!0,showAvatar:z=!0,showEmail:T=!0,showRole:s=!0,showStatus:i=!0,customActions:l=null,className:Z="",size:$="medium"})=>{const[_,O]=D.useState(!1),[J,H]=D.useState(!1);if(!a)return null;const{id:re,avatar:q,name:M="Unknown User",email:W,role:I,status:G="inactive",lastActive:j,department:B,phone:se,joinDate:ne}=a,K=(x=>x?x.trim().split(" ").map(te=>te[0]).join("").toUpperCase().slice(0,2):"U")(M),F={active:{label:"Active",color:"success",icon:"●"},inactive:{label:"Inactive",color:"warning",icon:"●"},banned:{label:"Banned",color:"danger",icon:"●"},pending:{label:"Pending",color:"info",icon:"◐"},suspended:{label:"Suspended",color:"danger",icon:"⏸"},verified:{label:"Verified",color:"success",icon:"✓"}},L=F[G.toLowerCase()]||F.inactive,P={admin:{label:"Administrator",icon:"👑"},administrator:{label:"Administrator",icon:"👑"},user:{label:"User",icon:"👤"},moderator:{label:"Moderator",icon:"🛡️"},editor:{label:"Editor",icon:"✏️"},viewer:{label:"Viewer",icon:"👁️"},manager:{label:"Manager",icon:"📊"}}[I?.toLowerCase()]||{label:I,icon:"👤"},Q=()=>{O(!0)},X=["user-table-row",`user-table-row--${$}`,u&&"user-table-row--selected",o&&"user-table-row--loading",J&&"user-table-row--hovered",Z].filter(Boolean).join(" "),Y=()=>z?o?e.createElement("div",{className:"user-avatar user-avatar--skeleton"}):q&&!_?e.createElement("img",{src:q,alt:M,className:"user-avatar",onError:Q}):e.createElement("div",{className:"user-avatar user-avatar--fallback"},K):null,ee=()=>N?o?e.createElement("div",{className:"user-actions"},e.createElement("div",{className:"action-skeleton"}),e.createElement("div",{className:"action-skeleton"})):l?e.createElement("div",{className:"user-actions"},l):e.createElement("div",{className:"user-actions"},d&&e.createElement("button",{onClick:()=>d(a),className:"action-btn action-btn--view",title:"View details"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M12 9a3 3 0 100 6 3 3 0 000-6zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 18c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"})),e.createElement("span",null,"View")),R&&e.createElement("button",{onClick:()=>R(a),className:"action-btn action-btn--edit",title:"Edit user"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})),e.createElement("span",null,"Edit")),c&&e.createElement("button",{onClick:()=>c(a),className:"action-btn action-btn--delete",title:"Delete user"},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})),e.createElement("span",null,"Delete"))):null;return e.createElement("tr",{className:X,onMouseEnter:()=>H(!0),onMouseLeave:()=>H(!1)},C&&e.createElement("td",{className:"user-table-cell user-table-cell--select"},e.createElement("input",{type:"checkbox",checked:u,onChange:x=>C(a,x.target.checked),className:"user-select-checkbox",disabled:o})),e.createElement("td",{className:"user-table-cell user-table-cell--user"},e.createElement("div",{className:"user-info"},Y(),e.createElement("div",{className:"user-details"},e.createElement("div",{className:"user-name"},o?e.createElement("div",{className:"text-skeleton"}):M),T&&W&&e.createElement("div",{className:"user-email"},o?e.createElement("div",{className:"text-skeleton text-skeleton--small"}):W),B&&e.createElement("div",{className:"user-department"},B)))),s&&e.createElement("td",{className:"user-table-cell user-table-cell--role"},o?e.createElement("div",{className:"text-skeleton"}):e.createElement("div",{className:"user-role"},e.createElement("span",{className:"role-icon"},P.icon),e.createElement("span",{className:"role-text"},P.label))),i&&e.createElement("td",{className:"user-table-cell user-table-cell--status"},o?e.createElement("div",{className:"status-skeleton"}):e.createElement("span",{className:`status-badge status-badge--${L.color}`},e.createElement("span",{className:"status-icon"},L.icon),e.createElement("span",{className:"status-text"},L.label))),j&&e.createElement("td",{className:"user-table-cell user-table-cell--activity"},o?e.createElement("div",{className:"text-skeleton text-skeleton--small"}):e.createElement("div",{className:"user-activity"},e.createElement("div",{className:"activity-time"},j))),e.createElement("td",{className:"user-table-cell user-table-cell--actions"},ee()))};n.propTypes={user:r.shape({id:r.oneOfType([r.string,r.number]),name:r.string.isRequired,email:r.string,avatar:r.string,role:r.string,status:r.string,lastActive:r.string,department:r.string,phone:r.string,joinDate:r.string}).isRequired,onEdit:r.func,onDelete:r.func,onView:r.func,onSelect:r.func,isSelected:r.bool,loading:r.bool,showActions:r.bool,showAvatar:r.bool,showEmail:r.bool,showRole:r.bool,showStatus:r.bool,customActions:r.node,className:r.string,size:r.oneOf(["small","medium","large"])};n.__docgenInfo={description:`UserTableRow component displays user information in a table format with actions.\r
Perfect for admin panels, user management interfaces, and data tables.\r
\r
Features:\r
- User avatar with fallback to initials\r
- Status badges with multiple variants\r
- Action buttons with customizable handlers\r
- Loading and selection states\r
- Responsive design with mobile support\r
- Hover effects and smooth animations`,methods:[],displayName:"UserTableRow",props:{onView:{defaultValue:{value:"null",computed:!1},description:"View handler function",type:{name:"func"},required:!1},onSelect:{defaultValue:{value:"null",computed:!1},description:"Selection handler function",type:{name:"func"},required:!1},isSelected:{defaultValue:{value:"false",computed:!1},description:"Whether row is selected",type:{name:"bool"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Loading state",type:{name:"bool"},required:!1},showActions:{defaultValue:{value:"true",computed:!1},description:"Whether to show action buttons",type:{name:"bool"},required:!1},showAvatar:{defaultValue:{value:"true",computed:!1},description:"Whether to show user avatar",type:{name:"bool"},required:!1},showEmail:{defaultValue:{value:"true",computed:!1},description:"Whether to show user email",type:{name:"bool"},required:!1},showRole:{defaultValue:{value:"true",computed:!1},description:"Whether to show user role",type:{name:"bool"},required:!1},showStatus:{defaultValue:{value:"true",computed:!1},description:"Whether to show user status",type:{name:"bool"},required:!1},customActions:{defaultValue:{value:"null",computed:!1},description:"Custom action buttons",type:{name:"node"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Additional CSS classes",type:{name:"string"},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},description:"Row size variant",type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1},user:{description:"User object containing user data",type:{name:"shape",value:{id:{name:"union",value:[{name:"string"},{name:"number"}],required:!1},name:{name:"string",required:!0},email:{name:"string",required:!1},avatar:{name:"string",required:!1},role:{name:"string",required:!1},status:{name:"string",required:!1},lastActive:{name:"string",required:!1},department:{name:"string",required:!1},phone:{name:"string",required:!1},joinDate:{name:"string",required:!1}}},required:!0},onEdit:{description:"Edit handler function",type:{name:"func"},required:!1},onDelete:{description:"Delete handler function",type:{name:"func"},required:!1}}};const ce={title:"Admin/UserTableRow",component:n,parameters:{layout:"fullscreen",docs:{description:{component:`
The UserTableRow component displays user information in a tabular format with interactive features.

## Features
- **User Information Display**: Avatar, name, email, role, and status
- **Interactive Actions**: View, edit, and delete buttons with custom handlers
- **Selection Support**: Checkbox selection for bulk operations  
- **Status Indicators**: Visual badges for different user states
- **Loading States**: Skeleton animations during data loading
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Full keyboard navigation and screen reader support

## Usage
\`\`\`jsx
import { UserTableRow } from './UserTableRow';

<table>
  <tbody>
    <UserTableRow
      user={userData}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onSelect={handleSelect}
    />
  </tbody>
</table>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{user:{description:"User object containing user data",control:{type:"object"}},onEdit:{description:"Edit handler function",action:"edit"},onDelete:{description:"Delete handler function",action:"delete"},onView:{description:"View handler function",action:"view"},onSelect:{description:"Selection handler function",action:"select"},isSelected:{description:"Whether row is selected",control:{type:"boolean"}},loading:{description:"Loading state",control:{type:"boolean"}},showActions:{description:"Whether to show action buttons",control:{type:"boolean"}},showAvatar:{description:"Whether to show user avatar",control:{type:"boolean"}},showEmail:{description:"Whether to show user email",control:{type:"boolean"}},showRole:{description:"Whether to show user role",control:{type:"boolean"}},showStatus:{description:"Whether to show user status",control:{type:"boolean"}},size:{description:"Row size variant",control:{type:"select"},options:["small","medium","large"]}},decorators:[a=>e.createElement("div",{style:{padding:"1rem",background:"#f8fafc",minHeight:"100vh"}},e.createElement("div",{className:"user-table-container",style:{maxWidth:"1200px",margin:"0 auto"}},e.createElement("table",{className:"user-table"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"User"),e.createElement("th",null,"Role"),e.createElement("th",null,"Status"),e.createElement("th",null,"Last Active"),e.createElement("th",null,"Actions"))),e.createElement("tbody",null,e.createElement(a,null)))))]},t={admin:{id:1,name:"Sarah Wilson",email:"sarah.wilson@company.com",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",role:"Administrator",status:"active",lastActive:"2 minutes ago",department:"IT Operations",joinDate:"2023-01-15"},user:{id:2,name:"Michael Chen",email:"michael.chen@company.com",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",role:"User",status:"active",lastActive:"1 hour ago",department:"Marketing",joinDate:"2023-03-22"},moderator:{id:3,name:"Emily Rodriguez",email:"emily.rodriguez@company.com",avatar:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",role:"Moderator",status:"away",lastActive:"3 hours ago",department:"Customer Support"},suspended:{id:4,name:"James Thompson",email:"james.thompson@company.com",role:"User",status:"suspended",lastActive:"2 days ago",department:"Sales"},pending:{id:5,name:"Lisa Park",email:"lisa.park@company.com",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",role:"Editor",status:"pending",lastActive:"Never",department:"Content"}},m={args:{user:t.admin,showActions:!0,showAvatar:!0,showEmail:!0,showRole:!0,showStatus:!0,size:"medium"}},p={args:{user:t.user,showActions:!0}},h={args:{user:t.suspended,showActions:!0}},f={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{user:{...t.admin,status:"active"},onEdit:()=>{},onDelete:()=>{}}),e.createElement(n,{user:{...t.user,status:"inactive"},onEdit:()=>{},onDelete:()=>{}}),e.createElement(n,{user:{...t.moderator,status:"away"},onEdit:()=>{},onDelete:()=>{}}),e.createElement(n,{user:{...t.suspended,status:"suspended"},onEdit:()=>{},onDelete:()=>{}}),e.createElement(n,{user:{...t.pending,status:"pending"},onEdit:()=>{},onDelete:()=>{}}))},w={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{user:{...t.admin,role:"Administrator"},onEdit:()=>{},onDelete:()=>{}}),e.createElement(n,{user:{...t.moderator,role:"Moderator"},onEdit:()=>{},onDelete:()=>{}}),e.createElement(n,{user:{...t.pending,role:"Editor"},onEdit:()=>{},onDelete:()=>{}}),e.createElement(n,{user:{...t.user,role:"User"},onEdit:()=>{},onDelete:()=>{}}),e.createElement(n,{user:{...t.user,role:"Viewer",name:"John Viewer"},onEdit:()=>{},onDelete:()=>{}}))},g={args:{user:t.admin,loading:!0,showActions:!0}},b={args:{user:t.admin,isSelected:!0,onSelect:()=>{},showActions:!0}},E={args:{user:t.user,onSelect:()=>{},isSelected:!1,showActions:!0}},v={args:{user:t.admin,size:"small",showActions:!0}},S={args:{user:t.admin,size:"large",showActions:!0}},y={args:{user:t.user,showActions:!1}},U={args:{user:t.admin,showActions:!0,customActions:e.createElement("div",{style:{display:"flex",gap:"0.5rem"}},e.createElement("button",{className:"action-btn action-btn--view",onClick:()=>alert("Profile clicked")},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6V4H9V6L3 7V9L9 8V20H15V8L21 9Z"})),e.createElement("span",null,"Profile")),e.createElement("button",{className:"action-btn action-btn--edit",onClick:()=>alert("Reset password")},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z"})),e.createElement("span",null,"Reset")),e.createElement("button",{className:"action-btn action-btn--delete",onClick:()=>alert("Suspend user")},e.createElement("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},e.createElement("path",{d:"M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"})),e.createElement("span",null,"Suspend")))}},V={render:()=>{const[a,R]=D.useState([{...t.admin,id:1},{...t.user,id:2},{...t.moderator,id:3},{...t.suspended,id:4}]),[c,d]=D.useState(new Set),[C,u]=D.useState(null),o=(s,i)=>{const l=new Set(c);i?l.add(s.id):l.delete(s.id),d(l)},N=s=>{u(s),setTimeout(()=>u(null),2e3)},z=s=>{confirm(`Delete ${s.name}?`)&&(R(a.filter(i=>i.id!==s.id)),d(i=>{const l=new Set(i);return l.delete(s.id),l}))},T=s=>{alert(`Viewing profile for ${s.name}`)};return e.createElement(e.Fragment,null,a.map(s=>e.createElement(n,{key:s.id,user:s,onEdit:N,onDelete:z,onView:T,onSelect:o,isSelected:c.has(s.id),loading:C?.id===s.id})),a.length===0&&e.createElement("tr",null,e.createElement("td",{colSpan:"6",style:{textAlign:"center",padding:"2rem",color:"#6b7280",fontStyle:"italic"}},"No users found")),e.createElement("tr",null,e.createElement("td",{colSpan:"6",style:{background:"#f8fafc",padding:"1rem",borderTop:"2px solid #e5e7eb"}},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.875rem",color:"#6b7280"}},e.createElement("span",null,c.size," of ",a.length," users selected"),c.size>0&&e.createElement("div",{style:{display:"flex",gap:"0.5rem"}},e.createElement("button",{onClick:()=>{c.forEach(s=>{const i=a.find(l=>l.id===s);i&&N(i)})},style:{padding:"0.5rem 1rem",background:"#3b82f6",color:"white",border:"none",borderRadius:"6px",fontSize:"0.75rem",cursor:"pointer"}},"Edit Selected (",c.size,")"),e.createElement("button",{onClick:()=>d(new Set),style:{padding:"0.5rem 1rem",background:"#6b7280",color:"white",border:"none",borderRadius:"6px",fontSize:"0.75rem",cursor:"pointer"}},"Clear Selection"))))))}},k={render:()=>e.createElement(e.Fragment,null,e.createElement(n,{user:t.admin,onEdit:()=>alert("Edit admin"),onDelete:()=>alert("Delete admin"),onView:()=>alert("View admin"),onSelect:()=>{},isSelected:!1}),e.createElement(n,{user:t.user,onEdit:()=>alert("Edit user"),onDelete:()=>alert("Delete user"),onView:()=>alert("View user"),onSelect:()=>{},isSelected:!0}),e.createElement(n,{user:t.moderator,onEdit:()=>alert("Edit moderator"),onDelete:()=>alert("Delete moderator"),onView:()=>alert("View moderator"),onSelect:()=>{},isSelected:!1}),e.createElement(n,{user:t.suspended,onEdit:()=>alert("Edit suspended user"),onDelete:()=>alert("Delete suspended user"),onView:()=>alert("View suspended user"),onSelect:()=>{},isSelected:!1}),e.createElement(n,{user:t.pending,onEdit:()=>alert("Edit pending user"),onDelete:()=>alert("Delete pending user"),onView:()=>alert("View pending user"),onSelect:()=>{},isSelected:!1})),parameters:{docs:{source:{code:`
<table className="user-table">
  <thead>
    <tr>
      <th>Select</th>
      <th>User</th>
      <th>Role</th>
      <th>Status</th>
      <th>Last Active</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <UserTableRow
        key={user.id}
        user={user}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        onSelect={handleSelect}
        isSelected={selectedUsers.has(user.id)}
      />
    ))}
  </tbody>
</table>
        `}}}},A={args:{user:{...t.admin,avatar:"https://broken-url-that-does-not-exist.jpg"},showActions:!0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.admin,
    showActions: true,
    showAvatar: true,
    showEmail: true,
    showRole: true,
    showStatus: true,
    size: "medium"
  }
}`,...m.parameters?.docs?.source},description:{story:"Default story showing an active administrator",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.user,
    showActions: true
  }
}`,...p.parameters?.docs?.source},description:{story:"Regular user with standard permissions",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.suspended,
    showActions: true
  }
}`,...h.parameters?.docs?.source},description:{story:"User without avatar showing initials fallback",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <>\r
      <UserTableRow user={{
      ...mockUsers.admin,
      status: "active"
    }} onEdit={() => {}} onDelete={() => {}} />\r
      <UserTableRow user={{
      ...mockUsers.user,
      status: "inactive"
    }} onEdit={() => {}} onDelete={() => {}} />\r
      <UserTableRow user={{
      ...mockUsers.moderator,
      status: "away"
    }} onEdit={() => {}} onDelete={() => {}} />\r
      <UserTableRow user={{
      ...mockUsers.suspended,
      status: "suspended"
    }} onEdit={() => {}} onDelete={() => {}} />\r
      <UserTableRow user={{
      ...mockUsers.pending,
      status: "pending"
    }} onEdit={() => {}} onDelete={() => {}} />\r
    </>
}`,...f.parameters?.docs?.source},description:{story:"Different user status variants",...f.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <>\r
      <UserTableRow user={{
      ...mockUsers.admin,
      role: "Administrator"
    }} onEdit={() => {}} onDelete={() => {}} />\r
      <UserTableRow user={{
      ...mockUsers.moderator,
      role: "Moderator"
    }} onEdit={() => {}} onDelete={() => {}} />\r
      <UserTableRow user={{
      ...mockUsers.pending,
      role: "Editor"
    }} onEdit={() => {}} onDelete={() => {}} />\r
      <UserTableRow user={{
      ...mockUsers.user,
      role: "User"
    }} onEdit={() => {}} onDelete={() => {}} />\r
      <UserTableRow user={{
      ...mockUsers.user,
      role: "Viewer",
      name: "John Viewer"
    }} onEdit={() => {}} onDelete={() => {}} />\r
    </>
}`,...w.parameters?.docs?.source},description:{story:"Different role types with icons",...w.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.admin,
    loading: true,
    showActions: true
  }
}`,...g.parameters?.docs?.source},description:{story:"Loading state with skeleton animations",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.admin,
    isSelected: true,
    onSelect: () => {},
    showActions: true
  }
}`,...b.parameters?.docs?.source},description:{story:"Selected state for bulk operations",...b.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.user,
    onSelect: () => {},
    isSelected: false,
    showActions: true
  }
}`,...E.parameters?.docs?.source},description:{story:"Row with selection checkbox",...E.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.admin,
    size: "small",
    showActions: true
  }
}`,...v.parameters?.docs?.source},description:{story:"Small size variant for compact layouts",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.admin,
    size: "large",
    showActions: true
  }
}`,...S.parameters?.docs?.source},description:{story:"Large size variant for detailed views",...S.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.user,
    showActions: false
  }
}`,...y.parameters?.docs?.source},description:{story:"Minimal row without actions",...y.parameters?.docs?.description}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    user: mockUsers.admin,
    showActions: true,
    customActions: <div style={{
      display: 'flex',
      gap: '0.5rem'
    }}>\r
        <button className="action-btn action-btn--view" onClick={() => alert('Profile clicked')}>\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6V4H9V6L3 7V9L9 8V20H15V8L21 9Z" />\r
          </svg>\r
          <span>Profile</span>\r
        </button>\r
        <button className="action-btn action-btn--edit" onClick={() => alert('Reset password')}>\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M12,17A2,2 0 0,0 14,15C14,13.89 13.1,13 12,13A2,2 0 0,0 10,15A2,2 0 0,0 12,17M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V10C4,8.89 4.9,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" />\r
          </svg>\r
          <span>Reset</span>\r
        </button>\r
        <button className="action-btn action-btn--delete" onClick={() => alert('Suspend user')}>\r
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">\r
            <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />\r
          </svg>\r
          <span>Suspend</span>\r
        </button>\r
      </div>
  }
}`,...U.parameters?.docs?.source},description:{story:"Row with custom actions",...U.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [users, setUsers] = useState([{
      ...mockUsers.admin,
      id: 1
    }, {
      ...mockUsers.user,
      id: 2
    }, {
      ...mockUsers.moderator,
      id: 3
    }, {
      ...mockUsers.suspended,
      id: 4
    }]);
    const [selectedUsers, setSelectedUsers] = useState(new Set());
    const [editingUser, setEditingUser] = useState(null);
    const handleSelect = (user, isSelected) => {
      const newSelected = new Set(selectedUsers);
      if (isSelected) {
        newSelected.add(user.id);
      } else {
        newSelected.delete(user.id);
      }
      setSelectedUsers(newSelected);
    };
    const handleEdit = user => {
      setEditingUser(user);
      setTimeout(() => setEditingUser(null), 2000); // Auto-close after 2s for demo
    };
    const handleDelete = user => {
      if (confirm(\`Delete \${user.name}?\`)) {
        setUsers(users.filter(u => u.id !== user.id));
        setSelectedUsers(prev => {
          const newSet = new Set(prev);
          newSet.delete(user.id);
          return newSet;
        });
      }
    };
    const handleView = user => {
      alert(\`Viewing profile for \${user.name}\`);
    };
    return <>\r
        {users.map(user => <UserTableRow key={user.id} user={user} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} onSelect={handleSelect} isSelected={selectedUsers.has(user.id)} loading={editingUser?.id === user.id} />)}\r
        {users.length === 0 && <tr>\r
            <td colSpan="6" style={{
          textAlign: 'center',
          padding: '2rem',
          color: '#6b7280',
          fontStyle: 'italic'
        }}>\r
              No users found\r
            </td>\r
          </tr>}\r
        <tr>\r
          <td colSpan="6" style={{
          background: '#f8fafc',
          padding: '1rem',
          borderTop: '2px solid #e5e7eb'
        }}>\r
            <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>\r
              <span>\r
                {selectedUsers.size} of {users.length} users selected\r
              </span>\r
              {selectedUsers.size > 0 && <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>\r
                  <button onClick={() => {
                selectedUsers.forEach(id => {
                  const user = users.find(u => u.id === id);
                  if (user) handleEdit(user);
                });
              }} style={{
                padding: '0.5rem 1rem',
                background: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}>\r
                    Edit Selected ({selectedUsers.size})\r
                  </button>\r
                  <button onClick={() => setSelectedUsers(new Set())} style={{
                padding: '0.5rem 1rem',
                background: '#6b7280',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                fontSize: '0.75rem',
                cursor: 'pointer'
              }}>\r
                    Clear Selection\r
                  </button>\r
                </div>}\r
            </div>\r
          </td>\r
        </tr>\r
      </>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Interactive example with state management",...V.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <>\r
      <UserTableRow user={mockUsers.admin} onEdit={() => alert('Edit admin')} onDelete={() => alert('Delete admin')} onView={() => alert('View admin')} onSelect={() => {}} isSelected={false} />\r
      <UserTableRow user={mockUsers.user} onEdit={() => alert('Edit user')} onDelete={() => alert('Delete user')} onView={() => alert('View user')} onSelect={() => {}} isSelected={true} />\r
      <UserTableRow user={mockUsers.moderator} onEdit={() => alert('Edit moderator')} onDelete={() => alert('Delete moderator')} onView={() => alert('View moderator')} onSelect={() => {}} isSelected={false} />\r
      <UserTableRow user={mockUsers.suspended} onEdit={() => alert('Edit suspended user')} onDelete={() => alert('Delete suspended user')} onView={() => alert('View suspended user')} onSelect={() => {}} isSelected={false} />\r
      <UserTableRow user={mockUsers.pending} onEdit={() => alert('Edit pending user')} onDelete={() => alert('Delete pending user')} onView={() => alert('View pending user')} onSelect={() => {}} isSelected={false} />\r
    </>,
  parameters: {
    docs: {
      source: {
        code: \`
<table className="user-table">
  <thead>
    <tr>
      <th>Select</th>
      <th>User</th>
      <th>Role</th>
      <th>Status</th>
      <th>Last Active</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {users.map(user => (
      <UserTableRow
        key={user.id}
        user={user}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
        onSelect={handleSelect}
        isSelected={selectedUsers.has(user.id)}
      />
    ))}
  </tbody>
</table>
        \`
      }
    }
  }
}`,...k.parameters?.docs?.source},description:{story:"Full user management table example",...k.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    user: {
      ...mockUsers.admin,
      avatar: "https://broken-url-that-does-not-exist.jpg"
    },
    showActions: true
  }
}`,...A.parameters?.docs?.source},description:{story:"Broken image fallback demonstration",...A.parameters?.docs?.description}}};const de=["Default","RegularUser","WithoutAvatar","StatusVariants","RoleVariants","Loading","Selected","WithSelection","SmallSize","LargeSize","WithoutActions","CustomActions","InteractiveExample","FullUserTable","BrokenImage"];export{A as BrokenImage,U as CustomActions,m as Default,k as FullUserTable,V as InteractiveExample,S as LargeSize,g as Loading,p as RegularUser,w as RoleVariants,b as Selected,v as SmallSize,f as StatusVariants,E as WithSelection,y as WithoutActions,h as WithoutAvatar,de as __namedExportsOrder,ce as default};
