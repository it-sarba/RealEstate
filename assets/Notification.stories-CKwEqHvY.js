import{e,r as p}from"./iframe-BgPDq8p8.js";const l=({title:a,message:c,type:r="info",icon:u,onClose:m,actions:f})=>e.createElement("div",{className:`notification notification-${r}`,role:"alert"},u&&e.createElement("div",{className:"notification-icon"},u),e.createElement("div",{className:"notification-content"},a&&e.createElement("strong",{className:"notification-title"},a),e.createElement("p",{className:"notification-message"},c),f&&e.createElement("div",{className:"notification-actions"},f)),m&&e.createElement("button",{className:"notification-close",onClick:m,"aria-label":"Close notification"},"×"));l.__docgenInfo={description:"",methods:[],displayName:"Notification",props:{type:{defaultValue:{value:'"info"',computed:!1},required:!1}}};const{fn:d}=__STORYBOOK_MODULE_TEST__,S={title:"Components/Notification",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:d()}},i=a=>{const[c,r]=p.useState(!0);return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>r(!0)},"Show Notification"),c&&e.createElement(l,{...a,onClose:()=>r(!1)}))},t=i.bind({});t.args={title:"Info",message:"This is an informational notification.",type:"info"};const o=i.bind({});o.args={title:"Success!",message:"Your file was uploaded successfully.",type:"success"};const s=i.bind({});s.args={title:"Error",message:"Something went wrong.",type:"error"};const n=i.bind({});n.args={title:"New update available",message:"Click below to install now.",type:"info",actions:e.createElement(e.Fragment,null,e.createElement("button",{className:"notification-btn"},"Install"),e.createElement("button",{className:"notification-btn"},"Later"))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(true);
  return <>\r
      <button onClick={() => setShow(true)}>Show Notification</button>\r
      {show && <Notification {...args} onClose={() => setShow(false)} />}\r
    </>;
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(true);
  return <>\r
      <button onClick={() => setShow(true)}>Show Notification</button>\r
      {show && <Notification {...args} onClose={() => setShow(false)} />}\r
    </>;
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(true);
  return <>\r
      <button onClick={() => setShow(true)}>Show Notification</button>\r
      {show && <Notification {...args} onClose={() => setShow(false)} />}\r
    </>;
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
  const [show, setShow] = useState(true);
  return <>\r
      <button onClick={() => setShow(true)}>Show Notification</button>\r
      {show && <Notification {...args} onClose={() => setShow(false)} />}\r
    </>;
}`,...n.parameters?.docs?.source}}};const h=["Info","Success","Error","WithActions"];export{s as Error,t as Info,o as Success,n as WithActions,h as __namedExportsOrder,S as default};
