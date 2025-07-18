import{e}from"./iframe-BgPDq8p8.js";const a=({children:o,color:n="gray",variant:t="solid",size:s="md",rounded:c="full"})=>{const u=`badge badge-${n} badge-${t} badge-${s} badge-rounded-${c}`;return e.createElement("span",{className:u},o)};a.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{color:{defaultValue:{value:'"gray"',computed:!1},required:!1},variant:{defaultValue:{value:'"solid"',computed:!1},required:!1},size:{defaultValue:{value:'"md"',computed:!1},required:!1},rounded:{defaultValue:{value:'"full"',computed:!1},required:!1}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,m={title:"Components/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:g()}},r=()=>e.createElement("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"}},e.createElement(a,{color:"gray"},"Default"),e.createElement(a,{color:"blue"},"Info"),e.createElement(a,{color:"green"},"Success"),e.createElement(a,{color:"red"},"Error"),e.createElement(a,{color:"blue",variant:"outline"},"Outline"),e.createElement(a,{color:"red",variant:"subtle"},"Subtle")),d=()=>e.createElement("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"}},e.createElement(a,{size:"sm"},"Small"),e.createElement(a,{size:"md"},"Medium"),e.createElement(a,{size:"lg"},"Large")),l=()=>e.createElement("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"}},e.createElement(a,{rounded:"none"},"None"),e.createElement(a,{rounded:"sm"},"Sm"),e.createElement(a,{rounded:"md"},"Md"),e.createElement(a,{rounded:"lg"},"Lg"),e.createElement(a,{rounded:"full"},"Full"));r.__docgenInfo={description:"",methods:[],displayName:"ColorsAndVariants"};d.__docgenInfo={description:"",methods:[],displayName:"Sizes"};l.__docgenInfo={description:"",methods:[],displayName:"Rounded"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "10px",
  flexWrap: "wrap"
}}>\r
    <Badge color="gray">Default</Badge>\r
    <Badge color="blue">Info</Badge>\r
    <Badge color="green">Success</Badge>\r
    <Badge color="red">Error</Badge>\r
    <Badge color="blue" variant="outline">Outline</Badge>\r
    <Badge color="red" variant="subtle">Subtle</Badge>\r
  </div>`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "10px",
  flexWrap: "wrap"
}}>\r
    <Badge size="sm">Small</Badge>\r
    <Badge size="md">Medium</Badge>\r
    <Badge size="lg">Large</Badge>\r
  </div>`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "10px",
  flexWrap: "wrap"
}}>\r
    <Badge rounded="none">None</Badge>\r
    <Badge rounded="sm">Sm</Badge>\r
    <Badge rounded="md">Md</Badge>\r
    <Badge rounded="lg">Lg</Badge>\r
    <Badge rounded="full">Full</Badge>\r
  </div>`,...l.parameters?.docs?.source}}};const p=["ColorsAndVariants","Sizes","Rounded"];export{r as ColorsAndVariants,l as Rounded,d as Sizes,p as __namedExportsOrder,m as default};
