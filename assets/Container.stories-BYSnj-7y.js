import{e}from"./iframe-BgPDq8p8.js";import{P as d}from"./index-CPaJQx2l.js";import{c as l}from"./index-Cr_BWrUE.js";const n=({children:o,className:s,maxWidth:c="1200px",padding:i="1rem",...m})=>e.createElement("div",{className:l("container",s),style:{maxWidth:c,paddingLeft:i,paddingRight:i},...m},o);n.propTypes={children:d.node,className:d.string,maxWidth:d.string,padding:d.string};n.__docgenInfo={description:"",methods:[],displayName:"Container",props:{maxWidth:{defaultValue:{value:'"1200px"',computed:!1},description:"",type:{name:"string"},required:!1},padding:{defaultValue:{value:'"1rem"',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const{fn:p}=__STORYBOOK_MODULE_TEST__,h={title:"Layout/Container",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:p()}},r=()=>e.createElement(n,null,e.createElement("div",{style:{backgroundColor:"#e3f2fd",padding:"2rem",textAlign:"center"}},"This is a default container with 1200px max width and 1rem horizontal padding.")),t=()=>e.createElement(n,{maxWidth:"800px"},e.createElement("div",{style:{backgroundColor:"#ffe0b2",padding:"2rem",textAlign:"center"}},"Custom container with 800px max width.")),a=()=>e.createElement(n,{padding:"2rem"},e.createElement("div",{style:{backgroundColor:"#dcedc8",padding:"2rem",textAlign:"center"}},"Container with 2rem padding on left and right."));r.__docgenInfo={description:"",methods:[],displayName:"Default"};t.__docgenInfo={description:"",methods:[],displayName:"CustomMaxWidth"};a.__docgenInfo={description:"",methods:[],displayName:"FluidPadding"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => <Container>\r
    <div style={{
    backgroundColor: "#e3f2fd",
    padding: "2rem",
    textAlign: "center"
  }}>\r
      This is a default container with 1200px max width and 1rem horizontal padding.\r
    </div>\r
  </Container>`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Container maxWidth="800px">\r
    <div style={{
    backgroundColor: "#ffe0b2",
    padding: "2rem",
    textAlign: "center"
  }}>\r
      Custom container with 800px max width.\r
    </div>\r
  </Container>`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => <Container padding="2rem">\r
    <div style={{
    backgroundColor: "#dcedc8",
    padding: "2rem",
    textAlign: "center"
  }}>\r
      Container with 2rem padding on left and right.\r
    </div>\r
  </Container>`,...a.parameters?.docs?.source}}};const x=["Default","CustomMaxWidth","FluidPadding"];export{t as CustomMaxWidth,r as Default,a as FluidPadding,x as __namedExportsOrder,h as default};
