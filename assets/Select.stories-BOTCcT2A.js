import{e as t,r as d}from"./iframe-BgPDq8p8.js";import{P as e}from"./index-CPaJQx2l.js";const o=({label:n,options:r,value:s,onChange:l,disabled:i,id:p})=>t.createElement("div",{className:"select-wrapper"},n&&t.createElement("label",{htmlFor:p||n,className:"select-label"},n),t.createElement("div",{className:"select-container"},t.createElement("select",{id:p||n,className:"select-dropdown",value:s,onChange:l,disabled:i},r.map(c=>t.createElement("option",{key:c.value,value:c.value},c.label))),t.createElement("div",{className:"select-icon"},t.createElement("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#666",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},t.createElement("polyline",{points:"6 9 12 15 18 9"})))));o.propTypes={label:e.string,options:e.arrayOf(e.shape({label:e.string,value:e.string})).isRequired,value:e.string.isRequired,onChange:e.func.isRequired,disabled:e.bool,id:e.string};o.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{description:"",type:{name:"string"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"string",required:!1}}}},required:!0},value:{description:"",type:{name:"string"},required:!0},onChange:{description:"",type:{name:"func"},required:!0},disabled:{description:"",type:{name:"bool"},required:!1},id:{description:"",type:{name:"string"},required:!1}}};const{fn:u}=__STORYBOOK_MODULE_TEST__,v={title:"Components/Select",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"},disabled:{control:"boolean"},label:{control:"text"}},args:{onClick:u()}},a=n=>{const[r,s]=d.useState("option1"),l=[{value:"option1",label:"Option One"},{value:"option2",label:"Option Two"},{value:"option3",label:"Option Three"}];return t.createElement(o,{...n,options:l,value:r,onChange:i=>s(i.target.value)})};a.args={label:"Select an option",disabled:!1};a.__docgenInfo={description:"",methods:[],displayName:"Default"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [selected, setSelected] = useState("option1");
  const options = [{
    value: "option1",
    label: "Option One"
  }, {
    value: "option2",
    label: "Option Two"
  }, {
    value: "option3",
    label: "Option Three"
  }];
  return <Select {...args} options={options} value={selected} onChange={e => setSelected(e.target.value)} />;
}`,...a.parameters?.docs?.source}}};const b=["Default"];export{a as Default,b as __namedExportsOrder,v as default};
