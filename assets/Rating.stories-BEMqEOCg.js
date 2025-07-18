import{r as u,e as t}from"./iframe-BgPDq8p8.js";const s=({max:a=5,value:r=0,onChange:i,size:c=32})=>{const[o,l]=u.useState(null);return t.createElement("div",{className:"rating",style:{fontSize:`${c}px`}},Array.from({length:a},(g,e)=>{const d=o!==null?e<o:e<r;return t.createElement("span",{key:e,className:`star ${d?"filled":""}`,onClick:()=>i(e+1),onMouseEnter:()=>l(e+1),onMouseLeave:()=>l(null),title:`Rate ${e+1} star${e===0?"":"s"}`},"★")}))};s.__docgenInfo={description:"",methods:[],displayName:"Rating",props:{max:{defaultValue:{value:"5",computed:!1},required:!1},value:{defaultValue:{value:"0",computed:!1},required:!1},size:{defaultValue:{value:"32",computed:!1},required:!1}}};const{fn:p}=__STORYBOOK_MODULE_TEST__,f={title:"Components/Rating",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:p()}},n=()=>{const[a,r]=u.useState(4);return t.createElement("div",{style:{padding:"20px",background:"#f9fafb",borderRadius:"10px"}},t.createElement("h3",{style:{marginBottom:"10px"}},"How was your experience?"),t.createElement(s,{value:a,onChange:r,size:40}),t.createElement("p",{style:{marginTop:"12px",fontSize:"16px"}},"You rated: ",t.createElement("strong",null,a)," star",a>1&&"s"))};n.__docgenInfo={description:"",methods:[],displayName:"Default"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const [rating, setRating] = useState(4);
  return <div style={{
    padding: "20px",
    background: "#f9fafb",
    borderRadius: "10px"
  }}>\r
      <h3 style={{
      marginBottom: "10px"
    }}>How was your experience?</h3>\r
      <Rating value={rating} onChange={setRating} size={40} />\r
      <p style={{
      marginTop: "12px",
      fontSize: "16px"
    }}>\r
        You rated: <strong>{rating}</strong> star{rating > 1 && "s"}\r
      </p>\r
    </div>;
}`,...n.parameters?.docs?.source}}};const x=["Default"];export{n as Default,x as __namedExportsOrder,f as default};
