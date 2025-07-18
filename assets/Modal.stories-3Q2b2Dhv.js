import{r,e}from"./iframe-BgPDq8p8.js";const l=({isOpen:a,onClose:t,title:s,children:c})=>(r.useEffect(()=>{const o=d=>{d.key==="Escape"&&t()};return a&&document.addEventListener("keydown",o),()=>{document.removeEventListener("keydown",o)}},[a,t]),a?e.createElement("div",{className:"modal-overlay",onClick:t},e.createElement("div",{className:"modal-content",onClick:o=>o.stopPropagation(),role:"dialog","aria-modal":"true"},e.createElement("div",{className:"modal-header"},e.createElement("h2",{className:"modal-title"},s),e.createElement("button",{className:"modal-close",onClick:t,"aria-label":"Close"},"×")),e.createElement("div",{className:"modal-body"},c))):null);l.__docgenInfo={description:"",methods:[],displayName:"Modal"};const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/Modal",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:m()}},n=()=>{const[a,t]=r.useState(!1);return e.createElement(e.Fragment,null,e.createElement("button",{onClick:()=>t(!0)},"Open Modal"),e.createElement(l,{isOpen:a,onClose:()=>t(!1),title:"Example Modal"},e.createElement("p",null,"This is a simple modal component."),e.createElement("p",null,"You can place anything you want inside here.")))};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  return <>\r
      <button onClick={() => setOpen(true)}>Open Modal</button>\r
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Example Modal">\r
        <p>This is a simple modal component.</p>\r
        <p>You can place anything you want inside here.</p>\r
      </Modal>\r
    </>;
}`,...n.parameters?.docs?.source}}};const u=["Default"];export{n as Default,u as __namedExportsOrder,p as default};
