import{e,r as s}from"./iframe-BgPDq8p8.js";import{c as d}from"./createLucideIcon-BQXi_78b.js";const a=({isOpen:t,onClose:r,position:l="left",children:c})=>e.createElement(e.Fragment,null,t&&e.createElement("div",{className:"drawer-backdrop",onClick:r}),e.createElement("div",{className:`drawer drawer-${l} ${t?"open":""}`},e.createElement("button",{className:"drawer-close",onClick:r},"×"),e.createElement("div",{className:"drawer-content"},c)));a.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{position:{defaultValue:{value:'"left"',computed:!1},required:!1}}};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=[["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 18h16",key:"19g7jn"}],["path",{d:"M4 6h16",key:"1o0s65"}]],m=d("menu",p),{fn:u}=__STORYBOOK_MODULE_TEST__,g={title:"Layout/Drawer",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:u()}},i=({onClick:t,label:r})=>e.createElement("button",{onClick:t,style:{padding:"10px 20px",backgroundColor:"#1d4ed8",color:"#fff",border:"none",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",gap:"8px",fontSize:"1rem"}},e.createElement(m,{size:18})," ",r),n=()=>{const[t,r]=s.useState(!1);return e.createElement("div",{style:{padding:"2rem"}},e.createElement(i,{label:"Open Left Drawer",onClick:()=>r(!0)}),e.createElement(a,{isOpen:t,onClose:()=>r(!1),position:"left"},e.createElement("h2",{style:{marginBottom:"1rem",color:"#1d4ed8"}},"Left Drawer"),e.createElement("p",{style:{color:"#333"}},"This is the content of a left-positioned drawer. You can put anything here—menus, forms, or other UI.")))},o=()=>{const[t,r]=s.useState(!1);return e.createElement("div",{style:{padding:"2rem"}},e.createElement(i,{label:"Open Right Drawer",onClick:()=>r(!0)}),e.createElement(a,{isOpen:t,onClose:()=>r(!1),position:"right"},e.createElement("h2",{style:{marginBottom:"1rem",color:"#1d4ed8"}},"Right Drawer"),e.createElement("p",{style:{color:"#333"}},"This drawer slides in from the right. Use it for user settings, notifications, or side menus.")))};n.__docgenInfo={description:"",methods:[],displayName:"LeftDrawer"};o.__docgenInfo={description:"",methods:[],displayName:"RightDrawer"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div style={{
    padding: "2rem"
  }}>\r
      <DrawerButton label="Open Left Drawer" onClick={() => setOpen(true)} />\r
      <Drawer isOpen={open} onClose={() => setOpen(false)} position="left">\r
        <h2 style={{
        marginBottom: "1rem",
        color: "#1d4ed8"
      }}>Left Drawer</h2>\r
        <p style={{
        color: "#333"
      }}>\r
          This is the content of a left-positioned drawer. You can put anything\r
          here—menus, forms, or other UI.\r
        </p>\r
      </Drawer>\r
    </div>;
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <div style={{
    padding: "2rem"
  }}>\r
      <DrawerButton label="Open Right Drawer" onClick={() => setOpen(true)} />\r
      <Drawer isOpen={open} onClose={() => setOpen(false)} position="right">\r
        <h2 style={{
        marginBottom: "1rem",
        color: "#1d4ed8"
      }}>Right Drawer</h2>\r
        <p style={{
        color: "#333"
      }}>\r
          This drawer slides in from the right. Use it for user settings,\r
          notifications, or side menus.\r
        </p>\r
      </Drawer>\r
    </div>;
}`,...o.parameters?.docs?.source}}};const w=["LeftDrawer","RightDrawer"];export{n as LeftDrawer,o as RightDrawer,w as __namedExportsOrder,g as default};
