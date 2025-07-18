import{e as r}from"./iframe-BgPDq8p8.js";import{P as s}from"./index-CPaJQx2l.js";import{c}from"./index-Cr_BWrUE.js";const e=({children:n,gap:a="1rem",align:o="stretch",justify:d="start",className:p})=>r.createElement("div",{className:c("grid",p),style:{gap:a,alignItems:o,justifyContent:d}},n),m=({children:n,className:a,style:o})=>r.createElement("div",{className:c("grid-row",a),style:o},n),u=({span:n=1,offset:a=0,children:o,className:d,style:p})=>r.createElement("div",{className:c("grid-col",d),style:{gridColumn:`${a?`span ${a} / span ${a+n}`:`span ${n}`}`,...p}},o);e.Row=m;e.Col=u;e.propTypes={children:s.node,gap:s.string,align:s.string,justify:s.string,className:s.string};m.propTypes={children:s.node,className:s.string,style:s.object};u.propTypes={span:s.number,offset:s.number,children:s.node,className:s.string,style:s.object};e.__docgenInfo={description:"",methods:[{name:"Row",docblock:null,modifiers:["static"],params:[{name:"{ children, className, style }",optional:!1,type:null}],returns:null},{name:"Col",docblock:null,modifiers:["static"],params:[{name:"{ span = 1, offset = 0, children, className, style }",optional:!1,type:null}],returns:null}],displayName:"Grid",props:{gap:{defaultValue:{value:'"1rem"',computed:!1},description:"",type:{name:"string"},required:!1},align:{defaultValue:{value:'"stretch"',computed:!1},description:"",type:{name:"string"},required:!1},justify:{defaultValue:{value:'"start"',computed:!1},description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1},className:{description:"",type:{name:"string"},required:!1}}};const{fn:f}=__STORYBOOK_MODULE_TEST__,y={title:"Layout/Grid",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:f()}},t=()=>r.createElement(e,{gap:"16px"},r.createElement(e.Row,null,r.createElement(e.Col,{span:4},"Column 1"),r.createElement(e.Col,{span:4},"Column 2"),r.createElement(e.Col,{span:4},"Column 3"))),l=()=>r.createElement(e,{gap:"20px"},r.createElement(e.Row,null,r.createElement(e.Col,{span:4},"Column 1"),r.createElement(e.Col,{span:4,offset:4},"Offset Column"))),i=()=>r.createElement(e,{gap:"12px"},r.createElement(e.Row,null,r.createElement(e.Col,{span:3},"3"),r.createElement(e.Col,{span:6},"6"),r.createElement(e.Col,{span:3},"3")));t.__docgenInfo={description:"",methods:[],displayName:"DefaultGrid"};l.__docgenInfo={description:"",methods:[],displayName:"WithOffset"};i.__docgenInfo={description:"",methods:[],displayName:"MixedSpans"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Grid gap="16px">\r
    <Grid.Row>\r
      <Grid.Col span={4}>Column 1</Grid.Col>\r
      <Grid.Col span={4}>Column 2</Grid.Col>\r
      <Grid.Col span={4}>Column 3</Grid.Col>\r
    </Grid.Row>\r
  </Grid>`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => <Grid gap="20px">\r
    <Grid.Row>\r
      <Grid.Col span={4}>Column 1</Grid.Col>\r
      <Grid.Col span={4} offset={4}>\r
        Offset Column\r
      </Grid.Col>\r
    </Grid.Row>\r
  </Grid>`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => <Grid gap="12px">\r
    <Grid.Row>\r
      <Grid.Col span={3}>3</Grid.Col>\r
      <Grid.Col span={6}>6</Grid.Col>\r
      <Grid.Col span={3}>3</Grid.Col>\r
    </Grid.Row>\r
  </Grid>`,...i.parameters?.docs?.source}}};const E=["DefaultGrid","WithOffset","MixedSpans"];export{t as DefaultGrid,i as MixedSpans,l as WithOffset,E as __namedExportsOrder,y as default};
