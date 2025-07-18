import{r as o,e as a}from"./iframe-BgPDq8p8.js";import{P as l}from"./index-CPaJQx2l.js";import{a as h}from"./index-De_36p6w.js";import"./iconBase-JlL7C29_.js";const c=({label:r,options:s,selected:t,onChange:u,placeholder:f})=>{const[p,m]=o.useState(!1),i=o.useRef(null),g=e=>{t.includes(e)?u(t.filter(b=>b!==e)):u([...t,e])},d=e=>{i.current&&!i.current.contains(e.target)&&m(!1)};return o.useEffect(()=>(document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)),[]),a.createElement("div",{className:"multi-select-wrapper",ref:i},r&&a.createElement("label",{className:"multi-select-label"},r),a.createElement("div",{className:`multi-select-box ${p?"open":""}`,onClick:()=>m(e=>!e)},a.createElement("span",{className:"multi-select-placeholder"},t.length>0?s.filter(e=>t.includes(e.value)).map(e=>e.label).join(", "):f||"Select options"),a.createElement(h,{className:"multi-select-icon"})),p&&a.createElement("div",{className:"multi-select-options"},s.map(e=>a.createElement("label",{key:e.value,className:"multi-select-option"},a.createElement("input",{type:"checkbox",checked:t.includes(e.value),onChange:()=>g(e.value)}),a.createElement("span",null,e.label)))))};c.propTypes={label:l.string,options:l.arrayOf(l.shape({label:l.string,value:l.string})).isRequired,selected:l.array.isRequired,onChange:l.func.isRequired,placeholder:l.string};c.__docgenInfo={description:"",methods:[],displayName:"MultiSelect",props:{label:{description:"",type:{name:"string"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"string",required:!1}}}},required:!0},selected:{description:"",type:{name:"array"},required:!0},onChange:{description:"",type:{name:"func"},required:!0},placeholder:{description:"",type:{name:"string"},required:!1}}};const{fn:v}=__STORYBOOK_MODULE_TEST__,_={title:"Components/MultiSelect",component:c,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:v()}},n=()=>{const[r,s]=o.useState(["apple"]),t=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Orange",value:"orange"},{label:"Mango",value:"mango"}];return a.createElement(c,{label:"Select Fruits",options:t,selected:r,onChange:s,placeholder:"Choose fruits"})};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [selected, setSelected] = useState(["apple"]);
  const options = [{
    label: "Apple",
    value: "apple"
  }, {
    label: "Banana",
    value: "banana"
  }, {
    label: "Orange",
    value: "orange"
  }, {
    label: "Mango",
    value: "mango"
  }];
  return <MultiSelect label="Select Fruits" options={options} selected={selected} onChange={setSelected} placeholder="Choose fruits" />;
}`,...n.parameters?.docs?.source}}};const C=["Default"];export{n as Default,C as __namedExportsOrder,_ as default};
