import{r as i,e}from"./iframe-BDDuDnDY.js";import"./index-RBAdP6S0.js";import"./index-DrFu-skq.js";const c=({onLogin:s})=>{const[n,l]=i.useState({email:"",password:""}),[m,y]=i.useState(!1),[d,p]=i.useState(""),[u,g]=i.useState(!1),w=a=>{l(o=>({...o,[a.target.name]:a.target.value}))},E=async a=>{a.preventDefault(),p(""),g(!0);try{const{email:o,password:h}=n;if(!o||!h)throw new Error("Both email and password are required.");await s?.({email:o,password:h})}catch(o){p(o.message||"Login failed.")}finally{g(!1)}};return e.createElement("form",{className:"login-form",onSubmit:E,noValidate:!0},e.createElement("h2",{className:"login-title"},"Welcome Back"),e.createElement("p",{className:"login-subtitle"},"Please enter your credentials to continue"),e.createElement("label",{htmlFor:"email"},"Email"),e.createElement("input",{type:"email",id:"email",name:"email",placeholder:"you@example.com",value:n.email,onChange:w,autoComplete:"email",required:!0}),e.createElement("label",{htmlFor:"password"},"Password"),e.createElement("div",{className:"password-wrapper"},e.createElement("input",{type:m?"text":"password",id:"password",name:"password",placeholder:"Enter your password",value:n.password,onChange:w,autoComplete:"current-password",required:!0}),e.createElement("button",{type:"button",className:"toggle-visibility",onClick:()=>y(a=>!a)},m?"Hide":"Show")),d&&e.createElement("div",{className:"error-message"},d),e.createElement("button",{type:"submit",className:"login-button",disabled:u},u?"Logging in...":"Login"))};c.__docgenInfo={description:"",methods:[],displayName:"LoginForm"};const F={title:"Auth/LoginForm",component:c,tags:["autodocs"],parameters:{layout:"centered",docs:{autodocs:!0,description:{component:`
The **LoginForm** is a reusable authentication component with email and password fields. 
It includes client-side validation, a password visibility toggle, and loading state feedback.

### Features
- Input validation
- Show/hide password
- Customizable login logic via \`onLogin\` prop
- Styled with a responsive, modern layout

### Usage
Use this component as part of an authentication flow or modal.

\`\`\`jsx
<LoginForm onLogin={(data) => console.log(data)} />
\`\`\`
      `},source:{type:"code"}}},argTypes:{onLogin:{description:"Callback function triggered on successful login form submit.",control:!1,action:"loginAttempted"}}},f=s=>e.createElement(c,{...s}),t=f.bind({});t.args={onLogin:async({email:s,password:n})=>{await new Promise(l=>setTimeout(l,500)),alert(`Email: ${s}
Password: ${n}`)}};t.parameters={docs:{description:{story:"Basic usage of the LoginForm with simulated `onLogin` behavior."}}};const r=f.bind({});r.args={onLogin:async()=>{throw new Error("Both fields are required.")}};r.parameters={docs:{description:{story:"Displays a validation error when fields are missing or incorrect."}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"args => <LoginForm {...args} />",...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"args => <LoginForm {...args} />",...r.parameters?.docs?.source}}};const S=["Default","ValidationError"];export{t as Default,r as ValidationError,S as __namedExportsOrder,F as default};
