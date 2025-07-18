import{e,r as s}from"./iframe-BgPDq8p8.js";import{s as m,t as c,u}from"./index-DgaptyLu.js";import"./iconBase-JlL7C29_.js";const h=[{value:"light",label:"Light",icon:e.createElement(m,null)},{value:"dark",label:"Dark",icon:e.createElement(c,null)},{value:"system",label:"System",icon:e.createElement(u,null)}],l=({currentTheme:n="system",onChange:r})=>e.createElement("div",{className:"theme-selector"},e.createElement("select",{className:"theme-select",value:n,onChange:t=>r?.(t.target.value)},h.map(t=>e.createElement("option",{key:t.value,value:t.value},t.label))));l.__docgenInfo={description:"",methods:[],displayName:"ThemeSelector",props:{currentTheme:{defaultValue:{value:'"system"',computed:!1},required:!1}}};const{fn:d}=__STORYBOOK_MODULE_TEST__,T={title:"Utilities/ThemeSelector",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:d()}},a=()=>{const[n,r]=s.useState("system"),t=o=>{r(o),document.documentElement.setAttribute("data-theme",o)};return e.createElement("div",{style:{maxWidth:"250px"}},e.createElement("p",null,"Current theme: ",n),e.createElement(l,{currentTheme:n,onChange:t}))};a.__docgenInfo={description:"",methods:[],displayName:"Default"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [theme, setTheme] = useState("system");
  const handleThemeChange = value => {
    setTheme(value);
    document.documentElement.setAttribute("data-theme", value); // Or trigger your theme logic
  };
  return <div style={{
    maxWidth: "250px"
  }}>\r
      <p>Current theme: {theme}</p>\r
      <ThemeSelector currentTheme={theme} onChange={handleThemeChange} />\r
    </div>;
}`,...a.parameters?.docs?.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,T as default};
