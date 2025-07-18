import{e,r as c}from"./iframe-BgPDq8p8.js";const n=({options:o=[],value:r="",onChange:l,label:s="Sort by"})=>e.createElement("div",{className:"sort-dropdown"},e.createElement("label",{className:"sort-label"},s),e.createElement("select",{className:"sort-select",value:r,onChange:t=>l(t.target.value)},o.map(t=>e.createElement("option",{key:t.value,value:t.value},t.label))));n.__docgenInfo={description:"",methods:[],displayName:"SortDropdown",props:{options:{defaultValue:{value:"[]",computed:!1},required:!1},value:{defaultValue:{value:'""',computed:!1},required:!1},label:{defaultValue:{value:'"Sort by"',computed:!1},required:!1}}};const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Search/SortDropdown",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:d()}},a=()=>{const[o,r]=c.useState("relevance"),l=[{label:"Relevance",value:"relevance"},{label:"Newest",value:"newest"},{label:"Price: Low to High",value:"price_asc"},{label:"Price: High to Low",value:"price_desc"}];return e.createElement("div",{style:{width:"250px",padding:"1rem"}},e.createElement(n,{options:l,value:o,onChange:r,label:"Sort Results"}),e.createElement("p",{style:{marginTop:"1rem"}},"Selected Sort: ",o))};a.__docgenInfo={description:"",methods:[],displayName:"Default"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const [sort, setSort] = useState("relevance");
  const options = [{
    label: "Relevance",
    value: "relevance"
  }, {
    label: "Newest",
    value: "newest"
  }, {
    label: "Price: Low to High",
    value: "price_asc"
  }, {
    label: "Price: High to Low",
    value: "price_desc"
  }];
  return <div style={{
    width: "250px",
    padding: "1rem"
  }}>\r
      <SortDropdown options={options} value={sort} onChange={setSort} label="Sort Results" />\r
      <p style={{
      marginTop: "1rem"
    }}>Selected Sort: {sort}</p>\r
    </div>;
}`,...a.parameters?.docs?.source}}};const i=["Default"];export{a as Default,i as __namedExportsOrder,p as default};
