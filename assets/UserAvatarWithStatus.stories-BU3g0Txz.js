import{r as V,e}from"./iframe-BDDuDnDY.js";import{P as t}from"./index-D3zwYjk_.js";const s=({src:z,name:b="User",size:n=48,status:_="offline",showTooltip:P=!0,onClick:o=null,loading:w=!1,showBadge:O=!1,badgeContent:k=null,variant:D="circular",borderColor:T=null,className:R="",statusPosition:A="bottom-right",showStatusText:N=!1,customFallback:U=null,gradientColors:E=null})=>{const[$,J]=V.useState(!1),[C,M]=V.useState(!1),W=(r=>r?r.trim().split(" ").map(x=>x[0]).join("").toUpperCase().slice(0,2):"U")(b),B=(r=>{if(E)return E;const x=[["#667eea","#764ba2"],["#f093fb","#f5576c"],["#4facfe","#00f2fe"],["#43e97b","#38f9d7"],["#fa709a","#fee140"],["#a8edea","#fed6e3"],["#ff9a9e","#fecfef"],["#96fbc4","#f9f586"]],Z=r.split("").reduce((i,ee)=>(i=(i<<5)-i+ee.charCodeAt(0),i&i),0);return x[Math.abs(Z)%x.length]})(b),j={online:{color:"#22c55e",label:"Online",pulse:!0},offline:{color:"#6b7280",label:"Offline",pulse:!1},away:{color:"#f59e0b",label:"Away",pulse:!1},busy:{color:"#ef4444",label:"Busy",pulse:!1},idle:{color:"#8b5cf6",label:"Idle",pulse:!1}},S=j[_]||j.offline,L=Math.max(8,n*.2),q=Math.max(2,n*.04),F=["user-avatar",`user-avatar--${D}`,`user-avatar--${A}`,w&&"user-avatar--loading",o&&"user-avatar--clickable",R].filter(Boolean).join(" "),G={width:n,height:n,borderColor:T,borderWidth:T?"2px":void 0},I={background:`linear-gradient(135deg, ${B[0]}, ${B[1]})`,fontSize:Math.max(12,n*.35)},H={width:L,height:L,backgroundColor:S.color,[A.includes("right")?"right":"left"]:q,[A.includes("bottom")?"bottom":"top"]:q},K=()=>{J(!0)},Q=()=>{M(!0)},X=()=>w?e.createElement("div",{className:"user-avatar__skeleton"}):z&&!$?e.createElement(e.Fragment,null,e.createElement("img",{src:z,alt:b,className:`user-avatar__image ${C?"loaded":""}`,onError:K,onLoad:Q}),!C&&e.createElement("div",{className:"user-avatar__fallback",style:I},U||W)):e.createElement("div",{className:"user-avatar__fallback",style:I},U||W),Y=P?`${b}${N?` • ${S.label}`:""}`:void 0;return e.createElement("div",{className:F,style:G,onClick:o,title:Y,role:o?"button":void 0,tabIndex:o?0:void 0,onKeyDown:o?r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),o(r))}:void 0},X(),e.createElement("div",{className:`user-avatar__status ${S.pulse?"pulse":""}`,style:H,"aria-label":`Status: ${S.label}`}),O&&k&&e.createElement("div",{className:"user-avatar__badge"},k),w&&e.createElement("div",{className:"user-avatar__loading-overlay"}))};s.propTypes={src:t.string,name:t.string,size:t.number,status:t.oneOf(["online","offline","away","busy","idle"]),showTooltip:t.bool,onClick:t.func,loading:t.bool,showBadge:t.bool,badgeContent:t.oneOfType([t.string,t.number]),variant:t.oneOf(["circular","rounded","square"]),borderColor:t.string,className:t.string,statusPosition:t.oneOf(["top-left","top-right","bottom-left","bottom-right"]),showStatusText:t.bool,customFallback:t.node,gradientColors:t.arrayOf(t.string)};s.__docgenInfo={description:`UserAvatarWithStatus component displays user profile pictures with online status indicators.\r
Perfect for user interfaces, chat applications, team directories, and collaboration tools.\r
\r
Features:\r
- Automatic fallback to initials when no image is provided\r
- Status indicators with smooth animations\r
- Multiple size variants and custom sizing\r
- Hover effects and tooltips\r
- Loading states and error handling\r
- Click handlers for user interactions\r
- Badge support for notifications`,methods:[],displayName:"UserAvatarWithStatus",props:{name:{defaultValue:{value:'"User"',computed:!1},description:"User's full name",type:{name:"string"},required:!1},size:{defaultValue:{value:"48",computed:!1},description:"Avatar size in pixels",type:{name:"number"},required:!1},status:{defaultValue:{value:'"offline"',computed:!1},description:"User's online status",type:{name:"enum",value:[{value:"'online'",computed:!1},{value:"'offline'",computed:!1},{value:"'away'",computed:!1},{value:"'busy'",computed:!1},{value:"'idle'",computed:!1}]},required:!1},showTooltip:{defaultValue:{value:"true",computed:!1},description:"Whether to show tooltip on hover",type:{name:"bool"},required:!1},onClick:{defaultValue:{value:"null",computed:!1},description:"Click handler function",type:{name:"func"},required:!1},loading:{defaultValue:{value:"false",computed:!1},description:"Loading state",type:{name:"bool"},required:!1},showBadge:{defaultValue:{value:"false",computed:!1},description:"Whether to show notification badge",type:{name:"bool"},required:!1},badgeContent:{defaultValue:{value:"null",computed:!1},description:"Content for the notification badge",type:{name:"union",value:[{name:"string"},{name:"number"}]},required:!1},variant:{defaultValue:{value:'"circular"',computed:!1},description:"Avatar shape variant",type:{name:"enum",value:[{value:"'circular'",computed:!1},{value:"'rounded'",computed:!1},{value:"'square'",computed:!1}]},required:!1},borderColor:{defaultValue:{value:"null",computed:!1},description:"Custom border color",type:{name:"string"},required:!1},className:{defaultValue:{value:'""',computed:!1},description:"Additional CSS classes",type:{name:"string"},required:!1},statusPosition:{defaultValue:{value:'"bottom-right"',computed:!1},description:"Position of status indicator",type:{name:"enum",value:[{value:"'top-left'",computed:!1},{value:"'top-right'",computed:!1},{value:"'bottom-left'",computed:!1},{value:"'bottom-right'",computed:!1}]},required:!1},showStatusText:{defaultValue:{value:"false",computed:!1},description:"Whether to show status text in tooltip",type:{name:"bool"},required:!1},customFallback:{defaultValue:{value:"null",computed:!1},description:"Custom fallback content instead of initials",type:{name:"node"},required:!1},gradientColors:{defaultValue:{value:"null",computed:!1},description:"Custom gradient colors [startColor, endColor]",type:{name:"arrayOf",value:{name:"string"}},required:!1},src:{description:"Image source URL",type:{name:"string"},required:!1}}};const oe={title:"User/UserAvatarWithStatus",component:s,parameters:{layout:"centered",docs:{description:{component:`
The UserAvatarWithStatus component displays user profile pictures with online status indicators and additional features.

## Features
- **Automatic fallbacks**: Shows initials with gradient backgrounds when no image is provided
- **Status indicators**: Visual indicators for online, offline, away, busy, and idle states
- **Multiple variants**: Circular, rounded, and square avatar shapes
- **Interactive**: Optional click handlers with proper accessibility
- **Badges**: Notification badges for unread messages or alerts
- **Loading states**: Built-in loading animations and error handling
- **Responsive**: Adapts to different sizes and screen resolutions

## Usage
\`\`\`jsx

<UserAvatarWithStatus
  name="Jane Doe"
  src="https://example.com/avatar.jpg"
  status="online"
  size={48}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{src:{description:"Image source URL",control:{type:"text"}},name:{description:"User's full name",control:{type:"text"}},size:{description:"Avatar size in pixels",control:{type:"range",min:24,max:200,step:4}},status:{description:"User's online status",control:{type:"select"},options:["online","offline","away","busy","idle"]},showTooltip:{description:"Whether to show tooltip on hover",control:{type:"boolean"}},onClick:{description:"Click handler function",action:"clicked"},loading:{description:"Loading state",control:{type:"boolean"}},showBadge:{description:"Whether to show notification badge",control:{type:"boolean"}},badgeContent:{description:"Content for the notification badge",control:{type:"text"}},variant:{description:"Avatar shape variant",control:{type:"select"},options:["circular","rounded","square"]},borderColor:{description:"Custom border color",control:{type:"color"}},statusPosition:{description:"Position of status indicator",control:{type:"select"},options:["top-left","top-right","bottom-left","bottom-right"]},showStatusText:{description:"Whether to show status text in tooltip",control:{type:"boolean"}}}},a={jane:"https://images.unsplash.com/photo-1494790108755-2616b74b5b1c?w=150&h=150&fit=crop&crop=face",john:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",alex:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",mike:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",sarah:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"},l={args:{name:"Jane Doe",src:a.jane,status:"online",size:48,showTooltip:!0}},c={args:{name:"John Smith",status:"away",size:48,showTooltip:!0}},u={args:{name:"Alex Johnson",src:a.alex,size:96,status:"busy",showTooltip:!0,showStatusText:!0}},d={args:{name:"Mike Wilson",src:a.mike,size:32,status:"online",showTooltip:!0}},p={render:()=>e.createElement("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"}},e.createElement(s,{name:"Online User",src:a.jane,status:"online",size:48,showStatusText:!0}),e.createElement(s,{name:"Away User",src:a.john,status:"away",size:48,showStatusText:!0}),e.createElement(s,{name:"Busy User",src:a.alex,status:"busy",size:48,showStatusText:!0}),e.createElement(s,{name:"Idle User",src:a.mike,status:"idle",size:48,showStatusText:!0}),e.createElement(s,{name:"Offline User",status:"offline",size:48,showStatusText:!0}))},m={render:()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(s,{name:"Circular",src:a.jane,status:"online",variant:"circular",size:64}),e.createElement(s,{name:"Rounded",src:a.john,status:"away",variant:"rounded",size:64}),e.createElement(s,{name:"Square",src:a.alex,status:"busy",variant:"square",size:64}))},f={args:{name:"Sarah Connor",src:a.sarah,status:"online",size:56,showBadge:!0,badgeContent:"3",showTooltip:!0}},h={args:{name:"Loading User",status:"online",size:48,loading:!0}},g={args:{name:"John Doe",src:a.john,status:"online",size:56,onClick:()=>alert("Avatar clicked!"),showTooltip:!0}},v={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px",alignItems:"center"}},e.createElement("div",{style:{textAlign:"center"}},e.createElement(s,{name:"Top Left",src:a.jane,status:"online",statusPosition:"top-left",size:64}),e.createElement("p",{style:{margin:"8px 0 0",fontSize:"12px",color:"#666"}},"Top Left")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(s,{name:"Top Right",src:a.john,status:"away",statusPosition:"top-right",size:64}),e.createElement("p",{style:{margin:"8px 0 0",fontSize:"12px",color:"#666"}},"Top Right")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(s,{name:"Bottom Left",src:a.alex,status:"busy",statusPosition:"bottom-left",size:64}),e.createElement("p",{style:{margin:"8px 0 0",fontSize:"12px",color:"#666"}},"Bottom Left")),e.createElement("div",{style:{textAlign:"center"}},e.createElement(s,{name:"Bottom Right",src:a.mike,status:"idle",statusPosition:"bottom-right",size:64}),e.createElement("p",{style:{margin:"8px 0 0",fontSize:"12px",color:"#666"}},"Bottom Right")))},y={render:()=>e.createElement("div",{style:{display:"flex",gap:"16px",alignItems:"center"}},e.createElement(s,{name:"Blue Border",src:a.jane,status:"online",borderColor:"#3b82f6",size:56}),e.createElement(s,{name:"Green Border",src:a.john,status:"online",borderColor:"#10b981",size:56}),e.createElement(s,{name:"Purple Border",src:a.alex,status:"online",borderColor:"#8b5cf6",size:56}))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Jane Doe",
    src: mockAvatars.jane,
    status: "online",
    size: 48,
    showTooltip: true
  }
}`,...l.parameters?.docs?.source},description:{story:"Default story with an image and online status",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "John Smith",
    status: "away",
    size: 48,
    showTooltip: true
  }
}`,...c.parameters?.docs?.source},description:{story:"Avatar without image showing initials fallback",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Alex Johnson",
    src: mockAvatars.alex,
    size: 96,
    status: "busy",
    showTooltip: true,
    showStatusText: true
  }
}`,...u.parameters?.docs?.source},description:{story:"Large size variant for profile pages",...u.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Mike Wilson",
    src: mockAvatars.mike,
    size: 32,
    status: "online",
    showTooltip: true
  }
}`,...d.parameters?.docs?.source},description:{story:"Small size variant for compact layouts",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>\r
      <UserAvatarWithStatus name="Online User" src={mockAvatars.jane} status="online" size={48} showStatusText={true} />\r
      <UserAvatarWithStatus name="Away User" src={mockAvatars.john} status="away" size={48} showStatusText={true} />\r
      <UserAvatarWithStatus name="Busy User" src={mockAvatars.alex} status="busy" size={48} showStatusText={true} />\r
      <UserAvatarWithStatus name="Idle User" src={mockAvatars.mike} status="idle" size={48} showStatusText={true} />\r
      <UserAvatarWithStatus name="Offline User" status="offline" size={48} showStatusText={true} />\r
    </div>
}`,...p.parameters?.docs?.source},description:{story:"Different status indicators",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <UserAvatarWithStatus name="Circular" src={mockAvatars.jane} status="online" variant="circular" size={64} />\r
      <UserAvatarWithStatus name="Rounded" src={mockAvatars.john} status="away" variant="rounded" size={64} />\r
      <UserAvatarWithStatus name="Square" src={mockAvatars.alex} status="busy" variant="square" size={64} />\r
    </div>
}`,...m.parameters?.docs?.source},description:{story:"Different avatar shape variants",...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Sarah Connor",
    src: mockAvatars.sarah,
    status: "online",
    size: 56,
    showBadge: true,
    badgeContent: "3",
    showTooltip: true
  }
}`,...f.parameters?.docs?.source},description:{story:"Avatar with notification badge",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    name: "Loading User",
    status: "online",
    size: 48,
    loading: true
  }
}`,...h.parameters?.docs?.source},description:{story:"Loading state demonstration",...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: "John Doe",
    src: mockAvatars.john,
    status: "online",
    size: 56,
    onClick: () => alert('Avatar clicked!'),
    showTooltip: true
  }
}`,...g.parameters?.docs?.source},description:{story:"Clickable avatar with interaction",...g.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    alignItems: 'center'
  }}>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <UserAvatarWithStatus name="Top Left" src={mockAvatars.jane} status="online" statusPosition="top-left" size={64} />\r
        <p style={{
        margin: '8px 0 0',
        fontSize: '12px',
        color: '#666'
      }}>Top Left</p>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <UserAvatarWithStatus name="Top Right" src={mockAvatars.john} status="away" statusPosition="top-right" size={64} />\r
        <p style={{
        margin: '8px 0 0',
        fontSize: '12px',
        color: '#666'
      }}>Top Right</p>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <UserAvatarWithStatus name="Bottom Left" src={mockAvatars.alex} status="busy" statusPosition="bottom-left" size={64} />\r
        <p style={{
        margin: '8px 0 0',
        fontSize: '12px',
        color: '#666'
      }}>Bottom Left</p>\r
      </div>\r
      <div style={{
      textAlign: 'center'
    }}>\r
        <UserAvatarWithStatus name="Bottom Right" src={mockAvatars.mike} status="idle" statusPosition="bottom-right" size={64} />\r
        <p style={{
        margin: '8px 0 0',
        fontSize: '12px',
        color: '#666'
      }}>Bottom Right</p>\r
      </div>\r
    </div>
}`,...v.parameters?.docs?.source},description:{story:"Different status positions",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>\r
      <UserAvatarWithStatus name="Blue Border" src={mockAvatars.jane} status="online" borderColor="#3b82f6" size={56} />\r
      <UserAvatarWithStatus name="Green Border" src={mockAvatars.john} status="online" borderColor="#10b981" size={56} />\r
      <UserAvatarWithStatus name="Purple Border" src={mockAvatars.alex} status="online" borderColor="#8b5cf6" size={56} />\r
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Custom border colors",...y.parameters?.docs?.description}}};const ne=["Default","WithoutImage","LargeSize","SmallSize","StatusVariants","ShapeVariants","WithBadge","Loading","Clickable","StatusPositions","WithBorders"];export{g as Clickable,l as Default,u as LargeSize,h as Loading,m as ShapeVariants,d as SmallSize,v as StatusPositions,p as StatusVariants,f as WithBadge,y as WithBorders,c as WithoutImage,ne as __namedExportsOrder,oe as default};
