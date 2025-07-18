import{e as r,r as c}from"./iframe-BgPDq8p8.js";import{P as n}from"./index-CPaJQx2l.js";const o=({label:e,name:t,value:s,checked:d,onChange:i,error:p})=>r.createElement("label",{className:`custom-radio ${p?"error":""}`},r.createElement("input",{type:"radio",name:t,value:s,checked:d,onChange:i}),r.createElement("span",{className:"radio-mark"}),e);o.propTypes={label:n.string.isRequired,name:n.string.isRequired,value:n.string.isRequired,checked:n.bool,onChange:n.func.isRequired,error:n.bool};o.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{label:{description:"",type:{name:"string"},required:!0},name:{description:"",type:{name:"string"},required:!0},value:{description:"",type:{name:"string"},required:!0},checked:{description:"",type:{name:"bool"},required:!1},onChange:{description:"",type:{name:"func"},required:!0},error:{description:"",type:{name:"bool"},required:!1}}};const{fn:m}=__STORYBOOK_MODULE_TEST__,g={title:"Components/Radio",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:m()}},a=()=>{const[e,t]=c.useState("one");return r.createElement("div",null,r.createElement(o,{label:"Option One",name:"example",value:"one",checked:e==="one",onChange:()=>t("one")}),r.createElement(o,{label:"Option Two",name:"example",value:"two",checked:e==="two",onChange:()=>t("two")}),r.createElement(o,{label:"Option Three",name:"example",value:"three",checked:e==="three",onChange:()=>t("three")}))},l=()=>{const[e,t]=c.useState("");return r.createElement("div",null,r.createElement(o,{label:"Option One",name:"error-example",value:"one",checked:e==="one",onChange:()=>t("one"),error:e===""}),r.createElement(o,{label:"Option Two",name:"error-example",value:"two",checked:e==="two",onChange:()=>t("two"),error:e===""}),e===""&&r.createElement("div",{style:{color:"#e74c3c",fontSize:"14px",marginTop:"4px"}},"Please select an option."))};a.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"Error"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState("one");
  return <div>\r
      <Radio label="Option One" name="example" value="one" checked={selected === "one"} onChange={() => setSelected("one")} />\r
      <Radio label="Option Two" name="example" value="two" checked={selected === "two"} onChange={() => setSelected("two")} />\r
      <Radio label="Option Three" name="example" value="three" checked={selected === "three"} onChange={() => setSelected("three")} />\r
    </div>;
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState("");
  return <div>\r
      <Radio label="Option One" name="error-example" value="one" checked={selected === "one"} onChange={() => setSelected("one")} error={selected === ""} />\r
      <Radio label="Option Two" name="error-example" value="two" checked={selected === "two"} onChange={() => setSelected("two")} error={selected === ""} />\r
      \r
      {selected === "" && <div style={{
      color: "#e74c3c",
      fontSize: "14px",
      marginTop: "4px"
    }}>\r
          Please select an option.\r
        </div>}\r
    </div>;
}`,...l.parameters?.docs?.source}}};const v=["Default","Error"];export{a as Default,l as Error,v as __namedExportsOrder,g as default};
