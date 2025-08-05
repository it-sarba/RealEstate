import{e as s}from"./iframe-BDDuDnDY.js";import{P as e}from"./index-D3zwYjk_.js";const v=({logs:r=[],maxHeight:a="400px",showTimestamp:h=!0,showLevel:b=!0,className:y="",emptyMessage:w="No logs available"})=>r.length===0?s.createElement("div",{className:`log-viewer log-viewer--empty ${y}`},s.createElement("div",{className:"log-empty-message"},w)):s.createElement("div",{className:`log-viewer ${y}`,style:{maxHeight:a},role:"log","aria-label":"Application logs"},r.map((t,x)=>s.createElement("div",{key:x,className:`log-entry log-entry--${t.level||"info"}`,role:"listitem"},h&&s.createElement("span",{className:"log-timestamp",title:"Timestamp"},t.timestamp),b&&s.createElement("span",{className:"log-level",title:`Log level: ${t.level}`},"[",(t.level||"info").toUpperCase(),"]"),s.createElement("span",{className:"log-message",title:t.message},t.message))));v.propTypes={logs:e.arrayOf(e.shape({timestamp:e.string,level:e.oneOf(["info","warning","error","debug"]),message:e.string.isRequired})),maxHeight:e.string,showTimestamp:e.bool,showLevel:e.bool,className:e.string,emptyMessage:e.string};v.__docgenInfo={description:"",methods:[],displayName:"LogViewer",props:{logs:{defaultValue:{value:"[]",computed:!1},description:"Array of log objects containing timestamp, level, and message",type:{name:"arrayOf",value:{name:"shape",value:{timestamp:{name:"string",description:"ISO timestamp or formatted date string",required:!1},level:{name:"enum",value:[{value:"'info'",computed:!1},{value:"'warning'",computed:!1},{value:"'error'",computed:!1},{value:"'debug'",computed:!1}],description:"Log severity level: 'info', 'warning', 'error', or 'debug'",required:!1},message:{name:"string",description:"The log message content",required:!0}}}},required:!1},maxHeight:{defaultValue:{value:'"400px"',computed:!1},description:"Maximum height of the log container before scrolling",type:{name:"string"},required:!1},showTimestamp:{defaultValue:{value:"true",computed:!1},description:"Whether to display timestamps",type:{name:"bool"},required:!1},showLevel:{defaultValue:{value:"true",computed:!1},description:"Whether to display log levels",type:{name:"bool"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Additional CSS classes",type:{name:"string"},required:!1},emptyMessage:{defaultValue:{value:'"No logs available"',computed:!1},description:"Message to show when no logs are available",type:{name:"string"},required:!1}}};const T={title:"System/LogViewer",component:v,parameters:{layout:"centered",docs:{description:{component:`
The LogViewer component is designed for displaying formatted log entries in development and monitoring interfaces. 

## Features
- **Color-coded log levels**: Visual distinction between info, warning, error, and debug messages
- **Scrollable container**: Handles large log datasets efficiently
- **Responsive design**: Adapts to different screen sizes
- **Accessibility**: Proper ARIA labels and semantic HTML
- **Customizable**: Control visibility of timestamps, levels, and container height

## Usage
\`\`\`jsx
import { LogViewer } from './LogViewer';

const logs = [
  {
    timestamp: "2025-07-14 10:03:12",
    level: "info",
    message: "Server started successfully"
  }
];

<LogViewer logs={logs} />
\`\`\`
        `}}},tags:["autodocs"],argTypes:{logs:{description:"Array of log objects",control:{type:"object"}},maxHeight:{description:"Maximum height before scrolling",control:{type:"text"}},showTimestamp:{description:"Show/hide timestamps",control:{type:"boolean"}},showLevel:{description:"Show/hide log levels",control:{type:"boolean"}},className:{description:"Additional CSS classes",control:{type:"text"}},emptyMessage:{description:"Message when no logs available",control:{type:"text"}}}},d=[{timestamp:"2025-08-05 10:03:12",level:"info",message:"Server started successfully on port 8080"},{timestamp:"2025-08-05 10:04:45",level:"warning",message:"API response delayed by 250ms - consider optimizing database queries"},{timestamp:"2025-08-05 10:05:02",level:"error",message:"Failed to connect to database: Connection timeout after 30 seconds"},{timestamp:"2025-08-05 10:05:33",level:"debug",message:"Token verified successfully: user_id=12345, role=admin, expires_in=3600s"},{timestamp:"2025-08-05 10:06:15",level:"info",message:"User authentication successful for user@example.com"},{timestamp:"2025-08-05 10:07:22",level:"warning",message:"Memory usage above 80% threshold (current: 85.3%)"}],L=Array.from({length:50},(r,a)=>({timestamp:new Date(Date.now()-(50-a)*6e4).toISOString().replace("T"," ").slice(0,19),level:["info","warning","error","debug"][a%4],message:`Log entry ${a+1}: ${["System operation completed","Performance degradation detected","Critical error occurred","Debug information"][a%4]}`})),S=[{timestamp:"2025-08-05 14:30:15",level:"error",message:"Database connection failed: ECONNREFUSED 127.0.0.1:5432"},{timestamp:"2025-08-05 14:30:16",level:"error",message:"Retrying database connection... (attempt 1/3)"},{timestamp:"2025-08-05 14:30:21",level:"error",message:"Retrying database connection... (attempt 2/3)"},{timestamp:"2025-08-05 14:30:26",level:"error",message:"All retry attempts failed. Service unavailable."}],o={args:{logs:d,maxHeight:"400px",showTimestamp:!0,showLevel:!0,className:"",emptyMessage:"No logs available"}},n={args:{logs:[],emptyMessage:"No logs to display"}},i={args:{logs:d,showTimestamp:!1,showLevel:!0}},l={args:{logs:d,showTimestamp:!1,showLevel:!1}},m={args:{logs:S,maxHeight:"300px"}},c={args:{logs:L,maxHeight:"300px"}},g={args:{logs:d.slice(0,3),maxHeight:"200px"}},p={args:{logs:[{timestamp:"2025-08-05 10:00:00",level:"info",message:"Application started successfully"},{timestamp:"2025-08-05 10:01:30",level:"info",message:"Health check passed - all services operational"},{timestamp:"2025-08-05 10:03:45",level:"info",message:"User session created: session_id=abc123"}]}},u={args:{logs:[{timestamp:"2025-08-05 15:20:10",level:"debug",message:"Function entry: processUserRequest(userId=12345)"},{timestamp:"2025-08-05 15:20:11",level:"debug",message:"Database query executed: SELECT * FROM users WHERE id = $1"},{timestamp:"2025-08-05 15:20:12",level:"debug",message:"Query result: 1 row returned in 23ms"},{timestamp:"2025-08-05 15:20:13",level:"debug",message:"Function exit: processUserRequest() -> success"}]}},f={args:{logs:d.slice(0,4),className:"custom-log-viewer",maxHeight:"350px"},decorators:[r=>s.createElement("div",null,s.createElement("style",null,`
            .custom-log-viewer {
              border: 2px solid #0f2a55ff;
              border-radius: 16px;
              background: linear-gradient(45deg, #1e3a8a, #1e40af) !important;
            }
          `),s.createElement(r,null))]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs,
    maxHeight: "400px",
    showTimestamp: true,
    showLevel: true,
    className: "",
    emptyMessage: "No logs available"
  }
}`,...o.parameters?.docs?.source},description:{story:"Default story showing all log levels with typical system messages",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    logs: [],
    emptyMessage: "No logs to display"
  }
}`,...n.parameters?.docs?.source},description:{story:"Empty state when no logs are provided",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs,
    showTimestamp: false,
    showLevel: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Compact view without timestamps for space-constrained interfaces",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs,
    showTimestamp: false,
    showLevel: false
  }
}`,...l.parameters?.docs?.source},description:{story:"Minimal view showing only messages",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    logs: errorLogs,
    maxHeight: "300px"
  }
}`,...m.parameters?.docs?.source},description:{story:"Error-focused logs for debugging critical issues",...m.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    logs: largeLogs,
    maxHeight: "300px"
  }
}`,...c.parameters?.docs?.source},description:{story:"Large dataset demonstrating scrolling behavior",...c.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs.slice(0, 3),
    maxHeight: "200px"
  }
}`,...g.parameters?.docs?.source},description:{story:"Compact height for dashboard widgets",...g.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logs: [{
      timestamp: "2025-08-05 10:00:00",
      level: "info",
      message: "Application started successfully"
    }, {
      timestamp: "2025-08-05 10:01:30",
      level: "info",
      message: "Health check passed - all services operational"
    }, {
      timestamp: "2025-08-05 10:03:45",
      level: "info",
      message: "User session created: session_id=abc123"
    }]
  }
}`,...p.parameters?.docs?.source},description:{story:"Info-only logs for general monitoring",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    logs: [{
      timestamp: "2025-08-05 15:20:10",
      level: "debug",
      message: "Function entry: processUserRequest(userId=12345)"
    }, {
      timestamp: "2025-08-05 15:20:11",
      level: "debug",
      message: "Database query executed: SELECT * FROM users WHERE id = $1"
    }, {
      timestamp: "2025-08-05 15:20:12",
      level: "debug",
      message: "Query result: 1 row returned in 23ms"
    }, {
      timestamp: "2025-08-05 15:20:13",
      level: "debug",
      message: "Function exit: processUserRequest() -> success"
    }]
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    logs: sampleLogs.slice(0, 4),
    className: "custom-log-viewer",
    maxHeight: "350px"
  },
  decorators: [Story => <div>\r
        <style>\r
          {\`
            .custom-log-viewer {
              border: 2px solid #0f2a55ff;
              border-radius: 16px;
              background: linear-gradient(45deg, #1e3a8a, #1e40af) !important;
            }
          \`}\r
        </style>\r
        <Story />\r
      </div>]
}`,...f.parameters?.docs?.source}}};const H=["Default","EmptyState","WithoutTimestamps","MessagesOnly","ErrorLogs","LargeDataset","CompactHeight","InfoOnly","DebugLogs","CustomStyling"];export{g as CompactHeight,f as CustomStyling,u as DebugLogs,o as Default,n as EmptyState,m as ErrorLogs,p as InfoOnly,c as LargeDataset,l as MessagesOnly,i as WithoutTimestamps,H as __namedExportsOrder,T as default};
