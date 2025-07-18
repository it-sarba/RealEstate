import{e as r}from"./iframe-BgPDq8p8.js";const l=({children:t,height:a="200px",width:o="100%",className:s="",style:c={}})=>r.createElement("div",{className:`scroll-area ${s}`,style:{height:a,width:o,...c}},t);l.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{height:{defaultValue:{value:'"200px"',computed:!1},required:!1},width:{defaultValue:{value:'"100%"',computed:!1},required:!1},className:{defaultValue:{value:'""',computed:!1},required:!1},style:{defaultValue:{value:"{}",computed:!1},required:!1}}};const{fn:d}=__STORYBOOK_MODULE_TEST__,i={title:"Utilities/ScrollArea",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:d()}},e=()=>r.createElement(l,{height:"150px",width:"300px"},r.createElement("div",{style:{padding:"1rem"}},[...Array(20)].map((t,a)=>r.createElement("p",{key:a},"Scrollable content line ",a+1))));e.__docgenInfo={description:"",methods:[],displayName:"Default"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => <ScrollArea height="150px" width="300px">\r
    <div style={{
    padding: "1rem"
  }}>\r
      {[...Array(20)].map((_, i) => <p key={i}>Scrollable content line {i + 1}</p>)}\r
    </div>\r
  </ScrollArea>`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,i as default};
