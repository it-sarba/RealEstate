import{e as a}from"./iframe-BgPDq8p8.js";import{F as o}from"./FormLabel-3x053cqx.js";import"./index-CPaJQx2l.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,d={title:"Components/FormLabel",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:s()}},e=()=>a.createElement("div",{style:{padding:"1rem",fontFamily:"sans-serif"}},a.createElement(o,{htmlFor:"name"},"Name")),r=()=>a.createElement("div",{style:{padding:"1rem",fontFamily:"sans-serif"}},a.createElement(o,{htmlFor:"email",required:!0},"Email Address"));e.__docgenInfo={description:"",methods:[],displayName:"Default"};r.__docgenInfo={description:"",methods:[],displayName:"Required"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <div style={{
  padding: "1rem",
  fontFamily: "sans-serif"
}}>\r
    <FormLabel htmlFor="name">Name</FormLabel>\r
  </div>`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  padding: "1rem",
  fontFamily: "sans-serif"
}}>\r
    <FormLabel htmlFor="email" required>\r
      Email Address\r
    </FormLabel>\r
  </div>`,...r.parameters?.docs?.source}}};const i=["Default","Required"];export{e as Default,r as Required,i as __namedExportsOrder,d as default};
