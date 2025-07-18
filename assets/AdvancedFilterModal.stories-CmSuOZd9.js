import{r as u,e}from"./iframe-BgPDq8p8.js";const m=({isOpen:c,onClose:n,onApply:o,filters:d=[]})=>{const[l,p]=u.useState({}),i=(t,a)=>{p(s=>({...s,[t]:a}))},v=(t,a)=>{const s=l[t]||[],b=s.includes(a)?s.filter(E=>E!==a):[...s,a];i(t,b)},f=()=>{p({})};return c?e.createElement("div",{className:"af-modal-backdrop"},e.createElement("div",{className:"af-modal"},e.createElement("h2",{className:"af-title"},"Advanced Filters"),e.createElement("div",{className:"af-content"},d.map(t=>e.createElement("div",{key:t.name,className:"af-section"},e.createElement("h4",{className:"af-section-title"},t.label),t.type==="checkbox"&&e.createElement("div",{className:"af-options"},t.options.map(a=>e.createElement("label",{key:a.value,className:"af-option"},e.createElement("input",{type:"checkbox",checked:l[t.name]?.includes(a.value)||!1,onChange:()=>v(t.name,a.value)}),a.label))),t.type==="radio"&&e.createElement("div",{className:"af-options"},t.options.map(a=>e.createElement("label",{key:a.value,className:"af-option"},e.createElement("input",{type:"radio",name:t.name,value:a.value,checked:l[t.name]===a.value,onChange:()=>i(t.name,a.value)}),a.label))),t.type==="text"&&e.createElement("input",{type:"text",className:"af-text-input",placeholder:t.placeholder||"",value:l[t.name]||"",onChange:a=>i(t.name,a.target.value)})))),e.createElement("div",{className:"af-footer"},e.createElement("button",{className:"af-btn af-reset",onClick:f},"Reset"),e.createElement("button",{className:"af-btn af-cancel",onClick:n},"Cancel"),e.createElement("button",{className:"af-btn af-apply",onClick:()=>o(l)},"Apply")))):null};m.__docgenInfo={description:"",methods:[],displayName:"AdvancedFilterModal",props:{filters:{defaultValue:{value:"[]",computed:!1},required:!1}}};const{fn:y}=__STORYBOOK_MODULE_TEST__,N={title:"Search/AdvancedFilterModal",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:y()}},h=[{name:"status",label:"Status",type:"checkbox",options:[{label:"Active",value:"active"},{label:"Pending",value:"pending"},{label:"Archived",value:"archived"}]},{name:"sort",label:"Sort Order",type:"radio",options:[{label:"Newest",value:"newest"},{label:"Oldest",value:"oldest"}]},{name:"keyword",label:"Keyword",type:"text",placeholder:"Search term..."}],r=()=>{const[c,n]=u.useState(!1),[o,d]=u.useState(null);return e.createElement("div",null,e.createElement("button",{onClick:()=>n(!0)},"Open Advanced Filter Modal"),e.createElement(m,{isOpen:c,onClose:()=>n(!1),onApply:l=>{d(l),n(!1)},filters:h}),o&&e.createElement("div",{style:{marginTop:"1rem"}},e.createElement("strong",null,"Selected Filters:"),e.createElement("pre",null,JSON.stringify(o,null,2))))};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [open, setOpen] = useState(false);
  const [filtersResult, setFiltersResult] = useState(null);
  return <div>\r
      <button onClick={() => setOpen(true)}>Open Advanced Filter Modal</button>\r
\r
      <AdvancedFilterModal isOpen={open} onClose={() => setOpen(false)} onApply={values => {
      setFiltersResult(values);
      setOpen(false);
    }} filters={filters} />\r
\r
      {filtersResult && <div style={{
      marginTop: "1rem"
    }}>\r
          <strong>Selected Filters:</strong>\r
          <pre>{JSON.stringify(filtersResult, null, 2)}</pre>\r
        </div>}\r
    </div>;
}`,...r.parameters?.docs?.source}}};const k=["Default"];export{r as Default,k as __namedExportsOrder,N as default};
