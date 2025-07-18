import{r as p,e}from"./iframe-BgPDq8p8.js";import{H as u,S as b}from"./settings-CbvHS0NN.js";import{c as h}from"./createLucideIcon-BQXi_78b.js";/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],g=h("user",f),l=({menuItems:r=[],collapsed:c=!1})=>{const[t,d]=p.useState(c);return e.createElement("div",{className:`sidebar ${t?"collapsed":""}`},e.createElement("div",{className:"sidebar-header"},e.createElement("span",{className:"sidebar-logo"},t?"🔰":"Demo"),e.createElement("button",{className:"sidebar-toggle",onClick:()=>d(!t)},"☰")),e.createElement("ul",{className:"sidebar-menu"},r.map((n,m)=>e.createElement("li",{className:"sidebar-item",key:m},e.createElement("span",{className:"sidebar-icon"},n.icon),!t&&e.createElement("span",{className:"sidebar-label"},n.label)))))};l.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{menuItems:{defaultValue:{value:"[]",computed:!1},required:!1},collapsed:{defaultValue:{value:"false",computed:!1},required:!1}}};const{fn:E}=__STORYBOOK_MODULE_TEST__,x={title:"Layout/Sidebar",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:E()}},o=[{label:"Home",icon:e.createElement(u,{size:18})},{label:"Profile",icon:e.createElement(g,{size:18})},{label:"Settings",icon:e.createElement(b,{size:18})}],i=r=>e.createElement("div",{style:{display:"flex",height:"100vh"}},e.createElement(l,{...r}),e.createElement("div",{style:{padding:"2rem",flex:1}},e.createElement("h2",null,"Main Content"),e.createElement("p",null,"This is the main area next to the sidebar."))),a=i.bind({});a.args={menuItems:o,collapsed:!1};const s=i.bind({});s.args={menuItems:o,collapsed:!0};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  height: "100vh"
}}>\r
    <Sidebar {...args} />\r
    <div style={{
    padding: "2rem",
    flex: 1
  }}>\r
      <h2>Main Content</h2>\r
      <p>This is the main area next to the sidebar.</p>\r
    </div>\r
  </div>`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => <div style={{
  display: "flex",
  height: "100vh"
}}>\r
    <Sidebar {...args} />\r
    <div style={{
    padding: "2rem",
    flex: 1
  }}>\r
      <h2>Main Content</h2>\r
      <p>This is the main area next to the sidebar.</p>\r
    </div>\r
  </div>`,...s.parameters?.docs?.source}}};const _=["Default","Collapsed"];export{s as Collapsed,a as Default,_ as __namedExportsOrder,x as default};
