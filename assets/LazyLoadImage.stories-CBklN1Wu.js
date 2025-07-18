import{r as s,e}from"./iframe-BgPDq8p8.js";const r=({src:i,alt:c="",className:m="",placeholder:p=null,style:u={},...g})=>{const n=s.useRef(),[h,f]=s.useState(!1);return s.useEffect(()=>{const l=n.current;if(!l)return;const o=new IntersectionObserver(([y])=>{y.isIntersecting&&(f(!0),o.unobserve(l))},{threshold:.1});return o.observe(l),()=>{o.disconnect()}},[]),e.createElement("div",{ref:n,className:`lazy-image-wrapper ${m}`,style:u},h?e.createElement("img",{src:i,alt:c,className:"lazy-image",...g}):p||e.createElement("div",{className:"lazy-placeholder"},"Loading image..."))};r.__docgenInfo={description:"",methods:[],displayName:"LazyLoadImage",props:{alt:{defaultValue:{value:'""',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},placeholder:{defaultValue:{value:"null",computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const{fn:x}=__STORYBOOK_MODULE_TEST__,L={title:"Utilities/LazyLoadImage",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:x()}},d="https://images.unsplash.com/photo-1606788075760-9c71d5ed4a90?auto=format&fit=crop&w=600&q=80",a=()=>e.createElement("div",{style:{height:"1200px",padding:"2rem"}},e.createElement("p",null,"Scroll down to load the image..."),e.createElement("div",{style:{marginTop:"1000px"}},e.createElement(r,{src:d,alt:"Lazy Loaded Example",style:{width:"300px"}}))),t=()=>e.createElement("div",{style:{marginTop:"1000px"}},e.createElement(r,{src:d,alt:"With placeholder",placeholder:e.createElement("div",{style:{width:"300px",height:"200px",backgroundColor:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280"}},"Placeholder..."),style:{width:"300px",height:"200px"}}));a.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"WithCustomPlaceholder"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <div style={{
  height: "1200px",
  padding: "2rem"
}}>\r
    <p>Scroll down to load the image...</p>\r
    <div style={{
    marginTop: "1000px"
  }}>\r
      <LazyLoadImage src={imageUrl} alt="Lazy Loaded Example" style={{
      width: "300px"
    }} />\r
    </div>\r
  </div>`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <div style={{
  marginTop: "1000px"
}}>\r
    <LazyLoadImage src={imageUrl} alt="With placeholder" placeholder={<div style={{
    width: "300px",
    height: "200px",
    backgroundColor: "#e5e7eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b7280"
  }}>\r
          Placeholder...\r
        </div>} style={{
    width: "300px",
    height: "200px"
  }} />\r
  </div>`,...t.parameters?.docs?.source}}};const E=["Default","WithCustomPlaceholder"];export{a as Default,t as WithCustomPlaceholder,E as __namedExportsOrder,L as default};
