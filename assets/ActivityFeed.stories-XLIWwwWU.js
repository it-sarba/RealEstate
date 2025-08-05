import{e}from"./iframe-BDDuDnDY.js";import{P as a}from"./index-D3zwYjk_.js";import{F as n,a as m,b as l,c as p}from"./index-CFmvXXJ6.js";import"./iconBase-ASH6A7P_.js";const o=({activities:r=[],variant:s="default"})=>e.createElement("ul",{className:`activity-feed ${s==="compact"?"compact":""}`},r.map((t,c)=>e.createElement("li",{key:c,className:"activity-item"},e.createElement("div",{className:"activity-avatar"},t.icon?e.createElement("span",{className:"activity-icon"},t.icon):e.createElement("img",{src:t.avatar,alt:`${t.text} avatar`})),e.createElement("div",{className:"activity-content"},t.type&&e.createElement("span",{className:"activity-type"},t.type),e.createElement("p",{className:"activity-text"},t.text),e.createElement("span",{className:"activity-time"},t.time)))));o.propTypes={activities:a.arrayOf(a.shape({avatar:a.string,text:a.string.isRequired,time:a.string.isRequired,icon:a.element,type:a.string})),variant:a.oneOf(["default","compact"])};o.__docgenInfo={description:"",methods:[],displayName:"ActivityFeed",props:{activities:{defaultValue:{value:"[]",computed:!1},description:"",type:{name:"arrayOf",value:{name:"shape",value:{avatar:{name:"string",required:!1},text:{name:"string",required:!0},time:{name:"string",required:!0},icon:{name:"element",required:!1},type:{name:"string",required:!1}}}},required:!1},variant:{defaultValue:{value:"'default'",computed:!1},description:"",type:{name:"enum",value:[{value:"'default'",computed:!1},{value:"'compact'",computed:!1}]},required:!1}}};const g={title:"User/ActivityFeed",component:o,parameters:{layout:"centered",docs:{description:{component:`
A customizable activity feed component displaying user activities with avatars, icons, and timestamps. 
Supports different variants ('default' or 'compact') and customizable background colors.

### Sample Data
Below is the sample data used in the stories to demonstrate the component's functionality:

\`\`\`javascript
import { FaUserPlus, FaCommentDots, FaFileUpload, FaStar } from 'react-icons/fa';


const sampleActivities = [
  {
    avatar: 'https://i.pravatar.cc/100?img=12',
    text: 'Jane Doe joined the platform.',
    time: '2 minutes ago',
    icon: <FaUserPlus />,
    type: 'New User',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=7',
    text: 'John Smith commented on your post.',
    time: '10 minutes ago',
    icon: <FaCommentDots />,
    type: 'Comment',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=4', 
    text: 'Alice Cooper uploaded a file.',
    time: '1 hour ago',
    icon: <FaFileUpload />,
    type: 'Upload',
  },
  {
    avatar: 'https://i.pravatar.cc/100?img=9',
    text: 'Bob Wilson rated your content 5 stars.',
    time: '3 hours ago',
    icon: <FaStar />,
    type: 'Rating',
  },
];
\`\`\`
        `}}},tags:["autodocs"],argTypes:{backgroundColor:{control:"color",description:"Background color of the activity feed container"},variant:{control:{type:"select",options:["default","compact"]},description:"Display variant of the activity feed"},activities:{control:"object",description:"Array of activity objects containing avatar, text, time, icon, and type"}},args:{onClick:()=>console.log("Feed item clicked")}},d=[{avatar:"https://i.pravatar.cc/100?img=12",text:"Jane Doe joined the platform.",time:"2 minutes ago",icon:e.createElement(n,null),type:"New User"},{avatar:"https://i.pravatar.cc/100?img=7",text:"John Smith commented on your post.",time:"10 minutes ago",icon:e.createElement(m,null),type:"Comment"},{avatar:"https://i.pravatar.cc/100?img=4",text:"Alice Cooper uploaded a file.",time:"1 hour ago",icon:e.createElement(l,null),type:"Upload"},{avatar:"https://i.pravatar.cc/100?img=9",text:"Bob Wilson rated your content 5 stars.",time:"3 hours ago",icon:e.createElement(p,null),type:"Rating"}],i=()=>e.createElement(o,{activities:d});i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"() => <ActivityFeed activities={sampleActivities} />",...i.parameters?.docs?.source}}};const h=["Default"];export{i as Default,h as __namedExportsOrder,g as default};
