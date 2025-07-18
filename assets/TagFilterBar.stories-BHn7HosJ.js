import{r as u,e as t}from"./iframe-BgPDq8p8.js";const i=({tags:n=[],multiple:c=!1,selected:o=[],onChange:a,clearable:m=!0})=>{const[s,d]=u.useState(o),g=e=>{let l;c?s.includes(e)?l=s.filter(f=>f!==e):l=[...s,e]:l=s.includes(e)?[]:[e],d(l),a&&a(l)},p=()=>{d([]),a&&a([])};return t.createElement("div",{className:"tag-filter-bar"},t.createElement("div",{className:"tag-list"},n.map(e=>t.createElement("button",{key:e,className:`tag-pill ${s.includes(e)?"selected":""}`,onClick:()=>g(e)},e))),m&&s.length>0&&t.createElement("button",{className:"clear-btn",onClick:p},"Clear"))};i.__docgenInfo={description:"",methods:[],displayName:"TagFilterBar",props:{tags:{defaultValue:{value:"[]",computed:!1},required:!1},multiple:{defaultValue:{value:"false",computed:!1},required:!1},selected:{defaultValue:{value:"[]",computed:!1},required:!1},clearable:{defaultValue:{value:"true",computed:!1},required:!1}}};const{fn:T}=__STORYBOOK_MODULE_TEST__,_={title:"Search/TagFilterBar",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:T()}},r=()=>{const[n,c]=u.useState([]),o=["Design","Development","Marketing","Sales","HR","Product"];return t.createElement("div",{style:{maxWidth:500,padding:"1rem"}},t.createElement(i,{tags:o,multiple:!0,selected:[],onChange:a=>c(a)}),t.createElement("p",{style:{marginTop:"1rem"}},"Selected Tags: ",n.length?n.join(", "):"None"))};r.__docgenInfo={description:"",methods:[],displayName:"Default"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [activeTags, setActiveTags] = useState([]);
  const tags = ["Design", "Development", "Marketing", "Sales", "HR", "Product"];
  return <div style={{
    maxWidth: 500,
    padding: "1rem"
  }}>\r
      <TagFilterBar tags={tags} multiple={true} selected={[]} onChange={tags => setActiveTags(tags)} />\r
      <p style={{
      marginTop: "1rem"
    }}>\r
        Selected Tags: {activeTags.length ? activeTags.join(", ") : "None"}\r
      </p>\r
    </div>;
}`,...r.parameters?.docs?.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,_ as default};
