import{e as r,r as i}from"./iframe-BgPDq8p8.js";import{G as o}from"./iconBase-JlL7C29_.js";function d(e){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(e)}function m(e){return o({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"6",x2:"6",y2:"18"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"18",y2:"18"},child:[]}]})(e)}const n=({value:e,onChange:a,onClear:c,placeholder:l="Search...",className:s=""})=>r.createElement("div",{className:`search-input ${s}`},r.createElement(d,{className:"search-icon"}),r.createElement("input",{type:"text",value:e,onChange:u=>a(u.target.value),placeholder:l}),e&&r.createElement("button",{className:"clear-button",onClick:c,"aria-label":"Clear search"},r.createElement(m,null)));n.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{placeholder:{defaultValue:{value:'"Search..."',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const{fn:p}=__STORYBOOK_MODULE_TEST__,f={title:"Search/SearchInput",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:p()}},t=()=>{const[e,a]=i.useState("");return r.createElement("div",{style:{maxWidth:"400px",margin:"2rem auto"}},r.createElement(n,{value:e,onChange:a,onClear:()=>a(""),placeholder:"Search items..."}),r.createElement("p",{style:{marginTop:"1rem"}},"Query: ",e))};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [query, setQuery] = useState("");
  return <div style={{
    maxWidth: "400px",
    margin: "2rem auto"
  }}>\r
      <SearchInput value={query} onChange={setQuery} onClear={() => setQuery("")} placeholder="Search items..." />\r
      <p style={{
      marginTop: "1rem"
    }}>Query: {query}</p>\r
    </div>;
}`,...t.parameters?.docs?.source}}};const g=["Default"];export{t as Default,g as __namedExportsOrder,f as default};
