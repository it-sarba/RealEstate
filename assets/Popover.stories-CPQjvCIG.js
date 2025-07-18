import{r as p,e}from"./iframe-BgPDq8p8.js";const i=({trigger:a,content:g,position:u="bottom"})=>{const[d,l]=p.useState(!1),c=p.useRef(null),v=()=>l(!d),m=f=>{c.current&&!c.current.contains(f.target)&&l(!1)};return p.useEffect(()=>(document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)),[]),e.createElement("div",{className:"popover-wrapper",ref:c},e.createElement("div",{className:"popover-trigger",onClick:v},a),d&&e.createElement("div",{className:`popover-box popover-${u}`},e.createElement("div",{className:"popover-content"},g),e.createElement("div",{className:"popover-arrow"})))};i.__docgenInfo={description:"",methods:[],displayName:"Popover",props:{position:{defaultValue:{value:'"bottom"',computed:!1},required:!1}}};const{fn:E}=__STORYBOOK_MODULE_TEST__,_={title:"Components/Popover",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:E()}},s=a=>e.createElement("div",{style:{padding:"100px",textAlign:"center"}},e.createElement(i,{...a})),r=s.bind({});r.args={position:"bottom",trigger:e.createElement("button",null,"Click me"),content:e.createElement("div",null,e.createElement("strong",null,"Popover Content"),e.createElement("p",null,"This is some detailed popover content with more info."))};const o=s.bind({});o.args={...r.args,position:"top"};const t=s.bind({});t.args={...r.args,position:"left"};const n=s.bind({});n.args={...r.args,position:"right"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "100px",
  textAlign: "center"
}}>\r
    <Popover {...args} />\r
  </div>`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "100px",
  textAlign: "center"
}}>\r
    <Popover {...args} />\r
  </div>`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "100px",
  textAlign: "center"
}}>\r
    <Popover {...args} />\r
  </div>`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "100px",
  textAlign: "center"
}}>\r
    <Popover {...args} />\r
  </div>`,...n.parameters?.docs?.source}}};const b=["Bottom","Top","Left","Right"];export{r as Bottom,t as Left,n as Right,o as Top,b as __namedExportsOrder,_ as default};
