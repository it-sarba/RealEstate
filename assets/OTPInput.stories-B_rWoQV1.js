import{r as l,e as c}from"./iframe-BgPDq8p8.js";const u=({length:a=6,onChange:p})=>{const n=l.useRef([]),m=(r,e)=>{const t=r.target.value;if(!/^[0-9]?$/.test(t))return;const o=Array.from(n.current).map(f=>f.value);o[e]=t,p?.(o.join("")),t&&e<a-1&&n.current[e+1].focus()},d=(r,e)=>{r.key==="Backspace"&&!r.target.value&&e>0&&n.current[e-1].focus()},i=r=>{const e=r.clipboardData.getData("text").slice(0,a).split("");e.forEach((t,o)=>{/^[0-9]$/.test(t)&&n.current[o]&&(n.current[o].value=t)}),p?.(e.join("")),r.preventDefault()};return c.createElement("div",{className:"otp-input-wrapper",onPaste:i},Array.from({length:a}).map((r,e)=>c.createElement("input",{key:e,type:"text",inputMode:"numeric",maxLength:1,className:"otp-box",ref:t=>n.current[e]=t,onChange:t=>m(t,e),onKeyDown:t=>d(t,e)})))};u.__docgenInfo={description:"",methods:[],displayName:"OTPInput",props:{length:{defaultValue:{value:"6",computed:!1},required:!1}}};const{fn:g}=__STORYBOOK_MODULE_TEST__,O={title:"Auth/OTPInput",component:u,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:g()}},s=()=>{const[a,p]=l.useState("");return c.createElement("div",{style:{padding:"2rem"}},c.createElement(u,{length:6,onChange:p}),c.createElement("p",{style:{marginTop:"1rem"}},"Entered OTP: ",a))};s.__docgenInfo={description:"",methods:[],displayName:"Default"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const [otp, setOtp] = useState("");
  return <div style={{
    padding: "2rem"
  }}>\r
      <OTPInput length={6} onChange={setOtp} />\r
      <p style={{
      marginTop: "1rem"
    }}>Entered OTP: {otp}</p>\r
    </div>;
}`,...s.parameters?.docs?.source}}};const _=["Default"];export{s as Default,_ as __namedExportsOrder,O as default};
