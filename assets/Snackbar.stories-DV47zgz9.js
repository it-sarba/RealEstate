import{r as b,e}from"./iframe-BgPDq8p8.js";const i=({open:r,message:p,type:u="info",duration:m=3e3,onClose:l})=>(b.useEffect(()=>{if(r){const d=setTimeout(()=>{l?.()},m);return()=>clearTimeout(d)}},[r,m,l]),r?e.createElement("div",{className:`snackbar snackbar-${u}`,role:"status","aria-live":"polite"},p,e.createElement("button",{className:"snackbar-close",onClick:l,"aria-label":"Close"},"×")):null);i.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{type:{defaultValue:{value:'"info"',computed:!1},required:!1},duration:{defaultValue:{value:"3000",computed:!1},required:!1}}};const{fn:S}=__STORYBOOK_MODULE_TEST__,f={title:"Components/Snackbar",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:S()}},c=r=>{const[p,u]=b.useState(!1);return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>u(!0)},"Show Snackbar"),e.createElement(i,{...r,open:p,onClose:()=>u(!1)}))},n=c.bind({});n.args={message:"This is an info snackbar.",type:"info"};const s=c.bind({});s.args={message:"Operation successful!",type:"success"};const a=c.bind({});a.args={message:"Something went wrong.",type:"error"};const t=c.bind({});t.args={message:"Please double-check your input.",type:"warning"};const o=c.bind({});o.args={message:"Visible for 5 seconds.",type:"info",duration:5e3};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>\r
      <button onClick={() => setOpen(true)}>Show Snackbar</button>\r
      <Snackbar {...args} open={open} onClose={() => setOpen(false)} />\r
    </>;
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>\r
      <button onClick={() => setOpen(true)}>Show Snackbar</button>\r
      <Snackbar {...args} open={open} onClose={() => setOpen(false)} />\r
    </>;
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>\r
      <button onClick={() => setOpen(true)}>Show Snackbar</button>\r
      <Snackbar {...args} open={open} onClose={() => setOpen(false)} />\r
    </>;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>\r
      <button onClick={() => setOpen(true)}>Show Snackbar</button>\r
      <Snackbar {...args} open={open} onClose={() => setOpen(false)} />\r
    </>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [open, setOpen] = useState(false);
  return <>\r
      <button onClick={() => setOpen(true)}>Show Snackbar</button>\r
      <Snackbar {...args} open={open} onClose={() => setOpen(false)} />\r
    </>;
}`,...o.parameters?.docs?.source}}};const k=["Info","Success","Error","Warning","CustomDuration"];export{o as CustomDuration,a as Error,n as Info,s as Success,t as Warning,k as __namedExportsOrder,f as default};
