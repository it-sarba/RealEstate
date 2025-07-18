import{e}from"./iframe-BgPDq8p8.js";const l=({user:t,onEdit:s,onDelete:o})=>{const{avatar:c,name:r,email:m,role:d,status:n}=t;return e.createElement("tr",{className:"user-table-row"},e.createElement("td",null,e.createElement("div",{className:"user-info"},e.createElement("img",{src:c,alt:r,className:"user-avatar"}),e.createElement("div",{className:"user-details"},e.createElement("strong",null,r),e.createElement("small",null,m)))),e.createElement("td",null,d),e.createElement("td",null,e.createElement("span",{className:`status-badge ${n.toLowerCase()}`},n)),e.createElement("td",null,e.createElement("div",{className:"actions"},e.createElement("button",{onClick:()=>s(t),className:"edit-btn"},"Edit"),e.createElement("button",{onClick:()=>o(t),className:"delete-btn"},"Delete"))))};l.__docgenInfo={description:"",methods:[],displayName:"UserTableRow"};const{fn:i}=__STORYBOOK_MODULE_TEST__,p={title:"Admin/UserTableRow",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:i()}},u={id:1,name:"Jane Doe",email:"jane.doe@example.com",avatar:"https://i.pravatar.cc/100?img=10",role:"Administrator",status:"Active"},E=t=>e.createElement("table",{style:{width:"100%",borderCollapse:"collapse"}},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",null,"User"),e.createElement("th",null,"Role"),e.createElement("th",null,"Status"),e.createElement("th",null,"Actions"))),e.createElement("tbody",null,e.createElement(l,{...t}))),a=E.bind({});a.args={user:u,onEdit:t=>alert(`Edit: ${t.name}`),onDelete:t=>alert(`Delete: ${t.name}`)};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <table style={{
  width: "100%",
  borderCollapse: "collapse"
}}>\r
    <thead>\r
      <tr>\r
        <th>User</th>\r
        <th>Role</th>\r
        <th>Status</th>\r
        <th>Actions</th>\r
      </tr>\r
    </thead>\r
    <tbody>\r
      <UserTableRow {...args} />\r
    </tbody>\r
  </table>`,...a.parameters?.docs?.source}}};const h=["Default"];export{a as Default,h as __namedExportsOrder,p as default};
