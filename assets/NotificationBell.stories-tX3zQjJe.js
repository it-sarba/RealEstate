import{e,r as c}from"./iframe-BDDuDnDY.js";import{s as l}from"./index-CFmvXXJ6.js";import"./iconBase-ASH6A7P_.js";const r=({count:n=0,onClick:o})=>e.createElement("div",{className:"notification-bell",onClick:o},e.createElement(l,{className:"bell-icon"}),n>0&&e.createElement("span",{className:"notification-count"},n));r.__docgenInfo={description:"",methods:[],displayName:"NotificationBell",props:{count:{defaultValue:{value:"0",computed:!1},required:!1}}};const{fn:s}=__STORYBOOK_MODULE_TEST__,d={title:"UI/NotificationBell",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:s()}},t=()=>{const[n,o]=c.useState(3);return e.createElement("div",{style:{padding:"2rem"}},e.createElement(r,{count:n,onClick:()=>alert("Open notifications!")}),e.createElement("br",null),e.createElement("button",{onClick:()=>o(a=>a+1)},"Increment"))};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(3);
  return <div style={{
    padding: "2rem"
  }}>\r
      <NotificationBell count={count} onClick={() => alert("Open notifications!")} />\r
      <br />\r
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>\r
    </div>;
}`,...t.parameters?.docs?.source}}};const p=["Default"];export{t as Default,p as __namedExportsOrder,d as default};
