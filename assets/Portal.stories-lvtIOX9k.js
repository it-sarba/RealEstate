import{r as o,e as t}from"./iframe-BgPDq8p8.js";import{r as c}from"./index-CL7rtbuL.js";import"./index-abewR3tJ.js";const l=({children:s,container:e=document.body})=>{const[d,i]=o.useState(!1),r=o.useRef(null);return r.current||(r.current=document.createElement("div")),o.useEffect(()=>{const a=r.current;return e.appendChild(a),i(!0),()=>{e.removeChild(a)}},[e]),d?c.createPortal(s,r.current):null},{fn:u}=__STORYBOOK_MODULE_TEST__,b={title:"Utilities/Portal",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:u()}},n=()=>{const[s,e]=o.useState(!1);return t.createElement("div",{style:{padding:"2rem"}},t.createElement("button",{onClick:()=>e(!0)},"Open Portal"),s&&t.createElement(l,null,t.createElement("div",{style:{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"2rem",background:"white",boxShadow:"0 4px 20px rgba(0,0,0,0.2)",zIndex:9999,borderRadius:"0.5rem"}},t.createElement("p",null,"This content is rendered in a Portal"),t.createElement("button",{onClick:()=>e(!1)},"Close"))))};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <div style={{
    padding: "2rem"
  }}>\r
      <button onClick={() => setIsOpen(true)}>Open Portal</button>\r
\r
      {isOpen && <Portal>\r
          <div style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        padding: "2rem",
        background: "white",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        zIndex: 9999,
        borderRadius: "0.5rem"
      }}>\r
            <p>This content is rendered in a Portal</p>\r
            <button onClick={() => setIsOpen(false)}>Close</button>\r
          </div>\r
        </Portal>}\r
    </div>;
}`,...n.parameters?.docs?.source}}};const g=["Default"];export{n as Default,g as __namedExportsOrder,b as default};
