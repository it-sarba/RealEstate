import{e,r as l}from"./iframe-BgPDq8p8.js";const o=({steps:r=[],currentStep:s=0})=>e.createElement("div",{className:"stepper-container"},r.map((a,t)=>{const c=t===s,p=t<s;return e.createElement("div",{className:"stepper-step",key:t},e.createElement("div",{className:`stepper-circle ${c?"active":""} ${p?"completed":""}`},p?"✓":t+1),e.createElement("div",{className:"stepper-label"},a),t<r.length-1&&e.createElement("div",{className:`stepper-line ${p?"stepper-line-completed":""}`}))}));o.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{steps:{defaultValue:{value:"[]",computed:!1},required:!1},currentStep:{defaultValue:{value:"0",computed:!1},required:!1}}};const{fn:i}=__STORYBOOK_MODULE_TEST__,u={title:"Components/Stepper",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:i()}},n=()=>{const r=["Login","Shipping","Payment","Confirmation"],[s,a]=l.useState(1);return e.createElement("div",{style:{padding:"40px"}},e.createElement(o,{steps:r,currentStep:s}),e.createElement("div",{style:{marginTop:"20px",display:"flex",gap:"10px"}},e.createElement("button",{onClick:()=>a(t=>Math.max(0,t-1))},"Previous"),e.createElement("button",{onClick:()=>a(t=>Math.min(r.length-1,t+1))},"Next")))};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const steps = ["Login", "Shipping", "Payment", "Confirmation"];
  const [currentStep, setCurrentStep] = useState(1);
  return <div style={{
    padding: "40px"
  }}>\r
      <Stepper steps={steps} currentStep={currentStep} />\r
      <div style={{
      marginTop: "20px",
      display: "flex",
      gap: "10px"
    }}>\r
        <button onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}>\r
          Previous\r
        </button>\r
        <button onClick={() => setCurrentStep(prev => Math.min(steps.length - 1, prev + 1))}>\r
          Next\r
        </button>\r
      </div>\r
    </div>;
}`,...n.parameters?.docs?.source}}};const d=["Default"];export{n as Default,d as __namedExportsOrder,u as default};
