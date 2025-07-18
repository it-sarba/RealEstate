import{e as a,r as l}from"./iframe-BgPDq8p8.js";const s=[{code:"en",label:"English",emoji:"🇺🇸"},{code:"fr",label:"Français",emoji:"🇫🇷"},{code:"es",label:"Español",emoji:"🇪🇸"},{code:"de",label:"Deutsch",emoji:"🇩🇪"},{code:"ja",label:"日本語",emoji:"🇯🇵"}],r=({currentLang:n="en",onChange:o})=>a.createElement("div",{className:"language-selector"},a.createElement("select",{value:n,onChange:e=>o?.(e.target.value),className:"language-select"},s.map(e=>a.createElement("option",{key:e.code,value:e.code},e.emoji," ",e.label))));r.__docgenInfo={description:"",methods:[],displayName:"LanguageSelector",props:{currentLang:{defaultValue:{value:'"en"',computed:!1},required:!1}}};const{fn:c}=__STORYBOOK_MODULE_TEST__,u={title:"Utilities/LanguageSelector",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:c()}},t=()=>{const[n,o]=l.useState("en");return a.createElement("div",{style:{maxWidth:"300px"}},a.createElement("p",null,"Selected language: ",n),a.createElement(r,{currentLang:n,onChange:o}))};t.__docgenInfo={description:"",methods:[],displayName:"Default"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [lang, setLang] = useState("en");
  return <div style={{
    maxWidth: "300px"
  }}>\r
      <p>Selected language: {lang}</p>\r
      <LanguageSelector currentLang={lang} onChange={setLang} />\r
    </div>;
}`,...t.parameters?.docs?.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,u as default};
