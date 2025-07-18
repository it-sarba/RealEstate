import{e}from"./iframe-BgPDq8p8.js";import{P as o}from"./index-CPaJQx2l.js";const t=({size:n="md",axis:s="vertical"})=>e.createElement("div",{className:`spacer spacer-${s} spacer-${n}`});t.propTypes={size:o.oneOf(["xs","sm","md","lg","xl"]),axis:o.oneOf(["vertical","horizontal"])};t.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{size:{defaultValue:{value:'"md"',computed:!1},description:"",type:{name:"enum",value:[{value:'"xs"',computed:!1},{value:'"sm"',computed:!1},{value:'"md"',computed:!1},{value:'"lg"',computed:!1},{value:'"xl"',computed:!1}]},required:!1},axis:{defaultValue:{value:'"vertical"',computed:!1},description:"",type:{name:"enum",value:[{value:'"vertical"',computed:!1},{value:'"horizontal"',computed:!1}]},required:!1}}};const{fn:c}=__STORYBOOK_MODULE_TEST__,i={title:"Layout/Spacer",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:c()}},a=()=>e.createElement("div",null,e.createElement("div",{style:{background:"#e2e8f0"}},"Above"),e.createElement(t,{size:"md"}),e.createElement("div",{style:{background:"#cbd5e1"}},"Below")),r=()=>e.createElement("div",{style:{display:"flex",alignItems:"center"}},e.createElement("div",{style:{background:"#e2e8f0",padding:"8px"}},"Left"),e.createElement(t,{size:"md",axis:"horizontal"}),e.createElement("div",{style:{background:"#cbd5e1",padding:"8px"}},"Right"));a.__docgenInfo={description:"",methods:[],displayName:"VerticalSpacing"};r.__docgenInfo={description:"",methods:[],displayName:"HorizontalSpacing"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <div>\r
    <div style={{
    background: "#e2e8f0"
  }}>Above</div>\r
    <Spacer size="md" />\r
    <div style={{
    background: "#cbd5e1"
  }}>Below</div>\r
  </div>`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  alignItems: "center"
}}>\r
    <div style={{
    background: "#e2e8f0",
    padding: "8px"
  }}>Left</div>\r
    <Spacer size="md" axis="horizontal" />\r
    <div style={{
    background: "#cbd5e1",
    padding: "8px"
  }}>Right</div>\r
  </div>`,...r.parameters?.docs?.source}}};const p=["VerticalSpacing","HorizontalSpacing"];export{r as HorizontalSpacing,a as VerticalSpacing,p as __namedExportsOrder,i as default};
