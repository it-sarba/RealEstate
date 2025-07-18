import{e as r,r as u}from"./iframe-BgPDq8p8.js";class l extends r.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.setState({errorInfo:t}),this.props.onError&&this.props.onError(e,t)}handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})};render(){const{hasError:e,error:t}=this.state,{fallback:a,children:i}=this.props;return e?a?typeof a=="function"?a({error:t,reset:this.handleReset}):a:r.createElement("div",{style:{padding:"2rem",color:"#b91c1c",textAlign:"center"}},r.createElement("h2",null,"Something went wrong."),r.createElement("pre",null,t?.message),r.createElement("button",{onClick:this.handleReset,style:{marginTop:"1rem"}},"Try Again")):i}}l.__docgenInfo={description:"",methods:[{name:"handleReset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary"};const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Utilities/ErrorBoundary",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:m()}},c=()=>{const[s,e]=u.useState(!1);if(s)throw new Error("Test error triggered!");return r.createElement("button",{onClick:()=>e(!0)},"Trigger Error")},o=()=>r.createElement(l,null,r.createElement(c,null)),n=()=>r.createElement(l,{fallback:({error:s,reset:e})=>r.createElement("div",{style:{color:"#dc2626",textAlign:"center"}},r.createElement("h2",null,"Custom Error UI"),r.createElement("p",null,s.message),r.createElement("button",{onClick:e},"Reset"))},r.createElement(c,null));o.__docgenInfo={description:"",methods:[],displayName:"Default"};n.__docgenInfo={description:"",methods:[],displayName:"WithCustomFallback"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => <ErrorBoundary>\r
    <BuggyComponent />\r
  </ErrorBoundary>`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => <ErrorBoundary fallback={({
  error,
  reset
}) => <div style={{
  color: "#dc2626",
  textAlign: "center"
}}>\r
        <h2>Custom Error UI</h2>\r
        <p>{error.message}</p>\r
        <button onClick={reset}>Reset</button>\r
      </div>}>\r
    <BuggyComponent />\r
  </ErrorBoundary>`,...n.parameters?.docs?.source}}};const E=["Default","WithCustomFallback"];export{o as Default,n as WithCustomFallback,E as __namedExportsOrder,p as default};
