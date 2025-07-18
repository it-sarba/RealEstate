import{e}from"./iframe-BgPDq8p8.js";const r=({size:i="medium",color:l="primary",label:t})=>e.createElement("div",{className:"spinner-wrapper",role:"status","aria-live":"polite"},e.createElement("div",{className:`spinner spinner-${i} spinner-${l}`}),t&&e.createElement("span",{className:"spinner-label"},t));r.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{size:{defaultValue:{value:'"medium"',computed:!1},required:!1},color:{defaultValue:{value:'"primary"',computed:!1},required:!1}}};const{fn:c}=__STORYBOOK_MODULE_TEST__,m={title:"Components/Spinner",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:c()}},a=()=>e.createElement(r,{label:"Loading..."}),n=()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(r,{size:"small"}),e.createElement(r,{size:"medium"}),e.createElement(r,{size:"large"})),s=()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(r,{color:"primary"}),e.createElement(r,{color:"success"}),e.createElement(r,{color:"warning"}),e.createElement(r,{color:"error"})),o=()=>e.createElement(r,{label:"Fetching data..."});a.__docgenInfo={description:"",methods:[],displayName:"Primary"};n.__docgenInfo={description:"",methods:[],displayName:"Sizes"};s.__docgenInfo={description:"",methods:[],displayName:"Colors"};o.__docgenInfo={description:"",methods:[],displayName:"WithLabel"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:'() => <Spinner label="Loading..." />',...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "16px",
  alignItems: "center"
}}>\r
    <Spinner size="small" />\r
    <Spinner size="medium" />\r
    <Spinner size="large" />\r
  </div>`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => <div style={{
  display: "flex",
  gap: "16px",
  alignItems: "center"
}}>\r
    <Spinner color="primary" />\r
    <Spinner color="success" />\r
    <Spinner color="warning" />\r
    <Spinner color="error" />\r
  </div>`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'() => <Spinner label="Fetching data..." />',...o.parameters?.docs?.source}}};const d=["Primary","Sizes","Colors","WithLabel"];export{s as Colors,a as Primary,n as Sizes,o as WithLabel,d as __namedExportsOrder,m as default};
