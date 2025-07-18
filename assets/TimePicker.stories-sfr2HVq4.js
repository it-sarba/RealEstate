import{r as o,e}from"./iframe-BgPDq8p8.js";const s=({value:a,onChange:r})=>{const[n,c]=o.useState(a||""),m=i=>{c(i.target.value),r&&r(i.target.value)};return e.createElement("div",{className:"timepicker-wrapper"},e.createElement("label",{className:"timepicker-label"},"Select Time"),e.createElement("input",{type:"time",className:"timepicker-input",value:n,onChange:m}))};s.__docgenInfo={description:"",methods:[],displayName:"TimePicker"};const{fn:l}=__STORYBOOK_MODULE_TEST__,d={title:"Components/TimePicker",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:l()}},t=()=>{const[a,r]=o.useState("");return e.createElement("div",null,e.createElement(s,{value:a,onChange:n=>r(n)}),e.createElement("p",{style:{marginTop:"10px"}},"Selected Time: ",a))};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [time, setTime] = useState("");
  return <div>\r
      <TimePicker value={time} onChange={val => setTime(val)} />\r
      <p style={{
      marginTop: "10px"
    }}>Selected Time: {time}</p>\r
    </div>;
}`,...t.parameters?.docs?.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,d as default};
