import{r as m,e as t}from"./iframe-BgPDq8p8.js";const i=({content:a,position:l="top",children:c})=>{const[d,p]=m.useState(!1);return t.createElement("div",{className:"tooltip-wrapper",onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1)},c,d&&t.createElement("div",{className:`tooltip-box tooltip-${l}`},a,t.createElement("span",{className:"tooltip-arrow"})))};i.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{position:{defaultValue:{value:'"top"',computed:!1},required:!1}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,x={title:"Components/Tooltip",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:g()}},s=a=>t.createElement("div",{style:{padding:"100px",textAlign:"center"}},t.createElement(i,{...a},t.createElement("button",{style:{padding:"8px 16px"}},"Hover me"))),e=s.bind({});e.args={content:"This is a tooltip!",position:"top"};const o=s.bind({});o.args={content:"This is a tooltip!",position:"bottom"};const r=s.bind({});r.args={content:"This is a tooltip!",position:"left"};const n=s.bind({});n.args={content:"This is a tooltip!",position:"right"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "100px",
  textAlign: "center"
}}>\r
    <Tooltip {...args}>\r
      <button style={{
      padding: "8px 16px"
    }}>Hover me</button>\r
    </Tooltip>\r
  </div>`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "100px",
  textAlign: "center"
}}>\r
    <Tooltip {...args}>\r
      <button style={{
      padding: "8px 16px"
    }}>Hover me</button>\r
    </Tooltip>\r
  </div>`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "100px",
  textAlign: "center"
}}>\r
    <Tooltip {...args}>\r
      <button style={{
      padding: "8px 16px"
    }}>Hover me</button>\r
    </Tooltip>\r
  </div>`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => <div style={{
  padding: "100px",
  textAlign: "center"
}}>\r
    <Tooltip {...args}>\r
      <button style={{
      padding: "8px 16px"
    }}>Hover me</button>\r
    </Tooltip>\r
  </div>`,...n.parameters?.docs?.source}}};const T=["Top","Bottom","Left","Right"];export{o as Bottom,r as Left,n as Right,e as Top,T as __namedExportsOrder,x as default};
